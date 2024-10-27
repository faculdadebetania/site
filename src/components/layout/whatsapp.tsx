'use client';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@components/ui/tooltip';
import Image from 'next/image';
import Link from 'next/link';

export default function Whatsapp() {
  const number = '+554196705657';
  const href = `https://wa.me/${number}`;
  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger className="fixed top-[calc(50%+96px)] right-[10px] -translate-y-1/2">
          <Link href={href}>
            <Image alt="whatsapp" src="/imagens/whatsapp.png" width={40} height={40} className="rounded-lg" />
          </Link>
        </TooltipTrigger>
        <TooltipContent side="left" sideOffset={8} className="bg-primary">
          Fale conosco!
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
