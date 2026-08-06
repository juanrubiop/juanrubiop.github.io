# Working conventions

- Keep function parameters on one line.
- Prefer legible, direct code over generalized abstractions.
- This site has one maintainer; do not add edge-case handling unless requested.
- Do not create new repository files without explicit permission.
- Use the local virtual environment when one exists.

# Site structure

- This is a static GitHub Pages site. Do not add a framework or build tool unless requested.
- Use `<route>/index.html` for clean URLs. For example, `/about/` maps to `about/index.html`.
- Use lowercase names for new routes. Keep `/SEM/` uppercase because it is an established route.
- Put shared styles, scripts, and images under `assets/css/`, `assets/js/`, and `assets/images/`.
- Keep files used by only one route beside that route's `index.html`.
- Use root-relative internal links with trailing slashes, such as `/projects/`.
- Keep `404.html` at the repository root.

# Redirects

- GitHub Pages does not provide repository-level server redirect rules.
- For a moved page, create `<old-route>/index.html` with a canonical link, an HTML refresh, a `location.replace()` fallback, and a visible link to the destination.
- Treat static redirect pages as browser redirects, not HTTP 301 responses.

# Responses

- Use Markdown headings and lists for plans and explanations.
- Do not wrap plans or explanations in XML-style tags.
