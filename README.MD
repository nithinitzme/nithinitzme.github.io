# Nithin Raveendran — personal research website

The public research homepage at [nithinitzme.github.io](https://nithinitzme.github.io), hosted by GitHub Pages.

## Files

- `index.html` — accessible, single-page research profile, including current research, publications, experience, talks and contact.
- `speaking.html` — speaking topics, selected appearances, host bio, mentorship, news and field notes.
- `resume.html` — ATS-readable research resume, with a **Print / Save as PDF** control for visitors.
- `assets/site-2026.css` — new warm-neutral academic design; responsive for desktop/mobile.
- `assets/nithin.jpg` — existing portrait reused.
- `assets/style.css`, `assets/script.js` — files from the previous design; retained for reference and rollback.
- `assets/nithin_cv.pdf` — older PDF, retained as an archive but no longer linked in navigation.

The site is static HTML and CSS: no build system, npm dependencies, analytics, or third-party tracking scripts.

## Updating publications

Edit the `#publications` section of `index.html`. Keep peer-reviewed papers and preprints clearly distinguished. Prefer a DOI or an arXiv abstract link for each item. The list is selective; Google Scholar links to the full record.

## Updating the resume

Edit `resume.html`, including the profile and current research sections, when the research record changes. Visitors can print or save the page to PDF using their browser. If replacing the archival CV with a current downloadable PDF, upload a new PDF under `assets/` and explicitly link it from the homepage after checking its date and contents.

## Publishing

Changes to the default `main` branch are published by GitHub Pages. Create a feature branch and pull request to review changes before merging.

## Accessibility

The site uses semantic HTML, a skip link, keyboard-visible focus styles, responsive layout, and reduced-motion support. The research portrait has alternative text. Please review on mobile and desktop whenever updating the layout.

Content © Nithin Raveendran.

## Speaking, mentorship and news

Update `speaking.html` for new appearances and dated news. Distinguish invited talks from contributed talks and organizing roles. Add named mentorship outcomes only with confirmed details and permission to identify the student. Field notes are short standalone articles within `#notes`; add each article with a stable ID. Keep the latest news first.
