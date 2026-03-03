/* eslint-disable @next/next/no-img-element */
'use client';

import { Carousel, CarouselContent, CarouselDots, CarouselItem, CarouselNext, CarouselPrevious } from '@components/ui/carousel';

export default function RepublicPhotos() {
  return (
    <section className="container flex flex-col gap-8">
      <h1 className="uppercase text-5xl lg:text-7xl font-extrabold">CONHEÇA NOSSAS REPÚBLICAS</h1>
      <section className="flex flex-col gap-4">
        <span className="text-3xl lg:text-5xl font-extrabold text-secondary">República Feminina</span>
        <Carousel controlsLayout="inline">
          <CarouselContent>
            {Array(7)
              .fill(0)
              .map((_, index) => (
                <CarouselItem key={index}>
                  <img src={`/imagens/republica-estudantil/feminina/${index + 1}.jpg`} alt="república" />
                </CarouselItem>
              ))}
          </CarouselContent>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-3">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
              <span className="text-sm text-gray-600">
                Clique aqui para ir para próxima foto
              </span>
            </div>
            <CarouselDots />
          </div>
        </Carousel>
      </section>
      <section className="flex flex-col gap-4">
        <span className="text-3xl lg:text-5xl font-extrabold text-secondary">República Masculina</span>
        <Carousel controlsLayout="inline">
          <CarouselContent>
            {Array(11)
              .fill(0)
              .map((_, index) => (
                <CarouselItem key={index}>
                  <img src={`/imagens/republica-estudantil/masculina/${index + 1}.jpg`} alt="república" />
                </CarouselItem>
              ))}
          </CarouselContent>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-3">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
              <span className="text-sm text-gray-600">
                Clique aqui para ir para próxima foto
              </span>
            </div>
            <CarouselDots />
          </div>
        </Carousel>
      </section>
    </section>
  );
}
