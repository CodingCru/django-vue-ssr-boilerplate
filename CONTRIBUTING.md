# Contributing

> This file covers contributing to the boilerplate itself. If you've used this as a template for your own project, feel free to replace it with your own contributing guidelines.

Thanks for your interest in contributing! Here's how to get involved.

## Before You Start

1. Browse the [open issues](https://github.com/CodingCru/django-nuxt-ssr-boilerplate/issues) and find one tagged `good first issue`
2. Comment on the issue: "I'd like to work on this" — wait to be assigned before starting
3. Don't open a PR without a linked issue

## Local Setup

See [README.md](README.md) for full setup instructions. Quick version:

```bash
direnv allow
scripts/bootstrap_local.sh
```

Then run backend and frontend in separate terminals:

```bash
# Backend
cd backend && python manage.py runserver

# Frontend
cd frontend && pnpm install && pnpm dev
```

## Commit Messages

We follow [Conventional Commits](https://www.conventionalcommits.org):

```
<type>: <short description>
```

Common types: `feat`, `fix`, `docs`, `ci`, `chore`, `refactor`, `test`

Examples:
```
feat(#12): add user profile page
fix(#8): handle empty response from auth endpoint
docs(#6): update setup instructions
ci(#3): add migration check to workflow
```

## Submitting a PR

1. Fork the repo and create a branch from `main`
2. Make your changes
3. Make sure pre-commit hooks pass: `pre-commit run --all-files`
4. Open a PR back to `main` with `Closes #<issue-number>` in the description
5. Wait for a review — PRs require 1 approval before merging

## CI & Code Quality

GitHub Actions workflows run checks on every PR. We'll be expanding coverage over time.

Optionally, run checks locally before pushing with [pre-commit](https://pre-commit.com):

```bash
pre-commit install       # run automatically on git commit
pre-commit run --all-files  # run manually
```
