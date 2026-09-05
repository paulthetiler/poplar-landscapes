# Poplar Landscapes concept

Standalone Next.js + React mock-up with a homepage, indicative landscaping estimator and minimal enquiry API.

## Run locally

```bash
cd prototypes/poplar-landscapes
npm install
npm run dev
```

Open http://localhost:3000

## Included

- Responsive homepage
- /estimate estimator
- Indicative price calculation
- /api/enquiries POST endpoint
- Mock persistence to /tmp/poplar-landscapes/enquiries.ndjson

## Backend note

The current persistence is deliberately temporary. It is enough to prove the full front-end → API flow locally, but Vercel filesystems are ephemeral. Before accepting real enquiries, replace the append-file block in app/api/enquiries/route.js with Supabase or another persistent datastore. The UI and API contract can stay the same.
