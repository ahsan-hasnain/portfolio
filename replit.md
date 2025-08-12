# Overview

This is a modern full-stack web application built with React, TypeScript, and Node.js. The project is structured as a creative agency website called "CreativeFlow" that offers digital services including social media management, web development, infographics, and video editing. The application features a responsive design with multiple sections (hero, services, portfolio, about, contact) and includes contact forms and newsletter subscription functionality.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The frontend is built with React and TypeScript using Vite as the build tool. The architecture follows a component-based approach with:

- **UI Framework**: Radix UI components with shadcn/ui styling system
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack React Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite with custom configuration for development and production

The application uses a monorepo structure with shared types and schemas between client and server. Components are organized into reusable UI components and feature-specific components (hero, services, portfolio, contact sections).

## Backend Architecture
The backend is an Express.js REST API with TypeScript:

- **Framework**: Express.js with middleware for JSON parsing and logging
- **API Structure**: RESTful endpoints for contact submissions and newsletter subscriptions
- **Validation**: Zod schemas for request validation
- **Storage**: Abstracted storage layer with in-memory implementation (MemStorage)
- **Development**: Custom Vite integration for hot module replacement

The server implements a clean separation between routes, storage, and business logic. All API endpoints include proper error handling and validation.

## Data Storage Solutions
Currently uses an in-memory storage solution with plans for PostgreSQL integration:

- **Current**: MemStorage class implementing IStorage interface
- **Planned**: Drizzle ORM with PostgreSQL (configuration already present)
- **Schema**: Drizzle schema definitions for users, contacts, and newsletters
- **Migrations**: Drizzle Kit for database migrations

The storage layer is abstracted through interfaces, making it easy to swap implementations without changing business logic.

## Design System
The application uses a comprehensive design system built on:

- **Component Library**: Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with custom CSS variables
- **Theme**: Custom brand colors (gold, brown, gray, black) with light mode support
- **Typography**: Inter font family with custom font variables
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts

# External Dependencies

## Frontend Dependencies
- **UI Components**: Radix UI suite for accessible component primitives
- **Styling**: Tailwind CSS for utility-first CSS framework
- **State Management**: TanStack React Query for server state synchronization
- **Form Handling**: React Hook Form with Hookform Resolvers for form validation
- **Icons**: Lucide React for consistent iconography
- **Routing**: Wouter for lightweight client-side routing
- **Date Handling**: date-fns for date manipulation utilities

## Backend Dependencies
- **Web Framework**: Express.js for HTTP server and routing
- **Database**: Neon Database Serverless for PostgreSQL hosting
- **ORM**: Drizzle ORM for type-safe database operations
- **Validation**: Zod for runtime type validation
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Build Tools**: TSX for TypeScript execution, ESBuild for production bundling

## Development Tools
- **Build System**: Vite for fast development and optimized builds
- **Type Checking**: TypeScript with strict configuration
- **Database Management**: Drizzle Kit for schema management and migrations
- **Development Environment**: Replit-specific plugins for development experience

The application is designed to be easily deployable and scalable, with clear separation between development and production configurations.