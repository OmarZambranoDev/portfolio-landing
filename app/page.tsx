'use client';

import { Button, Card, CardContent, CardDescription, CardFooter, Chip } from '@portfolio/ui';

export default function Home() {
  const projects = [
    {
      title: 'Music Player',
      description: 'Spotify-inspired audio streaming demo with playlists and media controls.',
      tech: ['React', 'Vite', 'Module Federation'],
      icon: '🎵',
    },
    {
      title: 'Shop',
      description: 'E-commerce product grid with filtering, cart, and checkout flow.',
      tech: ['Next.js', 'Tailwind', 'Module Federation'],
      icon: '🛍️',
    },
    {
      title: 'Trade',
      description: 'Real-time stock ticker with WebSocket simulation and interactive charts.',
      tech: ['React', 'Vite', 'WebSockets', 'Recharts'],
      icon: '📈',
    },
    {
      title: 'Social',
      description: 'Social media feed with infinite scroll, comments, and likes.',
      tech: ['React', 'Vite', 'Module Federation'],
      icon: '💬',
    },
    {
      title: 'Travel',
      description: 'Booking flow with multi-step forms and date range picker.',
      tech: ['Next.js', 'React Hook Form', 'Module Federation'],
      icon: '✈️',
    },
    {
      title: 'News',
      description: 'Content-heavy blog layout with markdown rendering and RSS feed.',
      tech: ['Next.js', 'MDX', 'Module Federation'],
      icon: '📰',
    },
  ];

  const skills = [
    { name: 'React', variant: 'primary' as const },
    { name: 'TypeScript', variant: 'secondary' as const },
    { name: 'Next.js', variant: 'primary' as const },
    { name: 'Micro-Frontends', variant: 'accent' as const },
    { name: 'Module Federation', variant: 'secondary' as const },
    { name: 'Tailwind CSS', variant: 'primary' as const },
    { name: 'Storybook', variant: 'accent' as const },
    { name: 'Vite', variant: 'secondary' as const },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-earth-stone/20 via-white to-earth-sand/20">
      {/* Hero Section */}
      <section className="border-b border-earth-stone/30">
        <div className="container mx-auto px-6 py-16 max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold text-earth-forest mb-4">Omar Zambrano</h1>
          <p className="text-xl text-earth-sage font-medium mb-4">Senior React Engineer</p>
          <p className="text-lg text-earth-moss">
            Building scalable micro-frontend architectures with React, TypeScript, and Module
            Federation.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-6 py-12 max-w-7xl">
        <h2 className="text-2xl font-bold text-earth-forest mb-4">About Me</h2>
        <p className="text-earth-moss leading-relaxed">
          I&apos;m a frontend engineer specializing in React and micro-frontend architecture. This
          portfolio demonstrates my ability to build independent applications that work together
          seamlessly through Module Federation. Each project below is a standalone application that
          integrates with this host page.
        </p>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-6 py-12 max-w-7xl">
        <h2 className="text-2xl font-bold text-primary mb-6">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Chip key={skill.name} variant={skill.variant} size="md">
              {skill.name}
            </Chip>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-6 py-12 max-w-7xl">
        <h2 className="text-2xl font-bold text-earth-forest mb-6">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.title}
              variant="elevated"
              className="bg-white border border-earth-stone/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:border-earth-sage/50"
            >
              <div className="h-40 bg-gradient-to-br from-earth-forest to-earth-sage flex items-center justify-center">
                <span className="text-5xl">{project.icon}</span>
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
                    onClick={() => window.open('https://github.com/your-username/music-player', '_blank')}
                  >
                    GitHub
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    className="flex-1 bg-earth-forest hover:bg-earth-moss border-earth-forest text-white"
                    onClick={() => alert('Demo coming soon')}
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
            <p className="text-earth-sage">
              Built with Next.js, React, and Module Federation
            </p>
            <span className="hidden md:block text-earth-stone">•</span>
            <div className="flex gap-4">
              <a
                href="https://github.com/your-username/portfolio-ui"
                target="_blank"
                rel="noopener noreferrer"
                className="text-earth-forest hover:text-earth-sage transition-colors underline underline-offset-4"
              >
                UI Library
              </a>
              <a
                href="https://github.com/your-username/portfolio-landing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-earth-forest hover:text-earth-sage transition-colors underline underline-offset-4"
              >
                Landing Source
              </a>
            </div>
          </div>
          <p className="text-earth-sage/60 text-xs text-center mt-4">
            All components are custom-built using TypeScript, Tailwind, and class-variance-authority.
            Designed and developed in collaboration with DeepSeek AI.
          </p>
        </div>
      </footer>
    </main>
  );
}
