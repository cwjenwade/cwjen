#!/usr/bin/env python3
from __future__ import annotations

import base64
import csv
import gzip
import json
import random
import time
import urllib.error
import urllib.parse
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
from typing import Any

BASE = Path(__file__).resolve().parent
INPUT_B64 = BASE / "items.json.gz.b64"
OUTPUT_JSON = BASE / "synonym_mapping.json"
OUTPUT_CSV = BASE / "synonym_mapping.csv"
AUDIT_CSV = BASE / "synonym_audit_30.csv"

API = "https://api.datamuse.com/words"
MAX_SYNONYMS = 4
WORKERS = 10


def load_items() -> list[dict[str, Any]]:
    encoded = INPUT_B64.read_text(encoding="utf-8").strip()
    raw = gzip.decompress(base64.b64decode(encoded))
    return json.loads(raw.decode("utf-8"))


def api_get(params: dict[str, str | int], retries: int = 5) -> list[dict[str, Any]]:
    url = API + "?" + urllib.parse.urlencode(params)
    headers = {"User-Agent": "GRE-synonym-batch/1.0 (educational vocabulary processing)"}
    last_error: Exception | None = None
    for attempt in range(retries):
        try:
            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req, timeout=30) as response:
                return json.loads(response.read().decode("utf-8"))
        except (urllib.error.URLError, TimeoutError, json.JSONDecodeError) as exc:
            last_error = exc
            time.sleep((2**attempt) * 0.5 + random.random() * 0.25)
    raise RuntimeError(f"Datamuse request failed: {url}: {last_error}")


def normalize(value: str) -> str:
    return " ".join(value.replace("_", " ").split()).strip()


def pos_matches(result: dict[str, Any], expected: list[str]) -> bool:
    if not expected:
        return True
    tags = {str(tag).lower() for tag in result.get("tags", [])}
    result_pos = tags.intersection({"n", "v", "adj", "adv"})
    return not result_pos or bool(result_pos.intersection(expected))


def choose(results: list[dict[str, Any]], target: str, partner: str, expected: list[str], existing: list[str]) -> list[str]:
    target_key = normalize(target).casefold()
    partner_key = normalize(partner).casefold()
    seen = {normalize(x).casefold() for x in existing}
    non_partner: list[str] = []
    partner_hits: list[str] = []
    for result in results:
        if not pos_matches(result, expected):
            continue
        candidate = normalize(str(result.get("word", "")))
        key = candidate.casefold()
        if not candidate or key == target_key or key in seen:
            continue
        # Suppress obvious possessive/plural echoes of the headword.
        if key.rstrip("s") == target_key.rstrip("s"):
            continue
        seen.add(key)
        if key == partner_key:
            partner_hits.append(candidate)
        else:
            non_partner.append(candidate)
    return non_partner + partner_hits


def fetch_one(item: dict[str, Any]) -> tuple[str, dict[str, Any]]:
    word = str(item["w"])
    partner = str(item.get("p", ""))
    expected = [str(x) for x in item.get("pos", [])]

    strict_params: dict[str, str | int] = {
        "rel_syn": word,
        "md": "p",
        "max": 100,
    }
    if partner:
        strict_params["topics"] = partner
    strict_results = api_get(strict_params)
    strict_candidates = choose(strict_results, word, partner, expected, [])
    selected = strict_candidates[:MAX_SYNONYMS]
    strict_selected_count = len(selected)

    fallback_used = False
    if len(selected) < MAX_SYNONYMS:
        fallback_params: dict[str, str | int] = {
            "ml": word,
            "md": "p",
            "max": 100,
        }
        if partner:
            fallback_params["topics"] = partner
        fallback_results = api_get(fallback_params)
        fallback_candidates = choose(fallback_results, word, partner, expected, selected)
        for candidate in fallback_candidates:
            if len(selected) >= MAX_SYNONYMS:
                break
            selected.append(candidate)
            fallback_used = True

    if not selected:
        source = "NO_RESULT"
    elif fallback_used:
        source = "WORDNET_STRICT_PLUS_DATAMUSE_MEANS_LIKE"
    else:
        source = "WORDNET_STRICT"

    return word, {
        "synonyms": selected,
        "source": source,
        "strict_selected_count": strict_selected_count,
        "expected_pos": expected,
        "partner": partner,
    }


def main() -> None:
    items = load_items()
    mapping: dict[str, dict[str, Any]] = {}
    failures: list[tuple[str, str]] = []

    with ThreadPoolExecutor(max_workers=WORKERS) as executor:
        futures = {executor.submit(fetch_one, item): item for item in items}
        completed = 0
        for future in as_completed(futures):
            item = futures[future]
            word = str(item["w"])
            try:
                key, value = future.result()
                mapping[key] = value
            except Exception as exc:  # retain row and make failure visible
                failures.append((word, str(exc)))
                mapping[word] = {
                    "synonyms": [],
                    "source": "REQUEST_FAILED",
                    "strict_selected_count": 0,
                    "expected_pos": item.get("pos", []),
                    "partner": item.get("p", ""),
                    "error": str(exc),
                }
            completed += 1
            if completed % 100 == 0:
                print(f"completed {completed}/{len(items)}", flush=True)

    ordered = {item["w"]: mapping[item["w"]] for item in items}
    OUTPUT_JSON.write_text(json.dumps(ordered, ensure_ascii=False, indent=2), encoding="utf-8")

    with OUTPUT_CSV.open("w", encoding="utf-8-sig", newline="") as handle:
        writer = csv.writer(handle)
        writer.writerow(["Word", "Synonyms", "Source", "Strict_Selected_Count", "Expected_POS", "Partner", "Error"])
        for item in items:
            word = item["w"]
            result = mapping[word]
            writer.writerow([
                word,
                "; ".join(result.get("synonyms", [])),
                result.get("source", ""),
                result.get("strict_selected_count", 0),
                "/".join(result.get("expected_pos", [])),
                result.get("partner", ""),
                result.get("error", ""),
            ])

    rng = random.Random(20260725)
    sample = rng.sample(items, min(30, len(items)))
    with AUDIT_CSV.open("w", encoding="utf-8-sig", newline="") as handle:
        writer = csv.writer(handle)
        writer.writerow(["Word", "Partner", "Expected_POS", "Synonyms", "Source", "Strict_Selected_Count"])
        for item in sample:
            result = mapping[item["w"]]
            writer.writerow([
                item["w"],
                item.get("p", ""),
                "/".join(item.get("pos", [])),
                "; ".join(result.get("synonyms", [])),
                result.get("source", ""),
                result.get("strict_selected_count", 0),
            ])

    counts: dict[str, int] = {}
    for result in mapping.values():
        counts[result["source"]] = counts.get(result["source"], 0) + 1
    print(json.dumps({"total": len(items), "source_counts": counts, "failures": len(failures)}, indent=2))
    if failures:
        print("Failures:")
        for word, error in failures[:20]:
            print(word, error)


if __name__ == "__main__":
    main()
