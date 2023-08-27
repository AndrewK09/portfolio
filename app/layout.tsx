import ActiveSectionContextProvider from '@/context/active-section-context';
import './globals.css';
import type { Metadata } from 'next';

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
      <body className="bg-slate-700 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
        <ActiveSectionContextProvider>{children}</ActiveSectionContextProvider>
      </body>
    </html>
  );
}
