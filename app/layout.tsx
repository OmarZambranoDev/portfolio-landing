import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Portfolio - Micro-Frontend Demo',
  description: 'React micro-frontend architecture showcase',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/index.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
