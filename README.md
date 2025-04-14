# DevOps Learning Journey Timeline

A comprehensive interactive timeline for learning DevOps, designed to guide senior front-end developers transitioning into the DevOps ecosystem.

![DevOps Learning Journey](./screenshot.png)

## Features

- 📊 Interactive vertical timeline displaying 6 DevOps learning phases
- 📝 Detailed information and resources for each phase
- 🎥 Curated YouTube video tutorials for each learning topic
- 🌓 Dark theme with modern UI design
- 💾 PostgreSQL database integration for dynamic content
- ⚡ Responsive design that works on mobile, tablet, and desktop

## Tech Stack

- **Frontend**: React, TypeScript, TailwindCSS, Shadcn UI, Framer Motion
- **Backend**: Express.js, Node.js, REST API
- **Database**: PostgreSQL with Drizzle ORM
- **State Management**: TanStack React Query
- **Animations**: Framer Motion Spring Physics
- **Styling**: TailwindCSS with custom theme

## Getting Started

### Prerequisites

- Node.js (v18+)
- PostgreSQL database

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd devops-learning-timeline
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file with your PostgreSQL connection string:
   ```
   DATABASE_URL=postgres://username:password@host:port/database
   ```

4. Initialize the database:
   ```bash
   npm run db:push
   ```

5. Seed the database with initial data:
   ```bash
   npx tsx scripts/seed-database.ts
   ```

6. Start the application:
   ```bash
   npm run dev
   ```

7. The application will be available at: http://localhost:5000

## Project Structure

- `/client` - Frontend React application
  - `/src/components` - UI components
  - `/src/pages` - Page components
  - `/src/data` - Data and type definitions
  - `/src/lib` - Utility functions and API
- `/server` - Backend Express API
  - `/routes.ts` - API routes
  - `/db.ts` - Database configuration
  - `/storage.ts` - Data access layer
- `/shared` - Shared code between frontend and backend
  - `/schema.ts` - Database schema definitions
- `/scripts` - Utility scripts for database management

## Deployment

The application can be deployed to any hosting platform that supports Node.js applications, such as:

- Replit
- Vercel
- Netlify
- Heroku
- Railway

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.