# Portfolio Landing Page
Next.js host application for my micro-frontend portfolio. This app serves as the container that will eventually integrate multiple remote micro-frontends via Module Federation.

#Tech Stack
- Next.js 14.2.0 (App Router)
- React 18.2.0
- TypeScript 5.2.2
- Tailwind CSS 3.4.17
- @portfolio/ui (shared component library)

# Getting Started

# Prerequisites
- Node.js 20.19.5
- npm 10.8.2
- Verdaccio running locally (for @portfolio/ui)
- @portfolio/ui published to Verdaccio

# Installation
npm install  
npm run copy:ui  
npm run dev  

Open http://localhost:3000

# Scripts
npm run dev - Start development server  
npm run build - Build for production  
npm run start - Start production server  
npm run lint - Run ESLint  
npm run lint:fix - Fix linting issues  
npm run format - Format code with Prettier  
npm run copy:ui - Copy CSS from @portfolio/ui to public/  

# Project Structure
portfolio-landing/  
app/  
globals.css  
layout.tsx  
page.tsx  
components/  
public/  
index.css (copied from @portfolio/ui)  
package.json  
tailwind.config.js  
postcss.config.js  
tsconfig.json  

# Future Integration
This host app will use @module-federation/nextjs-mf to load remote components:

- Music Player (Vite)
- Shop (Next.js)
- Trade (Vite)
- Social (Vite)
- Travel (Next.js)
- News (Next.js)

# License
MIT
