import isMobile from '@utils/is-mobile';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { NavDesktop } from './nav';

export const HEADER_HEIGHT = 128;

export default function Header() {
  const userAgent = headers().get('user-agent');
  const nav = isMobile(userAgent) ? null : <NavDesktop />;

  return (
    <header
      className="container flex justify-between items-center !py-8"
      style={{ height: HEADER_HEIGHT }}
    >
      <Link href="/" className="relative w-[196px] h-full">
        <Image
          priority
          fill
          src="/imagens/logo.png"
          alt="logo"
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain"
        />
      </Link>
      {nav}
    </header>
  );
}
