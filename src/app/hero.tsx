import { Button } from '@components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="container py-8 grid grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-center">
      <div className="flex flex-col content-center items-start gap-4">
        <h1 className="uppercase text-5xl lg:text-7xl font-semibold">
          A <b>MELHOR</b> FORMAÇÃO <br />
          TEOLÓGICA DO&nbsp;
          <b className="text-secondary">PARANÁ</b>
        </h1>
        <span className="text-lg lg:text-2xl">
          <b className="text-secondary">Primeiro</b> lugar na avaliação do&nbsp;
          <b>ENADE/MEC</b> entre as instituições protestantes do&nbsp;
          <b>Paraná</b> e entre as <b>primeiras do Brasil</b>
        </span>
        <Button
          asChild
          className="w-max p-6 bg-white text-primary font-bold text-base border-[2px] border-solid border-secondary shadow-[2px_2px_0_0_#FCA311]  hover:bg-primary hover:text-white "
        >
          <Link href="#cursos">Estude aqui</Link>
        </Button>
      </div>
      <div className="relative w-full h-[512px] hidden lg:block">
        <Image
          src="/imagens/hero.png"
          alt="hero"
          fill
          priority
          quality={100}
          style={{ objectFit: 'contain' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </section>
  );
}
