import type { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';

import ActiveSectionContextProvider from '@/context/active-section-context';
import GoogleAnalytics from '@/components/GoogleAnalytics';

import './globals.css';
import Script from 'next/script';

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
      {/* <head> */}
      <GoogleAnalytics
        GA_TRACKING_ID={process.env.NEXT_PUBLIC_GA_TRACKING_ID as string}
      />
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GA_TRACKING_ID}');
        `}
      </Script>
      {/* </head> */}

      <body className="bg-primary-navy leading-relaxed text-slate-400 antialiased selection:bg-secondary-green selection:text-secondary-navy">
        <ActiveSectionContextProvider>
          <Toaster position="top-right" />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
