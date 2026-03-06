#!/usr/bin/env python3
"""Simple site crawler for extracting titles and meta descriptions.

Usage:
    python3 scripts/crawl_site.py https://cwjen.vercel.app

The script will crawl internal links up to a limit (default 100 pages)
and write results to ``crawl_results.csv`` in the workspace root.
"""

from __future__ import annotations

import csv
import sys
from collections import deque
from urllib.parse import urljoin, urlparse

import requests
from bs4 import BeautifulSoup


def crawl(base_url: str, max_pages: int = 100) -> list[tuple[str, str, str]]:
    visited: set[str] = set()
    queue: deque[str] = deque([base_url])
    results: list[tuple[str, str, str]] = []

    base_netloc = urlparse(base_url).netloc

    while queue and len(visited) < max_pages:
        url = queue.popleft()
        if url in visited:
            continue
        try:
            resp = requests.get(url, timeout=10)
            resp.raise_for_status()
        except Exception as exc:
            print(f"failed {url}: {exc}")
            continue

        visited.add(url)
        soup = BeautifulSoup(resp.text, "html.parser")
        title = soup.title.string.strip() if soup.title and soup.title.string else ""
        desc = ""
        m = soup.find("meta", attrs={"name": "description"})
        if m and m.get("content"):
            desc = m["content"].strip()
        results.append((url, title, desc))

        # enqueue internal links
        for a in soup.find_all("a", href=True):
            href = urljoin(url, a["href"])
            p = urlparse(href)
            if p.netloc == base_netloc and href not in visited:
                queue.append(href)

    return results


if __name__ == "__main__":
    base = sys.argv[1] if len(sys.argv) > 1 else "https://cwjen.vercel.app"
    pages = crawl(base)
    with open("crawl_results.csv", "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow(["url", "title", "description"])
        writer.writerows(pages)
    print(f"crawled {len(pages)} pages, results in crawl_results.csv")
