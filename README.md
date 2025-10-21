# Yarn Workspaces: Two Manifests Using the Same Package & Version

This demo has two workspaces (**app-a** and **app-b**), both depending on **dayjs@1.11.10**.
When you run `yarn install`, Yarn will **dedupe** and keep a single copy (node_modules linker) and link it to both workspaces.

## Structure
```
yarn-workspaces-same-version-demo/
  package.json
  .yarnrc.yml
  packages/
    app-a/
      package.json
      index.js
    app-b/
      package.json
      index.js
```

## Quick start
```bash
corepack enable   # optional if you have modern Yarn
yarn install      # from repo root
yarn start:a
yarn start:b
```

## What to check
- `yarn why dayjs` — shows a single version (`1.11.10`) used by both `app-a` and `app-b`.
- `yarn workspaces list` — lists both workspaces.

## Notes
- `.yarnrc.yml` sets `nodeLinker: node-modules` for simplicity.
- You can change `dayjs` to any other package and keep the same version range in both manifests to see the same behavior.
