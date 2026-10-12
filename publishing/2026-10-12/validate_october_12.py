#!/usr/bin/env python3
"""Scoped contract validator for the LegalServicesOffshore October 12 batch."""

import hashlib
import json
import re
import sys
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[2]
errors = []


def check(condition, message):
    if not condition:
        errors.append(message)


def read(relative):
    return (ROOT / relative).read_text()


def extract_json(text, prefix, suffix=" as const;"):
    start = text.find(prefix)
    end = text.find(suffix, start + len(prefix))
    if start < 0 or end < 0:
        raise ValueError(f"cannot extract {prefix}")
    return json.loads(text[start + len(prefix):end])


def normalized(text):
    return re.sub(r"[^a-z0-9]+", " ", text.lower()).strip()


blog_text = read("app/blog/blog-2026-10-12.ts")
research_text = read("app/research/research-2026-10-12.ts")
blogs = extract_json(blog_text, "export const october12BlogPosts = ")
research = extract_json(research_text, "export const october12ResearchPosts = ")
manifest = json.loads(read("publishing/2026-10-12/manifest.json"))

check(manifest.get("site") == "LegalServicesOffshore.com", "manifest site mismatch")
check(manifest.get("date") == "2026-10-12", "manifest date mismatch")
check(len(blogs) == 12, f"expected 12 Blog articles, found {len(blogs)}")
check(len(research) == 5, f"expected 5 Research articles, found {len(research)}")
check(len(manifest.get("blog", [])) == 12 and len(manifest.get("research", [])) == 5, "manifest must contain 12 Blog + 5 Research")

all_items = [(post, "blog", post.get("featuredImage")) for post in blogs] + [(post, "research", post.get("thumbnail")) for post in research]
check(len({post[0].get("slug") for post in all_items}) == 17, "slugs are not unique")
check(len({post[0].get("title") for post in all_items}) == 17, "titles are not unique")
check(len({post[2] for post in all_items}) == 17, "thumbnail paths are not unique")

date_in_title = re.compile(r"\b(?:2026|oct(?:ober)?\s+12)\b", re.I)
paragraphs = []
for post in blogs:
    slug = post.get("slug", "unknown")
    check(post.get("published") == "2026-10-12" and post.get("modified") == "2026-10-12", f"{slug}: Blog date mismatch")
    check(not date_in_title.search(post.get("title", "")), f"{slug}: title contains the publication date")
    check(len(post.get("sections", [])) == 10, f"{slug}: expected 10 Blog sections")
    check(all(len(section.get("body", "")) >= 650 for section in post.get("sections", [])), f"{slug}: thin Blog section")
    check(len(post.get("sources", [])) >= 4 and all(source.get("url", "").startswith("https://") for source in post.get("sources", [])), f"{slug}: Blog source depth invalid")
    check(post.get("contextualService", {}).get("slug"), f"{slug}: contextual service missing")
    entry = next((item for item in manifest["blog"] if item.get("slug") == slug), None)
    check(entry and entry.get("title") == post.get("title") and entry.get("route") == f"/blog/{slug}" and entry.get("thumbnail") == post.get("featuredImage"), f"{slug}: Blog manifest mismatch")
    paragraphs.extend((slug, section.get("body", "")) for section in post.get("sections", []))

research_slugs = {post.get("slug") for post in research}
allowed_hosts = ("americanbar.org", "nist.gov", "cisa.gov", "gao.gov", "privacy.gov.ph", "w3.org")
for post in research:
    slug = post.get("slug", "unknown")
    check(post.get("published") == "2026-10-12" and post.get("sourceDate") == "2026-10-12" and post.get("updated") == "2026-10-12", f"{slug}: Research date mismatch")
    check(not date_in_title.search(post.get("title", "")), f"{slug}: title contains the publication date")
    check(len(post.get("sections", [])) == 12, f"{slug}: expected 12 Research sections")
    check(all(len(section.get("body", "")) >= 650 for section in post.get("sections", [])), f"{slug}: thin Research section")
    sources = post.get("sources", [])
    check(len(sources) >= 10 and all(source.get("url", "").startswith("https://") for source in sources), f"{slug}: needs 10 authoritative HTTPS sources")
    check(len({source.get("url") for source in sources}) == len(sources), f"{slug}: duplicate Research source")
    check(all(any(host in source.get("url", "") for host in allowed_hosts) for source in sources), f"{slug}: unrecognized source authority")
    related = post.get("relatedSlugs", [])
    check(len(related) == 3 and len(set(related)) == 3 and all(item in research_slugs and item != slug for item in related), f"{slug}: Research related links invalid")
    check(post.get("serviceLink", {}).get("slug"), f"{slug}: service handoff missing")
    entry = next((item for item in manifest["research"] if item.get("slug") == slug), None)
    check(entry and entry.get("title") == post.get("title") and entry.get("route") == f"/research/{slug}" and entry.get("thumbnail") == post.get("thumbnail"), f"{slug}: Research manifest mismatch")
    paragraphs.extend((slug, section.get("body", "")) for section in post.get("sections", []))

seen = {}
for slug, paragraph in paragraphs:
    key = normalized(paragraph)
    if len(key) < 160:
        continue
    if key in seen:
        errors.append(f"duplicate substantive paragraph: {seen[key]} and {slug}")
    else:
        seen[key] = slug

old_files = [path for path in (ROOT / "app").rglob("*") if path.is_file() and path.suffix in {".ts", ".tsx", ".json"} and path.name not in {"blog-2026-10-12.ts", "research-2026-10-12.ts"}]
old_source = "\n".join(path.read_text(errors="ignore") for path in old_files)
for post, _, _ in all_items:
    check(f'"{post["slug"]}"' not in old_source and f"'{post['slug']}'" not in old_source, f"{post['slug']}: slug collides with existing content")
    check(f'"{post["title"]}"' not in old_source and f"'{post['title']}'" not in old_source, f"{post['slug']}: title collides with existing content")
for slug, paragraph in paragraphs:
    check(paragraph not in old_source, f"{slug}: substantive paragraph duplicates existing repository content")

data = read("app/data.ts")
fleet = read("app/fleet-data.ts")
check(data.count("import { october12BlogPosts } from './blog/blog-2026-10-12';") == 1, "Blog import registration invalid")
check(data.count("blogPosts.unshift(...october12BlogPosts as unknown as typeof blogPosts);") == 1, "Blog registry registration invalid")
check(data.count("october8BlogPosts") == 2, "pre-existing October 8 Blog registration changed")
check(fleet.count("import { october12ResearchPosts } from './research/research-2026-10-12';") == 1, "Research import registration invalid")
check(fleet.count("october12ResearchPosts") == 2, "Research registry registration invalid")
check(fleet.count("october8ResearchPosts") == 2, "pre-existing October 8 Research registration changed")

blog_route = read("app/blog/[slug]/page.tsx")
blog_index = read("app/blog/page.tsx")
research_route = read("app/research/[slug]/page.tsx")
research_index = read("app/research/page.tsx")
sitemap = read("app/sitemap.xml/route.ts")
check("<time dateTime={published}>Published:" in blog_route and "featuredImage" in blog_route, "Blog route lacks visible date or thumbnail")
check("Related articles" in blog_route and "<aside" in blog_route, "Blog route lacks related/sidebar behavior")
check("published" in blog_index and "blogPosts" in blog_index, "Blog index/date integration missing")
check("<time dateTime={post.published}>" in research_route and "post.thumbnail" in research_route, "Research route lacks visible date or thumbnail")
check("post.relatedSlugs" in research_route and "<aside" in research_route, "Research route lacks related/sidebar behavior")
check("researchPosts" in research_index and "p.published" in research_index, "Research index/date integration missing")
check("blogs.map" in sitemap and "researchPosts.map" in sitemap, "sitemap lacks Blog or Research registry")

hashes = []
for post, kind, image_path in all_items:
    target = ROOT / "public" / image_path.lstrip("/")
    check(target.exists(), f"{post['slug']}: thumbnail missing")
    if not target.exists():
        continue
    with Image.open(target) as image:
        expected_size = (1536, 1024) if kind == "blog" else (1200, 630)
        expected_format = "WEBP" if kind == "blog" else "PNG"
        check(image.size == expected_size, f"{post['slug']}: {image.size} expected {expected_size}")
        check(image.format == expected_format, f"{post['slug']}: {image.format} expected {expected_format}")
    hashes.append(hashlib.sha256(target.read_bytes()).hexdigest())
check(len(set(hashes)) == 17, "thumbnail hashes are not unique")

renderer = read("publishing/2026-10-12/render_thumbnails.py")
check('item["title"]' in renderer and "OCTOBER 12" not in renderer and "2026-10-12" not in renderer, "thumbnail renderer must use exact titles without date text")

if errors:
    print(f"FAIL ({len(errors)})")
    for error in errors:
        print(f"- {error}")
    sys.exit(1)
print("PASS: 12 Blog + 5 Research; dates, sources, prose, registries, routes, related content, and 17 unique thumbnails verified.")
