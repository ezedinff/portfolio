'use client'

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const GA4_MEASUREMENT_ID = 'G-L66Z9YX40E';

const GA4Analytics = () => {
  const pathname = usePathname();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      window.gtag('config', GA4_MEASUREMENT_ID, {
        page_path: url,
      });
    };

    handleRouteChange(pathname);
  }, [pathname]);

  return null;
};

export default GA4Analytics;