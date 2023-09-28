import type { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';

import ActiveSectionContextProvider from '@/context/active-section-context';
import Providers from './providers';

import './globals.css';

export const metadata: Metadata = {
  title: 'Andrew Kan',
  description: 'Andrew Kan portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-primary-navy leading-relaxed text-slate-400 antialiased selection:bg-secondary-green selection:text-secondary-navy">
        <Providers>
          <ActiveSectionContextProvider>
            <Toaster position="top-right" />
            {children}
          </ActiveSectionContextProvider>
        </Providers>
      </body>
    </html>
  );
}
