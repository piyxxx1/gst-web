# AashuSense Legal - Professional Legal Services Website

A modern, responsive website for AashuSense Legal Services built with React, TypeScript, and Vite.

## Features

- 🚀 Modern React with TypeScript
- 📱 Fully responsive design
- ⚡ Fast loading with code splitting
- 🎨 Beautiful UI with Tailwind CSS
- 📝 Contact and consultation forms
- 🔍 SEO optimized
- 🌐 Multiple service pages

## Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:8080`

### Building for Production

```bash
npm run build
```

## Deployment

### Vercel Deployment

This project is configured for easy deployment on Vercel:

1. **Connect your repository** to Vercel
2. **Build Command**: `npm run build`
3. **Output Directory**: `dist/public`
4. **Framework Preset**: Vite

The project includes:
- `vercel.json` - Vercel configuration
- `api/` directory - Serverless API routes
- `.vercelignore` - Excludes server files

### API Routes

The following API endpoints are available:

- `POST /api/contact` - Contact form submissions
- `POST /api/consultation` - Consultation form submissions

### Environment Variables

No environment variables are required for basic functionality. The API routes use in-memory storage for demo purposes.

## Project Structure

```
├── client/                 # React application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/         # Page components
│   │   └── ...
│   └── index.html
├── api/                   # Vercel serverless functions
├── shared/               # Shared schemas and types
├── vercel.json          # Vercel configuration
└── vite.config.ts       # Vite configuration
```

## Technologies Used

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Radix UI
- **Routing**: Wouter
- **Forms**: React Hook Form, Zod validation
- **Icons**: Lucide React
- **Deployment**: Vercel

## License

MIT
