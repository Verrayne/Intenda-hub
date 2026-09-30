import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const geist = localFont({ src: './fonts/Geist.ttf', variable: '--font-geist', weight: '100 900', display: 'swap' });

const title = 'Intenda Hub — Projects & Platforms';
const description = 'A central hub for Intenda applications, platforms, documentation and project tools.';
export const metadata: Metadata = {
  metadataBase: new URL('https://work.imber.me'), title, description,
  alternates: { canonical: '/' },
  openGraph: { title, description, url: '/', siteName: 'Intenda Hub', type: 'website', locale: 'en_ZA' },
  twitter: { card: 'summary', title, description },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={geist.variable}><body>{children}</body></html>;
}
