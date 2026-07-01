import { Fraunces, Sora } from 'next/font/google';
import Header from '@/components/Header/Header';
import { createPageMetadata } from '@/lib/metadata';
import { getSiteUrl } from '@/lib/site-url';
import '@/styles/globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: 'variable',
  axes: ['opsz'],
  style: ['normal', 'italic'],
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-ui',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  metadataBase: new URL(getSiteUrl()),
  ...createPageMetadata({
    title: 'The Sugar Rush — Lilac-light desserts',
    description:
      'The Sugar Rush — Riverhead dessert atelier: morning bakes, crullers, and a counter that moves with the light. thesugarrushh.com',
    keywords: [
      'pastry',
      'dessert atelier',
      'Riverhead bakery',
      'crullers',
      'The Sugar Rush',
      'thesugarrushh',
    ],
    path: '/',
  }),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${sora.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
