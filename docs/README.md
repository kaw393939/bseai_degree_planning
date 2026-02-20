# Docs site (GitHub Pages)

This folder is a GitHub Pages site powered by Jekyll and the Just-the-Docs theme.

## Enable GitHub Pages

In your GitHub repo settings:

1. Settings → Pages
2. Build and deployment → **Source**: "Deploy from a branch"
3. Branch: `main` (or `master`) and folder: `/docs`

GitHub will build the Jekyll site automatically.

## Local preview (optional)

If you want to preview locally with Ruby/Jekyll:

- Install Ruby (macOS: `brew install ruby` or use a Ruby version manager)
- From repo root:
  - `cd docs`
  - `bundle init`
  - Add `gem "github-pages"` to the Gemfile
  - `bundle install`
  - `bundle exec jekyll serve --livereload`

If you’d rather not use Ruby locally, you can rely on GitHub’s build on push.
