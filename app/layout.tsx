import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: {
    default: 'Dal Segno al Sogno - Masterclass Marketing',
    template: '%s | Formula Lab'
  },
  description: 'App interattiva per la lezione su Piano e Calendario Editoriale per creativi del programma Garanzia Giovani. Include presentazioni dinamiche, strumenti di analisi e risorse per il social media marketing.',
  keywords: ['marketing', 'comunicazione', 'social media', 'piano editoriale', 'calendario editoriale', 'creativi', 'garanzia giovani'],
  authors: [{ name: 'Mari Indennitate', url: 'https://indennitatedigital.it' }],
  creator: 'Formula Lab',
  publisher: 'Formula Lab',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Dal Segno al Sogno - Masterclass Marketing',
    description: 'Lezione interattiva su Piano e Calendario Editoriale per creativi.',
    url: 'https://formula-lab.vercel.app',
    siteName: 'Formula Lab Masterclass',
    locale: 'it_IT',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased bg-[#fdfdfd] text-slate-900" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
