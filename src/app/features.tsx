'use client';

import { cn } from '@utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import { AnchorHTMLAttributes, MouseEventHandler, PropsWithChildren, forwardRef, useState } from 'react';

interface Feature {
  id: string;
  image: string;
  link: string;
  title: string;
  text: string;
}

const features: Array<Feature> = [
  {
    id: 'reputable',
    title: 'Reconhecido pelo MEC',
    image: '/imagens/award.png',
    text: `Cursos <b>reconhecidos</b> pelo MEC e em <b>primeiro lugar</b> na avaliação do ENADE/MEC
      entre as instituições protestantes do Paraná e entre as <b>primeiras do Brasil</b>.`,
    link: '#',
  },
  {
    id: 'faculty',
    title: 'Corpo Docente',
    image: '/imagens/graduation.png',
    text: `Corpo docente formado em sua maioria por mestres e doutores na área,
    engajados na prática do ministério e com ampla experiência em sua área de atuação.`,
    link: '/corpo-docente',
  },
  {
    id: 'interdenominational',
    title: 'Interdenominacional',
    image: '/imagens/puzzle.png',
    text: `Na FATEBE temos professores e alunos de diferentes denominações e você estuda as
    diferentes visões teológicas e interpretações bíblicas sobre diversos assuntos.`,
    link: '#',
  },
  {
    id: 'experience',
    title: 'Experiência e Credibilidade',
    image: '/imagens/verified.png',
    text: `A Betânia tem 75 anos de história e experiência na formação teológica e
    milhares de alunos formados trabalhando em diversas áreas, no Brasil e em dezenas de países.`,
    link: '/a-faculdade',
  },
];

export default function Features() {
  const [active, setActive] = useState<Feature>(features[0]);

  function handleMouseOver(feature: Feature) {
    if (feature.text) setActive(feature);
  }

  return (
    <section className="container grid grid-col-1 gap-4 lg:gap-16 lg:grid-cols-2 bg-neutral-200">
      <div className="flex flex-col gap-4 text-primary">
        <h2 className="uppercase text-4xl lg:text-7xl font-bold">PORQUE VOCÊ DEVE ESTUDAR AQUI?</h2>
        <span className="text-md lg:text-2xl transition" dangerouslySetInnerHTML={{ __html: active.text }} />
      </div>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-2 md:gap-4">
        {features.map((feature) => (
          <FeatureItem
            data-active={active === feature}
            key={feature.id}
            link={feature.link}
            onMouseOver={() => handleMouseOver(feature)}
            className="data-[active=true]:bg-secondary"
          >
            <FeatureItemImage src={feature.image} />
            <FeatureItemTitle>{feature.title}</FeatureItemTitle>
          </FeatureItem>
        ))}
      </div>
    </section>
  );
}

type FeatureItemProps = PropsWithChildren<{
  link: string;
  className?: string;
  onMouseOver?: MouseEventHandler<HTMLDivElement>;
}> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

const FeatureItem = forwardRef<HTMLAnchorElement, FeatureItemProps>(function FeatureItem(
  { children, className, link, onMouseOver, ...props }: FeatureItemProps,
  ref
) {
  return (
    <Link
      href={link}
      ref={ref}
      {...props}
      onMouseOver={onMouseOver}
      className={cn(
        'flex flex-col items-center justify-center p-4 lg:p-8 gap-4 bg-slate-900 cursor-pointer rounded-lg hover:opacity-50 transition whitespace-nowrap',
        className
      )}
    >
      {children}
    </Link>
  );
});

function FeatureItemImage({ src }: { src: string }) {
  return (
    <Image
      width={72}
      height={72}
      src={src}
      alt="icon"
      style={{
        filter: 'invert(99%) sepia(1%) saturate(321%) hue-rotate(202deg) brightness(116%) contrast(100%)',
      }}
      className="w-12 h-12 lg:w-[72px] lg:h-[72px] object-contain"
    />
  );
}

function FeatureItemTitle({ children }: PropsWithChildren) {
  return (
    <h3 className="text-center relative uppercase font-semibold text-xs break-words whitespace-break-spaces md:text-lg">
      {children}
    </h3>
  );
}
