import type { Metadata } from 'next';
import './globals.css';
import './index.css';

export const metadata: Metadata = {
  title: 'Portfolio - Micro-Frontend Demo',
  description: 'React micro-frontend architecture showcase',
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
