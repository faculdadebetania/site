import Script from 'next/script';

export default function ReCAPTCHA() {
  const { NODE_ENV, NEXT_PUBLIC_RECAPTCHA_KEY } = process.env;
  if (NODE_ENV !== 'production') return;

  return <Script src={`https://www.google.com/recaptcha/api.js?render=${NEXT_PUBLIC_RECAPTCHA_KEY}`} />;
}
