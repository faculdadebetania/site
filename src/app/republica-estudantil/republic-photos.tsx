/* eslint-disable @next/next/no-img-element */
'use client';

import { Carousel, CarouselContent, CarouselDots, CarouselItem, CarouselNext, CarouselPrevious } from '@components/ui/carousel';

export default function RepublicPhotos() {
  return (
    <section className="container flex flex-col gap-8">
      <h1 className="uppercase text-5xl lg:text-7xl font-extrabold">CONHEÇA NOSSAS REPÚBLICAS</h1>
      <section className="flex flex-col gap-4">
        <span className="text-3xl lg:text-5xl font-extrabold text-secondary">República Feminina</span>
        <Carousel>
          <CarouselContent>
            {Array(7)
              .fill(0)
              .map((_, index) => (
                <CarouselItem key={index}>
                  <img src={`/imagens/republica-estudantil/feminina/${index + 1}.jpg`} alt="república" />
                </CarouselItem>
              ))}
          </CarouselContent>
        </Carousel>
      </section>
      <section className="flex flex-col gap-4">
        <span className="text-3xl lg:text-5xl font-extrabold text-secondary">República Masculina</span>
        <Carousel>
          <CarouselContent>
            {Array(11)
              .fill(0)
              .map((_, index) => (
                <CarouselItem key={index}>
                  <img src={`/imagens/republica-estudantil/masculina/${index + 1}.jpg`} alt="república" />
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
          <CarouselDots />
        </Carousel>
      </section>
    </section>
  );
}
