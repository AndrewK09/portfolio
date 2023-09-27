'use client';
import Script from 'next/script';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { pageview } from '@/lib/gtag-helper';

const GoogleAnalytics = ({ GA_TRACKING_ID }: { GA_TRACKING_ID: string }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + searchParams.toString();

    pageview(GA_TRACKING_ID, url);
  }, [pathname, searchParams, GA_TRACKING_ID]);

  return (
    <>
      <Script
        strategy="beforeInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('consent', 'default', {
            'analytics_storage': 'denied'
        });
        
        gtag('config', '${GA_TRACKING_ID}', {
            page_path: window.location.pathname,
        });
        `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;
