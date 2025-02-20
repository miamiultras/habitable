# Habitable

A browser-based space colonization game built with the [T3 Stack](https://create.t3.gg/).

## About

Habitable is an async space strategy game where players develop and manage their planetary colonies. Drawing inspiration from classic games like OGame, it features:

- Colony management and resource production
- Planet terraforming and development
- Research and technology advancement
- Colony rankings and progression system
- Mobile-first, responsive design

## Tech Stack

- [Next.js](https://nextjs.org) - React framework
- [Supabase](https://supabase.com) - Backend & Authentication
- [Drizzle ORM](https://orm.drizzle.team) - Database ORM
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## Development

```bash
# Install dependencies
pnpm install

# Start the database
./start-database.sh

# Run database migrations
pnpm db:push

# Start development server
pnpm dev