# Django + Nuxt SSR Boilerplate

A minimal full-stack boilerplate with Django REST API backend and Nuxt 3 frontend. Includes authentication flow and API integration.

## What's Included

- Django REST API backend
- Nuxt 3 SSR frontend with TypeScript
- Mock authentication system
- API health check
- Clean responsive styling

## Quick Start

**Backend:**
```bash
cd backend
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt -r requirements-dev.txt
python manage.py runserver
```

**Frontend:**
```bash
cd frontend
pnpm install
pnpm dev
```

Visit `http://localhost:3000` - login with any credentials to test the flow.

## Future Plans

This boilerplate may expand to include:
- Docker support
- Real authentication
- Database integration
- Deployment configurations
- Additional components and patterns

## Structure

- `backend/` - Django API
- `frontend/` - Nuxt 3 app with pages, components, and composables
