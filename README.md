# Dylan Lee portfolio

Engineering portfolio of Dylan Lee, Mechanical Engineering BS/MS at UC San Diego.

Live site: https://mildlyuseful.github.io/dylan-lee-portfolio/

Static site with no build step: plain HTML, one stylesheet, one small script.

- `index.html`: home page and project grid
- `projects/*.html`: one page per project
- `assets/img/`: images (WebP), plus local poster frames for the YouTube videos
- `assets/css/site.css`: all styling, including light and dark themes
- `assets/Dylan-Lee-Resume.pdf`: the resume linked from the header and footer
- `assets/docs/mccb-poster.pdf`: the MCCB capstone poster

## Preview locally

```bash
python -m http.server 8080
```

Then open http://localhost:8080.

## Updating

GitHub Pages serves the `main` branch root, so any push to `main` republishes the site within a minute or two.

To swap the resume, replace `assets/Dylan-Lee-Resume.pdf` and keep the file name.
