# Writing and maintaining the site

The site builds with GitHub Pages-compatible Jekyll. Run `npm run serve` for a local preview or `npm run build` to produce `_site/`.

## Publish an article

Copy `_drafts/article-template.md` to `_posts/YYYY-MM-DD-your-title.md`. Set the title, description, category (`technical`, `career`, or `personal`), tags, and an explicit `permalink: /writing/your-title/`. Add a date with a timezone if the publication time matters.

Use Markdown headings, fenced code blocks, footnotes, and tables. The article layout supplies reading time, the original publication date, topics, and older/newer links. The home page, Writing index, and RSS feed update automatically.

For a table of contents that works without JavaScript, list heading IDs in the `contents` front matter as shown in the template. Without that list, the page builds a TOC from headings in the browser. Use the `figure.html` include for captioned images and `sidenote.html` for numbered margin notes. Sidenotes appear inline on smaller screens. Keep note IDs unique within each article.

The template is a draft and is not included in the public build. Preview drafts with `bundle exec jekyll serve --drafts --config _config.yml,_config.dev.yml`.

## Imported writing

Ten articles were imported from Prateek's public Medium RSS feed on September 25, 2026. The original prose, dates, links, and captions are retained. HTML is stored inside Markdown files to preserve the source formatting. Headings were normalized and assigned IDs; code was highlighted; feed tracking images and duplicate syndication footers were removed.

`original_url` displays the source credit. `canonical_url` points to the original Medium article to avoid presenting republished text as a separate original. The local feed and Writing index link to the local reading page. Article images are stored in `images/writing/` with explicit dimensions so they load locally and reserve their layout space.

For a new article first published here, omit both source fields.

## Site data and appearance

- Homepage selected research: `_data/selected_work.yml`.
- Project summaries and details: `_data/projects.yml`. Years reflect public GitHub repository creation dates, verified on September 25, 2026.
- Recommendations: `_data/recommendations.yml`.
- Primary and More navigation: `_data/navigation.yml`.
- Homepage introduction and metrics: `_pages/about.md`. Update citation and publication counts manually.
- Site colors, spacing, page styles, print styles, and breakpoints: `_sass/_site-enhancements.scss`.
- Theme preference, navigation, writing filters, and article TOC behavior: `assets/js/site.js`.

Light/dark mode follows the system preference until the reader selects a theme. The choice persists between pages. Core content, navigation, article TOCs, and links work without JavaScript.

The site's original AcademicPages / Minimal Mistakes attribution is retained here: [AcademicPages](https://github.com/academicpages/academicpages.github.io), based on [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes). The current page layouts and editorial theme are custom.
