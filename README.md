# Ashiqur Rahman Rony

Personal academic website of **Ashiqur Rahman Rony**, statistician and research data analyst (Dhaka, Bangladesh).

Live: https://ashikpydev.github.io/ashiqurrahmanrony/

## About the site
A single page site built with plain HTML, CSS, and a small amount of vanilla JavaScript. No framework and no build step. It has a warm light and dark theme (system preference on first load, then a manual toggle saved in localStorage), a sticky navigation bar with scroll highlighting and an accessible mobile menu, publication entries whose abstracts expand on click, a skip link, a back to top button, and gentle reveal on scroll that is disabled for reduced motion.

Sections: About (with a skills strip), Education, News, Research interest, Publications, Software, Experience, Teaching, Extracurricular, and Contact.

## Structure
```
index.html              the whole site
assets/
  css/style.css         design tokens, theme, and components
  js/main.js            theme, nav, scroll spy, abstracts, back to top, reveal
  img/                  photos (jpg + webp), favicons, icons
  docs/                 CV (PDF)
site.webmanifest        web app manifest (installable icons)
robots.txt              crawler rules
sitemap.xml             single page sitemap
.nojekyll               serve files as is on GitHub Pages
```

Images ship as optimized JPEG with a WebP source via `<picture>`, and carry width and height plus lazy loading below the fold. Structured data includes a `Person` and four `ScholarlyArticle` entries for the publications.

## Local preview
Any static server works, for example:
```
python -m http.server 5500
```
then open http://localhost:5500

## Deploy
The site is served by GitHub Pages from the `main` branch (root folder). Pushing to `main` updates the live site within a minute.

## CV
The CV is the PDF at `assets/docs/Ashiqur_Rahman_Rony_CV.pdf`. The "Curriculum Vitae" link in the header opens it in a new tab. To update it, replace that PDF file.

---
© Ashiqur Rahman Rony
