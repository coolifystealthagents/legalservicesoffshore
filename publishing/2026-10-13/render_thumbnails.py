#!/usr/bin/env python3
"""Render exact-title October 13 thumbnails in the site's legal case-file style."""

import hashlib
import json
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[2]
MANIFEST = Path(__file__).with_name("manifest.json")
FONT_BOLD = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
FONT_REGULAR = "/System/Library/Fonts/Supplemental/Arial.ttf"
PALETTES = [
    ("#26160B", "#C96A3D", "#FFF8ED"), ("#172A3A", "#D99A4E", "#FFF9EF"),
    ("#2B1D22", "#E18B69", "#FFF7F1"), ("#1E3047", "#C8A15A", "#FFF9EA"),
    ("#302016", "#D97745", "#FFF7ED"), ("#192B2A", "#D8A35D", "#FFF9EE"),
    ("#2D1B12", "#E49A6A", "#FFF8F2"), ("#183047", "#C88D4A", "#FFF7E9"),
    ("#2C1C2B", "#D89B62", "#FFF8EF"), ("#1D2E38", "#E3835F", "#FFF8F4"),
    ("#332217", "#CDA052", "#FFFAF0"), ("#1D2940", "#D97B50", "#FFF7F2"),
    ("#251A32", "#DCA45C", "#FFF9F0"), ("#17313B", "#E18A61", "#FFF7F1"),
    ("#30231D", "#C99455", "#FFF9ED"), ("#1E2A46", "#D57D56", "#FFF7F2"),
    ("#2B2115", "#D9A05F", "#FFF9EF"),
]


def font(size, regular=False):
    return ImageFont.truetype(FONT_REGULAR if regular else FONT_BOLD, size)


def lines_for(draw, text, chosen_font, max_width):
    lines, current = [], ""
    for word in text.split():
        trial = f"{current} {word}".strip()
        if draw.textbbox((0, 0), trial, font=chosen_font)[2] <= max_width:
            current = trial
        else:
            lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def title_layout(draw, title, kind, max_width, max_height):
    start = 59 if kind == "blog" else 46
    for size in range(start, 29, -2):
        chosen = font(size)
        lines = lines_for(draw, title, chosen, max_width)
        line_height = int(size * 1.18)
        if len(lines) * line_height <= max_height:
            return chosen, lines, line_height
    raise ValueError(f"Title cannot fit safely: {title}")


def draw_case_motif(draw, width, height, accent, paper, seed):
    left = int(width * .69)
    top = int(height * .20)
    folder_w = int(width * .20)
    folder_h = int(height * .53)
    offset = int(width * .012)
    for layer in range(3, -1, -1):
        x = left + layer * offset
        y = top - layer * offset
        fill = accent if layer == 0 else paper
        draw.rounded_rectangle((x, y, x + folder_w, y + folder_h), radius=20, fill=fill, outline=paper, width=3)
    for row in range(5):
        y = top + int(folder_h * (.22 + row * .13))
        length = int(folder_w * (.42 + (seed[row] % 35) / 100))
        draw.rounded_rectangle((left + int(folder_w * .13), y, left + length, y + max(5, width // 260)), radius=4, fill=paper)
    stamp_r = int(width * .034)
    cx, cy = left + int(folder_w * .74), top + int(folder_h * .76)
    draw.ellipse((cx-stamp_r, cy-stamp_r, cx+stamp_r, cy+stamp_r), outline=paper, width=max(4, width // 240))
    stroke = max(4, width // 220)
    draw.line((cx - int(stamp_r * .43), cy, cx - int(stamp_r * .10), cy + int(stamp_r * .32)), fill=paper, width=stroke)
    draw.line((cx - int(stamp_r * .10), cy + int(stamp_r * .32), cx + int(stamp_r * .48), cy - int(stamp_r * .36)), fill=paper, width=stroke)


def render(item, kind, index):
    width, height = (1536, 1024) if kind == "blog" else (1200, 630)
    background, accent, paper = PALETTES[index]
    image = Image.new("RGB", (width, height), background)
    draw = ImageDraw.Draw(image)
    margin = int(width * .065)
    seed = hashlib.sha256(item["slug"].encode()).digest()

    draw.rounded_rectangle((margin, margin, width-margin, height-margin), radius=34, outline=accent, width=max(4, width // 300))
    draw_case_motif(draw, width, height, accent, paper, seed)
    label = "LEGAL OPERATIONS BLOG" if kind == "blog" else "LEGAL OPERATIONS RESEARCH"
    draw.text((margin + 24, int(height * .14)), label, font=font(max(20, width // 53)), fill=accent)

    title_font, title_lines, line_height = title_layout(draw, item["title"], kind, int(width * .56), int(height * .43))
    y = int(height * .26)
    for line in title_lines:
        draw.text((margin + 24, y), line, font=title_font, fill=paper)
        y += line_height

    draw.line((margin + 24, height - margin - 90, int(width * .40), height - margin - 90), fill=accent, width=max(4, width // 280))
    draw.text((margin + 24, height - margin - 66), "LEGAL SERVICES OFFSHORE", font=font(max(18, width // 65)), fill=accent)

    output = ROOT / "public" / item["thumbnail"].lstrip("/")
    output.parent.mkdir(parents=True, exist_ok=True)
    if kind == "blog":
        image.save(output, "WEBP", quality=91, method=6)
    else:
        image.save(output, "PNG", optimize=True)


def main():
    manifest = json.loads(MANIFEST.read_text())
    entries = [(item, "blog") for item in manifest["blog"]] + [(item, "research") for item in manifest["research"]]
    for index, (item, kind) in enumerate(entries):
        render(item, kind, index)
    print(f"Rendered {len(entries)} exact-title thumbnails without date text.")


if __name__ == "__main__":
    main()
