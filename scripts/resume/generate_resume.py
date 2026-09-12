#!/usr/bin/env python3
"""
Regenerates assets/resume.pdf from scripts/resume/resume.html.

This resume is hand-synced to match the content in app.js (Timeline,
Projects, Education, Open Source & Personal Projects). Whenever that
content changes, update resume.html to match, then re-run this script:

    pip install weasyprint --break-system-packages
    python3 scripts/resume/generate_resume.py

It renders resume.html straight to PDF with no other build step.
"""
from pathlib import Path
from weasyprint import HTML

ROOT = Path(__file__).resolve().parent.parent.parent
SRC = ROOT / "scripts" / "resume" / "resume.html"
OUT = ROOT / "assets" / "resume.pdf"

def main():
    HTML(str(SRC)).write_pdf(str(OUT))
    print(f"Wrote {OUT}")

if __name__ == "__main__":
    main()
