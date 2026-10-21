# Expenso

Expenso is a business-management application for tracking customers, suppliers, products, reports, and account settings.

## Project layout

- `frontend/` — React + Vite application
- `backend/` — Node.js/Express API
- `login.html`, `dashboard.html`, and `demo-login-bypass.js` — separate static login-flow demo

## Run locally

### Backend
1. Open a terminal in `backend/`.
2. Run `npm install`.
3. Configure the required environment variables in a local `.env` file based on the backend configuration.
4. Run the start script shown in `backend/package.json`.

### Frontend
1. Open a second terminal in `frontend/`.
2. Run `npm install`.
3. Configure your local frontend environment variables.
4. Run `npm run dev`.

## Important notes

- Environment files containing secrets and uploaded profile pictures are intentionally not included in this public copy. Never commit passwords, database credentials, API keys, or private tokens.
- The static `login.html` demo accepts any non-empty email and password and is **not authentication**. It must not be used to protect real customer or financial data.
- The React app's login flow remains in `frontend/src/Login.jsx`; the static demo bypass is a separate page and is not automatically wired into the React login flow.
