import Script from 'next/script';
import { Fragment } from 'react';

// TODO: use environment variable
const GA_MEASUREMENT_ID = 'AW-677683074';

export default function GoogleTagManager() {
  return (
    <Fragment>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </Fragment>
  );
}
