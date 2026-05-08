'use client';

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  Chip,
} from '@OmarZambranoDev/portfolio-ui';
import { Music } from 'lucide-react';

export default function Home() {
  const projects = [
    {
      title: 'Music Player',
      description:
        'A Spotify-inspired music player with playlist management, mock audio playback, and persistent state. Features 200 tracks, mobile-responsive design, and full CI/CD pipeline.',
      tech: [
        'React',
        'TypeScript',
        'Vite',
        'Module Federation',
        'Tailwind CSS',
        'Zustand',
        'Playwright',
        'Vitest',
        'GitHub Actions',
      ],
      icon: Music,
      repoUrl: 'https://github.com/OmarZambranoDev/portfolio-music',
      demoUrl: 'https://portfolio-music-eta.vercel.app/',
    },
    // {
    //   title: 'Shop',
    //   description: 'E-commerce product grid with filtering, cart, and checkout flow.',
    //   tech: ['Next.js', 'Tailwind', 'Module Federation'],
    //   icon: ShoppingBag,
    //   repoUrl: 'https://github.com/your-username/shop',
    // },
    // {
    //   title: 'Trade',
    //   description: 'Real-time stock ticker with WebSocket simulation and interactive charts.',
    //   tech: ['React', 'Vite', 'WebSockets', 'Recharts'],
    //   icon: TrendingUp,
    //   repoUrl: 'https://github.com/your-username/trade',
    // },
    // {
    //   title: 'Social',
    //   description: 'Social media feed with infinite scroll, comments, and likes.',
    //   tech: ['React', 'Vite', 'Module Federation'],
    //   icon: Users,
    //   repoUrl: 'https://github.com/your-username/social',
    // },
    // {
    //   title: 'Travel',
    //   description: 'Booking flow with multi-step forms and date range picker.',
    //   tech: ['Next.js', 'React Hook Form', 'Module Federation'],
    //   icon: Plane,
    //   repoUrl: 'https://github.com/your-username/travel',
    // },
    // {
    //   title: 'News',
    //   description: 'Content-heavy blog layout with markdown rendering and RSS feed.',
    //   tech: ['Next.js', 'MDX', 'Module Federation'],
    //   icon: Newspaper,
    //   repoUrl: 'https://github.com/your-username/news',
    // },
  ];

  const skills = [
    // Core Frameworks & Libraries
    { name: 'React', variant: 'primary' as const },
    { name: 'TypeScript', variant: 'secondary' as const },
    { name: 'React Native', variant: 'primary' as const },
    { name: 'Next.js', variant: 'primary' as const },

    // State Management
    { name: 'Redux', variant: 'secondary' as const },
    { name: 'Context API', variant: 'secondary' as const },
    { name: 'Zustand', variant: 'accent' as const },

    // Architecture & Build
    { name: 'Micro-Frontends', variant: 'accent' as const },
    { name: 'Module Federation', variant: 'secondary' as const },
    { name: 'Webpack', variant: 'secondary' as const },
    { name: 'Vite', variant: 'secondary' as const },

    // Testing
    { name: 'Jest', variant: 'primary' as const },
    { name: 'Playwright', variant: 'accent' as const },
    { name: 'React Testing Library', variant: 'secondary' as const },

    // APIs & Backend Collaboration
    { name: 'GraphQL', variant: 'accent' as const },
    { name: 'REST APIs', variant: 'secondary' as const },
    { name: 'Swagger', variant: 'secondary' as const },
    { name: 'Postman', variant: 'secondary' as const },

    // Styling & Design
    { name: 'Tailwind CSS', variant: 'primary' as const },
    { name: 'Figma', variant: 'primary' as const },
    { name: 'Storybook', variant: 'accent' as const },

    // AI Tools
    { name: 'AI Development Agents', variant: 'accent' as const },
    { name: 'Multi-Agent Orchestration', variant: 'accent' as const },
    { name: 'DeepSeek', variant: 'secondary' as const },

    // DevOps & CI/CD
    { name: 'GitHub Actions', variant: 'secondary' as const },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-earth-stone/20 via-white to-earth-sand/20">
      {/* Hero Section */}
      <section className="border-b border-earth-stone/30">
        <div className="container mx-auto px-6 py-16 max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold text-earth-forest mb-4">Omar Zambrano</h1>
          <p className="text-xl text-earth-sage font-medium mb-4">Senior React Engineer</p>
          <p className="text-lg text-earth-moss">
            Frontend engineer with 7 years of experience building large scale applications. This
            portfolio demonstrates my work with micro frontend architecture using React, TypeScript,
            and Module Federation.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-6 py-6 max-w-7xl">
        <h2 className="text-2xl font-bold text-earth-forest mb-4">About Me</h2>
        <p className="text-earth-moss leading-relaxed">
          I&apos;m a frontend engineer with 7 years of experience at Walmart, where I built large
          scale web and mobile applications using React and TypeScript. I created this portfolio to
          explore micro frontend architecture and demonstrate how independent applications can work
          together seamlessly through Module Federation. Each project below is a standalone
          application that integrates with this host page, reflecting the modular thinking I apply
          to real engineering challenges.
        </p>
        <br />
        <p className="text-earth-moss leading-relaxed">
          I&apos;m also exploring multi-agent AI development workflows. Each project in this portfolio has its own AI agent, with a separate orchestrator agent coordinating across them. This approach lets me experiment with how AI can accelerate development while maintaining code quality.
        </p>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-6 py-6 max-w-7xl">
        <h2 className="text-2xl font-bold text-primary mb-6">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Core */}
          <div>
            <h3 className="text-sm font-semibold text-earth-sage uppercase tracking-wide mb-2">Core</h3>
            <div className="flex flex-wrap gap-2">
              <Chip variant="primary" size="md">React</Chip>
              <Chip variant="primary" size="md">TypeScript</Chip>
              <Chip variant="primary" size="md">React Native</Chip>
              <Chip variant="primary" size="md">Next.js</Chip>
            </div>
          </div>

          {/* Testing */}
          <div>
            <h3 className="text-sm font-semibold text-earth-sage uppercase tracking-wide mb-2">Testing</h3>
            <div className="flex flex-wrap gap-2">
              <Chip variant="primary" size="md">Jest</Chip>
              <Chip variant="primary" size="md">Playwright</Chip>
              <Chip variant="primary" size="md">React Testing Library</Chip>
            </div>
          </div>

          {/* Styling & Design */}
          <div>
            <h3 className="text-sm font-semibold text-earth-sage uppercase tracking-wide mb-2">Styling & Design</h3>
            <div className="flex flex-wrap gap-2">
              <Chip variant="primary" size="md">Tailwind CSS</Chip>
              <Chip variant="primary" size="md">Figma</Chip>
              <Chip variant="primary" size="md">Storybook</Chip>
            </div>
          </div>

          {/* State Management */}
          <div>
            <h3 className="text-sm font-semibold text-earth-sage uppercase tracking-wide mb-2">State Management</h3>
            <div className="flex flex-wrap gap-2">
              <Chip variant="secondary" size="md">Redux</Chip>
              <Chip variant="secondary" size="md">Context API</Chip>
              <Chip variant="secondary" size="md">Zustand</Chip>
            </div>
          </div>

          {/* APIs */}
          <div>
            <h3 className="text-sm font-semibold text-earth-sage uppercase tracking-wide mb-2">APIs & Integration</h3>
            <div className="flex flex-wrap gap-2">
              <Chip variant="secondary" size="md">GraphQL</Chip>
              <Chip variant="secondary" size="md">REST APIs</Chip>
              <Chip variant="secondary" size="md">Swagger</Chip>
              <Chip variant="secondary" size="md">Postman</Chip>
            </div>
          </div>

          {/* DevOps */}
          <div>
            <h3 className="text-sm font-semibold text-earth-sage uppercase tracking-wide mb-2">DevOps & CI/CD</h3>
            <div className="flex flex-wrap gap-2">
              <Chip variant="secondary" size="md">GitHub Actions</Chip>
            </div>
          </div>

          {/* Architecture & Build */}
          <div>
            <h3 className="text-sm font-semibold text-earth-sage uppercase tracking-wide mb-2">Architecture & Build</h3>
            <div className="flex flex-wrap gap-2">
              <Chip variant="accent" size="md">Micro-Frontends</Chip>
              <Chip variant="accent" size="md">Module Federation</Chip>
              <Chip variant="accent" size="md">Webpack</Chip>
              <Chip variant="accent" size="md">Vite</Chip>
            </div>
          </div>

          {/* AI & Automation */}
          <div>
            <h3 className="text-sm font-semibold text-earth-sage uppercase tracking-wide mb-2">AI & Automation</h3>
            <div className="flex flex-wrap gap-2">
              <Chip variant="accent" size="md">AI Development Agents</Chip>
              <Chip variant="accent" size="md">Multi-Agent Orchestration</Chip>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-6 py-6 max-w-7xl">
        <h2 className="text-2xl font-bold text-earth-forest mb-6">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.title}
              variant="elevated"
              className="bg-white border border-earth-stone/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:border-earth-sage/50"
            >
              <div className="h-40 bg-gradient-to-br from-earth-forest to-earth-sage flex items-center justify-center">
                <project.icon size={48} className="text-earth-stone" aria-hidden="true" />
              </div>
              <CardContent>
                <h3 className="text-xl font-bold text-earth-forest mb-1">{project.title}</h3>
                <CardDescription className="text-earth-moss">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-1 mt-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-0.5 bg-earth-stone/20 text-earth-forest rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex gap-2 w-full">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-earth-sage text-earth-forest hover:bg-earth-stone/20"
                    onClick={() => window.open(project.repoUrl, '_blank')}
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    GitHub
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    className="flex-1 bg-earth-forest hover:bg-earth-moss border-earth-forest text-white"
                    onClick={() => window.open(project.demoUrl, '_blank')}
                    aria-label={`Open ${project.title} demo`}
                  >
                    Open App
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-earth-stone/30 mt-12">
        <div className="container mx-auto px-6 py-8 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm">
            <p className="text-earth-sage">Built with Next.js, React, and Module Federation</p>
            <span className="hidden md:block text-earth-stone">•</span>
            <div className="flex gap-4">
              <a
                href="https://github.com/OmarZambranoDev/portfolio-ui"
                target="_blank"
                rel="noopener noreferrer"
                className="text-earth-forest hover:text-earth-sage transition-colors underline underline-offset-4"
                aria-label="UI Library source code on GitHub"
              >
                UI Library
              </a>
              <a
                href="https://github.com/OmarZambranoDev/portfolio-landing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-earth-forest hover:text-earth-sage transition-colors underline underline-offset-4"
                aria-label="Landing page source code on GitHub"
              >
                Landing Source
              </a>
            </div>
          </div>
          <p className="text-earth-sage/60 text-xs text-center mt-4">
            All components are custom-built using TypeScript, Tailwind, and
            class-variance-authority.
          </p>
        </div>
      </footer>
    </main>
  );
}
