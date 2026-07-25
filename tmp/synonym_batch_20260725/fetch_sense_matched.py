#!/usr/bin/env python3
from __future__ import annotations

import base64
import csv
import gzip
import json
import random
import re
import time
import urllib.error
import urllib.parse
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
from typing import Any

BASE = Path(__file__).resolve().parent
INPUT_B64 = BASE / "items.json.gz.b64"
OUT_JSON = BASE / "synonym_mapping_sense.json"
OUT_CSV = BASE / "synonym_mapping_sense.csv"
AUDIT_CSV = BASE / "synonym_audit_sense_30.csv"
API = "https://api.dictionaryapi.dev/api/v2/entries/en/"
WORKERS = 8
MAX_SYNONYMS = 4

STOP = {
    "a","an","the","and","or","of","to","in","on","at","for","from","by","with","as","that","this","these","those","is","are","be","being","been","one","someone","something","especially","often","usually","very","having","showing","marked","characteristic","relating","used","causing","caused","make","made","act","state","quality","person","thing","way","not","without","into","through","which","when","where","who","whose","either","two","any","all","more","less","than","such","its","their","his","her","it","they","them","he","she"
}
POS_MAP = {"noun":"n", "verb":"v", "adjective":"adj", "adverb":"adv", "interjection":"int"}

QUERY_OVERRIDES = {
    "Hyberbole": "hyperbole",
    "Irresistable": "irresistible",
    "Map-maker": "mapmaker",
    "Sleep-causing": "soporific",
    "Heat-producing": "calorific",
    "Stymie or stymy": "stymie",
    "Misanthrope or misanthropist": "misanthrope",
    "Viscid or viscous": "viscid",
}

OVERRIDES: dict[str, list[str]] = {
    "Hyberbole": ["exaggeration", "overstatement", "magnification", "embellishment"],
    "Map-maker": ["cartographer", "mapmaker", "mapper"],
    "Sleep-causing": ["soporific", "somniferous", "sedative", "hypnotic"],
    "Heat-producing": ["calorific", "thermogenic", "exothermic", "heat-generating"],
    "Fluke": ["chance", "accident", "stroke of luck", "happenstance"],
    "Progenitor": ["ancestor", "forebear", "originator", "forefather"],
    "Solstice": ["solar turning point", "sun-stop"],
    "Hallucination": ["vision", "apparition", "phantasm", "illusion"],
    "Detonation": ["explosion", "blast", "discharge", "ignition"],
    "Infection": ["contagion", "contamination", "infestation", "disease"],
    "Anoint": ["consecrate", "sanctify", "bless", "oil"],
    "Brawn": ["muscle", "strength", "muscularity", "sinew"],
    "Conduit": ["channel", "pipe", "duct", "passage"],
    "Labile": ["unstable", "changeable", "volatile", "mutable"],
}


def load_items() -> list[dict[str, Any]]:
    encoded = INPUT_B64.read_text(encoding="utf-8").strip()
    raw = gzip.decompress(base64.b64decode(encoded))
    return json.loads(raw.decode("utf-8"))["items"]


def norm(s: str) -> str:
    return " ".join(s.replace("_", " ").split()).strip()


def tokens(s: str) -> set[str]:
    out = set()
    for token in re.findall(r"[A-Za-z][A-Za-z'-]*", s.lower()):
        token = token.strip("'-")
        if len(token) < 3 or token in STOP:
            continue
        for suffix in ("ing","edly","ed","ly","ness","ment","tion","s"):
            if token.endswith(suffix) and len(token) > len(suffix)+3:
                token = token[:-len(suffix)]
                break
        out.add(token)
    return out


def query_forms(word: str) -> list[str]:
    primary = QUERY_OVERRIDES.get(word, word)
    forms = [primary]
    if " or " in primary:
        forms.extend(x.strip() for x in primary.split(" or "))
    forms.append(primary.replace("-", " "))
    forms.append(primary.replace(" ", "-"))
    if primary.lower().endswith("ies"):
        forms.append(primary[:-3] + "y")
    if primary.lower().endswith("s") and not primary.lower().endswith("ss"):
        forms.append(primary[:-1])
    result=[]; seen=set()
    for x in forms:
        x=norm(x); k=x.casefold()
        if x and k not in seen:
            seen.add(k); result.append(x)
    return result


def fetch_json(term: str, retries: int = 4) -> Any | None:
    url = API + urllib.parse.quote(term, safe="")
    headers = {"User-Agent": "GRE-vocabulary-synonyms/1.0"}
    for attempt in range(retries):
        try:
            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req, timeout=25) as response:
                return json.loads(response.read().decode("utf-8"))
        except urllib.error.HTTPError as exc:
            if exc.code == 404:
                return None
            if exc.code in (429, 500, 502, 503, 504):
                time.sleep((2**attempt)*0.6 + random.random()*0.3)
                continue
            return None
        except (urllib.error.URLError, TimeoutError, json.JSONDecodeError):
            time.sleep((2**attempt)*0.6 + random.random()*0.3)
    return None


def extract_sense_synonyms(data: Any, definition: str, expected_pos: list[str], target: str) -> tuple[list[str], list[str], str]:
    if not isinstance(data, list):
        return [], [], ""
    target_tokens = tokens(definition)
    scored: list[tuple[float, int, list[str], list[str], str]] = []
    order = 0
    for entry in data:
        for meaning in entry.get("meanings", []) or []:
            pos_raw = str(meaning.get("partOfSpeech", "")).lower()
            pos = POS_MAP.get(pos_raw, pos_raw)
            if expected_pos and pos not in expected_pos:
                continue
            base_syn = [norm(str(x)) for x in (meaning.get("synonyms", []) or [])]
            base_ant = [norm(str(x)) for x in (meaning.get("antonyms", []) or [])]
            defs = meaning.get("definitions", []) or [] or [{}]
            for d in defs:
                dtext = str(d.get("definition", ""))
                syns = base_syn + [norm(str(x)) for x in (d.get("synonyms", []) or [])]
                ants = base_ant + [norm(str(x)) for x in (d.get("antonyms", []) or [])]
                overlap = len(target_tokens & tokens(dtext))
                score = 20 + overlap * 4
                if target_tokens and overlap == 0:
                    score -= 2
                scored.append((score, -order, syns, ants, dtext))
                order += 1
    scored.sort(reverse=True, key=lambda x: (x[0], x[1]))
    selected: list[str] = []
    antonyms: list[str] = []
    best_def = scored[0][4] if scored else ""
    target_key = norm(target).casefold(); seen={target_key}
    for _, _, syns, ants, _ in scored:
        antonyms.extend(ants)
        for candidate in syns:
            key=candidate.casefold()
            if candidate and key not in seen:
                seen.add(key); selected.append(candidate)
    ant_seen=set(); ant_clean=[]
    for a in antonyms:
        k=a.casefold()
        if a and k not in ant_seen:
            ant_seen.add(k); ant_clean.append(a)
    return selected, ant_clean, best_def


def merge_candidates(item: dict[str, Any], dict_syn: list[str], dict_ant: list[str]) -> tuple[list[str], str, str]:
    word=str(item["w"])
    if word in OVERRIDES:
        return OVERRIDES[word][:MAX_SYNONYMS], "MANUAL_SENSE_CORRECTION", "definition-specific correction"
    dm=item.get("datamuse", {}) or {}
    dm_all=[norm(str(x)) for x in dm.get("synonyms", [])]
    strict_n=int(dm.get("strict_selected_count",0) or 0)
    dm_strict=dm_all[:strict_n]; dm_near=dm_all[strict_n:]
    antonym_keys={x.casefold() for x in dict_ant}
    target_key=norm(word).casefold(); partner_key=norm(str(item.get("partner", ""))).casefold()
    selected=[]; seen={target_key}
    def add(seq: list[str], allow_partner: bool=True):
        for c in seq:
            c=norm(c); k=c.casefold()
            if not c or k in seen or k in antonym_keys:
                continue
            if not allow_partner and k == partner_key:
                continue
            if k.rstrip("s") == target_key.rstrip("s"):
                continue
            seen.add(k); selected.append(c)
            if len(selected)>=MAX_SYNONYMS:
                return
    add(dict_syn)
    if len(selected)<MAX_SYNONYMS: add(dm_strict)
    if len(selected)<2: add(dm_near)
    if dict_syn and dm_strict: source="FREE_DICTIONARY_API_PLUS_WORDNET"
    elif dict_syn: source="FREE_DICTIONARY_API"
    elif dm_strict: source="PRINCETON_WORDNET"
    elif selected: source="DATAMUSE_NEAR_SYNONYM"
    else: source="NO_RELIABLE_SYNONYM"
    return selected[:MAX_SYNONYMS], source, ""


def process(item: dict[str, Any]) -> tuple[str, dict[str, Any]]:
    word=str(item["w"]); data=None; queried=""
    for form in query_forms(word):
        data=fetch_json(form)
        if data:
            queried=form; break
    dict_syn, dict_ant, matched_def = extract_sense_synonyms(data, str(item.get("definition", "")), list(item.get("pos", [])), word)
    synonyms, source, note = merge_candidates(item, dict_syn, dict_ant)
    return word, {"synonyms":synonyms,"source":source,"queried_as":queried,"target_definition":item.get("definition", ""),"matched_dictionary_definition":matched_def,"dictionary_synonym_count":len(dict_syn),"wordnet_strict_count":int((item.get("datamuse", {}) or {}).get("strict_selected_count",0) or 0),"partner":item.get("partner", ""),"note":note}


def main() -> None:
    items=load_items(); mapping={}; failures=[]
    with ThreadPoolExecutor(max_workers=WORKERS) as ex:
        futs={ex.submit(process,item):item for item in items}
        for i,fut in enumerate(as_completed(futs),1):
            item=futs[fut]; word=str(item["w"])
            try:
                k,v=fut.result(); mapping[k]=v
            except Exception as exc:
                failures.append((word,str(exc)))
                mapping[word]={"synonyms":[],"source":"REQUEST_FAILED","queried_as":"","target_definition":item.get("definition",""),"matched_dictionary_definition":"","dictionary_synonym_count":0,"wordnet_strict_count":0,"partner":item.get("partner",""),"note":str(exc)}
            if i%100==0: print(f"completed {i}/{len(items)}",flush=True)
    ordered={item["w"]:mapping[item["w"]] for item in items}
    OUT_JSON.write_text(json.dumps(ordered,ensure_ascii=False,indent=2),encoding="utf-8")
    with OUT_CSV.open("w",encoding="utf-8-sig",newline="") as h:
        w=csv.writer(h); w.writerow(["Word","Synonyms","Source","Queried_As","Target_Definition","Matched_Dictionary_Definition","Dictionary_Synonym_Count","WordNet_Strict_Count","Partner","Note"])
        for item in items:
            r=mapping[item["w"]]; w.writerow([item["w"],"; ".join(r["synonyms"]),r["source"],r["queried_as"],r["target_definition"],r["matched_dictionary_definition"],r["dictionary_synonym_count"],r["wordnet_strict_count"],r["partner"],r["note"]])
    rng=random.Random(20260725); sample=rng.sample(items,min(30,len(items)))
    with AUDIT_CSV.open("w",encoding="utf-8-sig",newline="") as h:
        w=csv.writer(h); w.writerow(["Word","Partner","Target_Definition","Synonyms","Source","Matched_Dictionary_Definition"])
        for item in sample:
            r=mapping[item["w"]]; w.writerow([item["w"],r["partner"],r["target_definition"],"; ".join(r["synonyms"]),r["source"],r["matched_dictionary_definition"]])
    from collections import Counter
    print(json.dumps({"total":len(items),"sources":Counter(r["source"] for r in mapping.values()),"empty":sum(not r["synonyms"] for r in mapping.values()),"failures":len(failures)},default=dict,indent=2))

if __name__=="__main__": main()
