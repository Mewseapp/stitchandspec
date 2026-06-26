# Repository Instructions

## Setup

Install dependencies with a repository-local npm cache:

```bash
npm ci --cache .npm-cache
```

Using `.npm-cache` keeps npm from writing cache and log files under the user profile, which avoids permission issues in Codex-managed workspaces.

## Verification

Run the production build before handing off design or code changes:

```bash
npm run build
```

For rendered design checks, install dependencies with the setup command above, start the Astro site as needed, and inspect the generated pages in a browser.

