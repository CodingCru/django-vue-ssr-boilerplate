# Django + Nuxt SSR Boilerplate

A minimal full-stack boilerplate with Django REST API backend and Nuxt 3 frontend. Includes authentication flow and API integration.

## What's Included

- Django REST API backend
- Nuxt 3 SSR frontend with TypeScript
- Mock authentication system
- API health check
- Clean responsive styling

## Quick Start

```bash
direnv allow  # auto-activates the venv when you cd into the project
scripts/bootstrap_local.sh
```

**Backend:**

```bash
cd backend
python manage.py runserver
```

**Frontend:**

```bash
cd frontend
pnpm install
pnpm dev
```

Visit `http://localhost:3000` - login with any credentials to test the flow.

## Structure

- `backend/` - Django API
- `frontend/` - Nuxt 3 app with pages, components, and composables

## Future Plans

This boilerplate may expand to include:

- Docker support
- Real authentication
- Database integration
- Deployment configurations
- Additional components and patterns

## Development Setup

Based on experience — follow these steps to avoid losing hours on tooling.

### VS Code

1. Install extension **[Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python)**
2. Install extension **[Pylance](https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance)**
3. Create `.vscode/settings.json` in the root — it's already included in this repo. If the interpreter path doesn't resolve, update it manually to your local `.venv` path.
