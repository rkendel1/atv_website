# Agent Trust Vault Website

Public marketing and product foundation for **Agent Trust Vault** (`agenttrustvault.com`) built with Next.js + Tailwind.

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Auth.js runtime

The portal uses Auth.js (`next-auth`) with runtime provider configuration:

- GitHub (`AUTH_GITHUB_ID`, `AUTH_GITHUB_SECRET`)
- Google (`AUTH_GOOGLE_ID`, `AUTH_GOOGLE_SECRET`)
- Microsoft Entra ID (`AUTH_MICROSOFT_ENTRA_ID`, `AUTH_MICROSOFT_ENTRA_SECRET`, `AUTH_MICROSOFT_ENTRA_TENANT_ID`)
- Development credentials (`DEV_AUTH_EMAIL`, `DEV_AUTH_PASSWORD`)

Set `NEXTAUTH_URL` and `NEXTAUTH_SECRET` for all environments.

## Stripe runtime

Portal billing actions call Stripe APIs directly:

- `POST /api/stripe/checkout` creates subscription checkout sessions
- `POST /api/stripe/portal` opens Stripe billing portal sessions

Required environment variables:

- `STRIPE_SECRET_KEY`
- `STRIPE_PRICE_STARTER`
- `STRIPE_PRICE_PROFESSIONAL`
- `STRIPE_PRICE_BUSINESS`

## Build and lint

```bash
npm run lint
npm run build
```
