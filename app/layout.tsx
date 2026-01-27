import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/constants/siteConfig';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${siteConfig.name} - Premium Konaklama | Sapanca`,
  description: siteConfig.hero.subtitle,
  keywords: [
    'Sapanca',
    'konaklama',
    'müstakil',
    'havuz',
    'jakuzi',
    'şömine',
    'sinema sistemi',
    'kış bahçesi',
    'rezervasyon',
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: `${siteConfig.name} - Premium Konaklama | Sapanca`,
    description: siteConfig.hero.subtitle,
    type: 'website',
    locale: 'tr_TR',
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} - Premium Konaklama | Sapanca`,
    description: siteConfig.hero.subtitle,
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
