'use client';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@components/tooltip';
import Image from 'next/image';
import Link from 'next/link';

export default function Whatsapp() {
  const number = '+554196705657';
  const href = `https://wa.me/${number}`;
  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger className="fixed bottom-12 right-12">
          <Link href={href}>
            <Image
              alt="whatsapp"
              src="/imagens/whatsapp.png"
              width={48}
              height={48}
            />
          </Link>
        </TooltipTrigger>
        <TooltipContent>Fale conosco!</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
