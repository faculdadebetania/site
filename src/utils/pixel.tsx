'use client';

import { usePathname } from 'next/navigation';
import Script from 'next/script';
import { useCallback, useEffect, useState } from 'react';

// TODO: use environment variable
const FB_PIXEL_ID = '1275955522591801';

export default function FacebookPixel() {
  const [fbq, setFbq] = useState<any>();
  const [loaded, setLoaded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // TODO: declare a global type to fqb (didn't find any working solution)
    setFbq((window as any).fbq);
  }, []);

  const pageview = useCallback(
    function () {
      if (fbq) fbq('track', 'PageView');
    },
    [fbq]
  );

  useEffect(() => {
    if (loaded) pageview();
  }, [pathname, loaded, pageview]);

  return (
    <Script
      id="fb-pixel"
      src="/scripts/pixel.js"
      strategy="afterInteractive"
      onLoad={() => setLoaded(true)}
      data-pixel-id={FB_PIXEL_ID}
    />
  );
}
