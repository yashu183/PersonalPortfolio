# Personal Portfolio Website

## Overview

This is a full-stack personal portfolio website for John Smith, a software engineer. The application is built with a modern tech stack featuring a React frontend with TypeScript, Express backend, and PostgreSQL database. It serves as a professional showcase including sections for about, skills, projects, and contact information.

## System Architecture

The application follows a monorepo structure with clear separation between client, server, and shared code:

- **Frontend**: React 18 with TypeScript, Vite for build tooling
- **Backend**: Express.js with TypeScript, RESTful API design
- **Database**: PostgreSQL with Drizzle ORM for database operations
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Deployment**: Node.js runtime with static file serving

### Directory Structure
```
├── client/          # React frontend application
├── server/          # Express backend API
├── shared/          # Shared TypeScript types and schemas
├── migrations/      # Database migration files
└── dist/           # Production build output
```

## Key Components

### Frontend Architecture
- **Component System**: shadcn/ui components for consistent UI/UX
- **State Management**: React Query for server state and caching
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation
- **Styling**: Tailwind CSS with CSS variables for theming

### Backend Architecture
- **API Layer**: Express.js with TypeScript for type safety
- **Database Layer**: Drizzle ORM with PostgreSQL dialect
- **Validation**: Zod schemas for request/response validation
- **Storage**: Abstracted storage interface with in-memory implementation
- **Development**: Vite middleware integration for hot reloading

### Database Schema
- **Users Table**: Basic user authentication structure
- **Contact Messages Table**: Stores form submissions with timestamps
- **Schema Validation**: Drizzle-Zod integration for type-safe database operations

## Data Flow

1. **Contact Form Submission**: Frontend form → Zod validation → API endpoint → Database storage
2. **Static Content**: Portfolio sections rendered from component data
3. **Asset Serving**: Vite handles static assets in development, Express serves in production
4. **Error Handling**: Centralized error handling with user-friendly messages

## External Dependencies

### Core Technologies
- **@neondatabase/serverless**: PostgreSQL serverless driver
- **@tanstack/react-query**: Server state management and caching
- **drizzle-orm**: Type-safe database ORM
- **@radix-ui/***: Accessible component primitives
- **tailwindcss**: Utility-first CSS framework

### Development Tools
- **Vite**: Fast build tool with HMR support
- **TypeScript**: Static type checking
- **ESBuild**: Fast JavaScript bundler for production

### UI/UX Libraries
- **lucide-react**: Icon library
- **class-variance-authority**: Component variant handling
- **date-fns**: Date manipulation utilities

## Deployment Strategy

### Development Mode
- Vite dev server with HMR for frontend
- Express server with TypeScript execution via tsx
- Hot reloading enabled for rapid development

### Production Build
- Frontend: Vite builds optimized static assets
- Backend: ESBuild bundles server code into single file
- Static serving: Express serves built frontend from `/dist/public`

### Database Management
- Drizzle Kit for schema migrations
- Environment-based configuration via `DATABASE_URL`
- PostgreSQL dialect with connection pooling support

### Build Scripts
- `dev`: Development server with hot reloading
- `build`: Production build process
- `start`: Production server startup
- `db:push`: Database schema synchronization

## Changelog
- June 28, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.