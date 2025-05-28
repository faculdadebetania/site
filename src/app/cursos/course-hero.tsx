import { Button } from '@components/ui/button';
import { cn } from '@utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

export function CourseHero({ children }: PropsWithChildren) {
  return <section className="container flex flex-col justify-end gap-4 h-[384px] lg:h-[448px]">{children}</section>;
}

export function CourseHeroTitle({ children }: PropsWithChildren) {
  return <h1 className="uppercase text-4xl md:text-7xl font-extrabold break-words">{children}</h1>;
}

export function CourseHeroSubtitle({ children }: PropsWithChildren) {
  return <h3 className="uppercase text-xl font-bold text-secondary">{children}</h3>;
}

export function CourseHeroAction({ href, children, className }: PropsWithChildren<{ href: string; className?: string }>) {
  return (
    <Button
      asChild
      className={cn(
        'w-max p-4 bg-white text-primary font-bold text-base border-[2px] border-solid border-secondary shadow-[2px_2px_0_0_#FCA311] hover:bg-primary hover:text-white',
        className
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
}

export function CourseHeroBackground({ src }: { src: string }) {
  return (
    <div className="absolute top-0 left-0 w-full -z-10 h-[512px] lg:h-[576px]">
      <Image
        alt="hero"
        src={src}
        fill
        style={{
          objectFit: 'cover',
        }}
      />
    </div>
  );
}
