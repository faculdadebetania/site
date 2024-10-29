import A11y from '@components/a11y/a11y';
import VLibras from '@components/a11y/vlibras';
import ReCAPTCHA from '@components/forms/recaptcha';
import '@styles/global.scss';
import { cn } from '@utils/cn';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import Contact from '../components/layout/contact';
import { nunito, poppins } from '../components/layout/fonts';
import Footer from '../components/layout/footer';
import Header from '../components/layout/header';
import Whatsapp from '../components/layout/whatsapp';

export const metadata: Metadata = {
  title: 'Faculdade Teológica Betânia',
  description: 'Teologia como Vocação',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-BR" className={cn(poppins.variable, nunito.variable, 'bg-primary')}>
      <body>
        <Header />
        {children}
        <Contact />
        <Footer />
        <Whatsapp />
        <VLibras />
        <ReCAPTCHA />
        <A11y />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
