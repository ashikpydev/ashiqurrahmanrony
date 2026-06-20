# Ashiqur Rahman Rony

Personal academic website of **Ashiqur Rahman Rony**, statistician and research data analyst (Dhaka, Bangladesh).

Live: https://ashikpydev.github.io/ashiqurrahmanrony/

## About the site
A single page site built with plain HTML, CSS, and a small amount of vanilla JavaScript. No framework and no build step. It has a warm light and dark theme, a sticky navigation bar with scroll highlighting, and publication entries whose abstracts expand on click.

Sections: About, News, Research, Publications, Software, Experience, Teaching, Skills, Education, Extracurricular, and Contact.

## Structure
```
index.html              the whole site
assets/
  css/style.css         design system, theme, and components
  js/main.js            theme toggle, navigation, scroll highlighting, abstract toggles
  img/                  photo and favicon
  docs/                 CV (PDF)
.nojekyll               serve files as is on GitHub Pages
```

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
