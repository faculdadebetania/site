import ReCAPTCHA from '@components/recaptcha';
import VLibras from '@components/vlibras';
import '@styles/global.scss';
import { cn } from '@utils/cn';
import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import Contact from './contact';
import { nunito, poppins } from './fonts';
import Footer from './footer';
import Header from './header';
import Whatsapp from './whatsapp';

export const metadata: Metadata = {
  title: 'Faculdade Teológica Betânia',
  description: 'Teologia como Vocação',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang="pt-BR"
      className={cn(poppins.variable, nunito.variable, 'bg-primary')}
    >
      <body>
        <Header />
        {children}
        <Contact />
        <Footer />
        <Whatsapp />
        <Analytics />
        <VLibras />
        <ReCAPTCHA />
      </body>
    </html>
  );
}
