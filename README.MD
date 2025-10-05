# nithinitzme.github.io

A simple, professional single-page website for **Nithin Raveendran** (Quantum Computing Researcher). Built as a static site for GitHub Pages — no build tools.

**Live site:** [https://nithinitzme.github.io](https://nithinitzme.github.io)

---

## Structure

```
/
├── index.html                # main site (edit content here)
└── assets/
    ├── nithin.jpg            # headshot used in hero
    ├── og-image.png          # social preview image (optional)
    └── Nithin_Raveendran_CV.pdf   # downloadable CV
```

> Tip: keep filenames short and lowercase.

---

## How to deploy (or update)

### Using the GitHub web UI

1. Go to `nithinitzme/nithinitzme.github.io`.
2. **Upload** your files:

   * `assets/nithin.jpg` (your headshot)
   * `assets/Nithin_Raveendran_CV.pdf` (downloadable CV)
3. Open `index.html` → **Edit** → paste in your updated HTML (from this repo).
4. Commit to `main`.
5. Visit **[https://nithinitzme.github.io](https://nithinitzme.github.io)**. If it doesn’t update immediately, hard-refresh.

### Using git (local)

```bash
git clone https://github.com/nithinitzme/nithinitzme.github.io
cd nithinitzme.github.io
mkdir -p assets
cp ~/Pictures/nithin.jpg assets/nithin.jpg
cp ~/Docs/Nithin_Raveendran_CV.pdf assets/Nithin_Raveendran_CV.pdf
# Copy or edit index.html as needed

git add index.html assets/*
git commit -m "Update site: publications + CV + headshot"
git push origin main
```

---

## Editing content

Open `index.html` and search for these section IDs:

### 1) About

* Section: `<section id="about">` → replace the paragraph with your latest bio.

### 2) Research / News

* Section: `<section id="research">` → edit bullet points under **Recent News**.

### 3) Publications

* Section: `<section id="publications">`.
* **Add a new paper** by adding a new `<li>` under the correct list (**Journals**, **Conferences**, or **Preprints & In‑press**).
* Use the format:

```html
<li><strong>Paper title</strong> — <em>Venue</em>, Year. (Authors, with <u>N. Raveendran</u> underlined.) [<a href="DOI-or-arXiv-link" target="_blank">link</a>]</li>
```

* Keep 5–10 of the most relevant items; link the full list to Google Scholar.

### 4) Talks

* Section: `<section id="talks">`.
* Add an item like:

```html
<div><strong>Talk title</strong> — Venue, City, Year. [<a href="slides.pdf">slides</a>]</div>
```

### 5) Teaching

* Section: `<section id="teaching">` → add courses/terms.

### 6) Contact

* Update the email in the small JS block near the bottom:

```js
const EMAIL = 'nithin@arizona.edu';
```

* Replace the placeholder form with Formspree (or similar) if you want submissions.

---

## Adding a new publication (step‑by‑step)

1. Decide the **bucket** (Journal / Conference / Preprint).
2. Copy one existing `<li>` and paste a new one in the right list.
3. Edit **title**, **venue**, **year**, and **authors** (underline your name with `<u>...</u>`).
4. If you have a **DOI or arXiv**, add a `[link]` at the end:

   ```html
   <a href="https://arxiv.org/abs/XXXX.XXXXX" target="_blank">arXiv</a>
   ```
5. Keep the list tidy. Old items can move to **Preprints** or be dropped; your Scholar link remains the full source of truth.

---

## Changing the colors or icon

* The color variables live at the top of `index.html` (`:root{ --accent1, --accent2, ... }`).
* The **QLDPC‑inspired icon** in the header is a small inline SVG. You can swap its paths or colors easily.

---

## Custom domain (optional)

If you own a domain (via Hostinger or elsewhere):

1. In repo **Settings → Pages**, set your custom domain and enable **Enforce HTTPS**.
2. Add a `CNAME` file at the repo root containing just your domain.
3. Point DNS to GitHub Pages (either A records `185.199.108.153/109/110/111` for `@`, and a CNAME for `www` → `nithinitzme.github.io`).

---

## License

Content © Nithin Raveendran. Site template is MIT‑style — feel free to adapt.
