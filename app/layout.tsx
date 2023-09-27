import ActiveSectionContextProvider from '@/context/active-section-context';
import './globals.css';
import type { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';
import GoogleAnalytics from '@/components/GoogleAnalytics';

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
      <head>
        <GoogleAnalytics
          GA_TRACKING_ID={process.env.NEXT_PUBLIC_GA_TRACKING_ID as string}
        />
      </head>

      <body className="bg-primary-navy leading-relaxed text-slate-400 antialiased selection:bg-secondary-green selection:text-secondary-navy">
        <ActiveSectionContextProvider>
          <Toaster position="top-right" />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
