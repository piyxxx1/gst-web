# ASHUSENSE LEGAL - Professional Legal Services Platform

## Overview

ASHUSENSE LEGAL is a professional, modern, and responsive web application for a legal services company specializing in business registration, compliance, and legal consultation. The platform is designed to streamline legal processes for entrepreneurs and businesses, offering services like company registration, GST registration, trademark registration, and various other legal and compliance services.

The application follows a client-server architecture with a React frontend and Node.js/Express backend, featuring a clean design inspired by modern legal service platforms with comprehensive form handling, consultation booking, and contact management.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Shadcn/ui components built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **State Management**: TanStack React Query for server state management and API data fetching
- **Forms**: React Hook Form with Zod validation for type-safe form handling

### Backend Architecture
- **Runtime**: Node.js with TypeScript using ESM modules
- **Framework**: Express.js for RESTful API endpoints
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Schema Validation**: Zod for runtime type checking and API request validation
- **Session Storage**: In-memory storage with PostgreSQL session store support
- **Development**: Hot module replacement and development middleware integration

### Component Structure
- **Layout Components**: Navigation with dropdown menus, footer with comprehensive links
- **Page Components**: Home, About, Contact, and service-specific pages
- **Feature Components**: Hero section, services showcase, process steps, testimonials, contact forms
- **Interactive Elements**: Chatbot widget, consultation booking forms, contact submission forms
- **UI Components**: Complete Shadcn/ui component library for consistent design

### Data Storage Architecture
- **Database**: PostgreSQL with Neon serverless database provider
- **Schema Design**: Structured tables for users, contact submissions, and consultation requests
- **Migrations**: Drizzle Kit for database schema migrations
- **Type Safety**: Fully typed database schema with TypeScript integration

### API Design
- **REST Endpoints**: 
  - POST /api/contact - Contact form submissions
  - POST /api/consultation - Consultation request submissions
  - GET /api/admin/contacts - Admin access to contact submissions
  - GET /api/admin/consultations - Admin access to consultation requests
- **Error Handling**: Centralized error handling with proper HTTP status codes
- **Validation**: Request validation using Zod schemas
- **Response Format**: Consistent JSON response structure

### Development Workflow
- **Type Safety**: Full TypeScript integration across frontend, backend, and shared schemas
- **Code Quality**: ESLint and TypeScript compiler checks
- **Build Process**: Separate client and server builds with esbuild for production
- **Development Server**: Vite dev server with Express API integration
- **Asset Management**: Vite asset handling with path resolution aliases

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL database hosting
- **Drizzle ORM**: Type-safe database operations and migrations
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### UI and Styling
- **Radix UI**: Accessible component primitives for complex UI elements
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Lucide React**: Modern icon library with React components
- **Google Fonts**: Inter font family for consistent typography

### Development Tools
- **Vite**: Fast build tool with hot module replacement
- **TypeScript**: Static type checking and enhanced developer experience
- **TanStack React Query**: Server state management and caching
- **React Hook Form**: Performance-focused form library
- **Wouter**: Lightweight routing library for React

### Validation and Forms
- **Zod**: TypeScript-first schema validation
- **@hookform/resolvers**: Integration between React Hook Form and Zod
- **drizzle-zod**: Generate Zod schemas from Drizzle database schema

### Additional Libraries
- **date-fns**: Date manipulation and formatting
- **clsx & tailwind-merge**: Conditional className utilities
- **class-variance-authority**: Component variant management
- **embla-carousel-react**: Touch-friendly carousel component