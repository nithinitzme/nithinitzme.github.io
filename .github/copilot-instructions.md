## Quick orientation for AI coding agents

This repository is a single-page static site served via GitHub Pages. There is no build system, no package.json, and no test framework. Edits directly modify `index.html` and files under `assets/`.

Key facts (big picture)
- Single HTML entry: `index.html` is the canonical source for content, styling and small interactive bits (mobile menu, year, email protection).
- Static assets live in `assets/` (headshot: `assets/nithin.jpg`, CV: `assets/Nithin_Raveendran_CV.pdf`, social preview: `assets/og-image.png`).
- Styling is contained in an inline `<style>` block at the top of `index.html` (no external CSS files). Color tokens are in `:root{ --accent1, --accent2, ... }`.

Editing guidance (what to change and where)
- Main content sections use stable IDs. Prefer editing these rather than restructuring:
  - `#about`, `#research`, `#publications`, `#talks`, `#teaching`, `#contact`.
- Publications: add `<li>` elements inside the lists with class `pub`. Use the repo's existing pattern:

  Example (copy/paste and edit):
  ```html
  <li><strong>Paper title</strong> — <em>Venue</em>, Year. (Authors, with <u>N. Raveendran</u> underlined.) [<a href="DOI-or-arXiv-link" target="_blank">link</a>]</li>
  ```

- Talks: add items as `<div>` entries inside the `#talks` card. Example:
  ```html
  <div><strong>Talk title</strong> — Venue, City, Year. [<a href="slides.pdf">slides</a>]</div>
  ```

Important dynamic snippets
- Email: a small JS block near the bottom defines `const EMAIL = 'nithin@arizona.edu'` and sets the `#emailLink` href. Update that constant when changing contact info.
- Year: the script sets `#year` to the current year automatically — do not hardcode the footer year.
- Mobile menu: `#menuBtn` toggles `#navlinks`; keep the button and script intact if you modify header markup.

Assets and naming conventions
- README advises "keep filenames short and lowercase", but the existing CV file is `assets/Nithin_Raveendran_CV.pdf`. When adding files prefer lowercase and short names (e.g., `assets/cv.pdf`, `assets/headshot.jpg`) but don't break existing links unless you also update `index.html`.
- Ensure `assets/og-image.png` exists if you change Open Graph metadata.

Deployment & preview
- No special build is required. To preview locally, open `index.html` in a browser or run a simple static server from repo root (zsh):
  ```bash
  # quick local preview
  python3 -m http.server 8000
  # then open http://localhost:8000 in a browser
  ```
- Main deployment is GitHub Pages: commit to `main` and push. README includes an example `git` workflow.
- For a custom domain, add a `CNAME` file at the repo root and follow Pages settings (DNS entries required).

Agent-specific rules (do this, not that)
- Do: make minimal, targeted edits to `index.html` (update existing sections, add `<li>`/`<div>` entries). Preserve section IDs and class names.
- Do: update both `index.html` and `assets/` when renaming or replacing images/files so links remain valid.
- Don't: introduce new build tooling, bundlers, or transpilers — the site intentionally has no build step.
- Don't: reformat the entire `index.html` (keeps diffs small and preserves author intent). Keep indentation/style consistent with current file.

Files to reference for examples
- `index.html` — main source of truth (content, CSS variables, tiny JS behaviors)
- `assets/` — headshot, CV, OG image examples and canonical paths
- `README.MD` — contains deployment steps and author notes (useful wording to preserve in the site)

When in doubt
- If a change affects user-visible assets (images, CV filename, links), update both `index.html` and the file in `assets/` in the same commit.
- If you need to add structured data or meta tags, follow the existing `application/ld+json` pattern near the bottom of `index.html`.
