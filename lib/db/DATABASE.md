# Database Setup
## Connection Strings
- `DATABASE_URL`: Transaction Pooler (port 6543) - used by the app
- `DATABASE_URL_POOLER`: Session Pooler (port 5432) - used by drizzle-kit
## Why Two Connections?
drizzle-kit has a bug parsing Supabase's schema when using Transaction Pooler.
Session Pooler avoids this issue.
## Commands
- `npm run db:generate` - Generate migrations (uses Session Pooler)
- `npm run db:push` - Push schema directly (uses Session Pooler)
- App runtime uses Transaction Pooler automatically