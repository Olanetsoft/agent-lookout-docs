# Documentation project instructions

## Repository role

This repository holds the documentation for Agent Lookout, published with
Thally at https://agent-lookout.thally.app. The product's code is in
[Olanetsoft/agent-lookout](https://github.com/Olanetsoft/agent-lookout). Its
README, `docs/GUIDE.md` and its code are the source for every fact on these
pages: check a claim there before you write it.

The Thally framework files listed in `starter-release.json` are managed by
Thally. Do not hand-edit them. Update them with the **Update Thally framework**
workflow, which opens a pull request to review, or locally with
`npm run starter:update`, which shows its plan before it changes anything.

## Project boundaries

- Pages are MDX files in `src/content/`.
- Navigation and portable product features are configured in `docs.json`.
- Site identity and versioned brand defaults live in `src/data/site.ts`.
- `starter-release.json` and runtime-owned paths listed in it are
  machine-managed; do not hand-edit them.
- Runtime changes belong in `thallylabs/thally` and arrive here only through
  the generated synchronization pull request.
- Starter-owned seed content and portable defaults are authored here. Paid
  service internals remain in `thallylabs/thally-cloud`.
- Never place credentials in source files. Use `.env.local` locally and secret
  storage in the deployment platform.

## Writing standards

- Address the reader as “you” and use active voice.
- Lead with the outcome, then state prerequisites and the shortest working path.
- Use sentence-case headings and concise paragraphs.
- Format commands, files, configuration keys, and code with backticks.
- Tell readers what success looks like and link the next useful task.
- Keep advanced or optional paths outside the primary workflow.

## Content model

- Every page needs `title` and `description` frontmatter.
- Keep page slugs stable once published.
- Add pages to `docs.json`; do not leave useful pages orphaned.
- Run `npm run check -- --ci`, or install the pinned CI tooling with
  `npm ci --ignore-scripts --prefix .github/thally-tooling` and run
  `.github/thally-tooling/node_modules/.bin/thally check --ci .`, `npm run typecheck`,
  and `npm run build` before publishing.

## Product context

Agent Lookout is a local dashboard that shows the coding agent sessions running on a computer, from Claude Code, Codex, Antigravity, Antigravity CLI, Mistral Vibe, Gemini CLI, OpenCode and Qwen Code, and which of them are waiting on you. It is for developers who run more than one coding agent at a time and lose track of which one needs them.
