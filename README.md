# Prateek Chhikara

Source for [prateekchhikara.com](https://www.prateekchhikara.com), built with Jekyll and GitHub Pages.

## Local Development

Use Ruby 3.x with the Bundler version from `Gemfile.lock`.

```bash
bundle install
bundle exec jekyll serve --config _config.yml,_config.dev.yml
```

The local site runs at `http://localhost:4000`.

## Notes

- Main pages live in `_pages/`.
- Site-wide metadata lives in `_config.yml`.
- Navigation lives in `_data/navigation.yml`.
- Generated files in `_site/` should not be edited by hand.
