'use client';
import Script from 'next/script';

// import { usePathname, useSearchParams } from 'next/navigation';
// import { useEffect } from 'react';
// import { pageview } from '@/lib/gtag-helper';

const GoogleAnalytics = ({ GA_TRACKING_ID }: { GA_TRACKING_ID: string }) => {
  // const pathname = usePathname();
  // const searchParams = useSearchParams();

  // useEffect(() => {
  //   const url = pathname + searchParams.toString();

  //   pageview(GA_TRACKING_ID, url);
  // }, [pathname, searchParams, GA_TRACKING_ID]);

  return (
    <>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GA_TRACKING_ID}');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
