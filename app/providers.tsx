'use client';

import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
import { useEffect, useRef } from 'react';

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  });
}

const PHProvider = ({ children }: { children: React.ReactNode }) => {
  const maxPercentage = useRef(0);
  const maxPixels = useRef(0);
  useEffect(() => {
    function handleScroll() {
      const lastPercentage = Math.min(
        1,
        (window.innerHeight + window.pageYOffset) / document.body.offsetHeight
      );
      const lastPixels = window.innerHeight + window.pageYOffset;
      if (lastPercentage > maxPercentage.current) {
        maxPercentage.current = lastPercentage;
      }
      if (lastPixels > maxPixels.current) {
        maxPixels.current = lastPixels;
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handlePageleave = () => {
      posthog.capture('$pageleave', {
        'max scroll percentage': maxPercentage.current,
        'max scroll pixels': maxPixels.current,
        'last scroll percentage': Math.min(
          1,
          (window.innerHeight + window.pageYOffset) / document.body.offsetHeight
        ),
        'last scroll pixels': window.innerHeight + window.pageYOffset,
        scrolled: maxPixels.current > 0,
      });
    };

    window.addEventListener('beforeunload', handlePageleave);

    return () => {
      window.removeEventListener('beforeunload', handlePageleave);
    };
  }, []);

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
};

export default PHProvider;
