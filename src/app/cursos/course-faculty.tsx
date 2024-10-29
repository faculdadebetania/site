import { Carousel, CarouselContent, CarouselDots, CarouselItem, CarouselNext, CarouselPrevious } from '@components/ui/carousel';
import { Separator } from '@components/ui/separator';
import Image from 'next/image';
import { Faculty } from 'src/models/faculty.model';

interface Props {
  faculties?: Array<Faculty>;
}
export function CourseFaculties({ faculties }: Props) {
  if (!faculties) return;
  return (
    <section className="container bg-primary flex flex-col gap-8" id="corpo-docente">
      <h1 className="uppercase text-5xl lg:text-7xl text-white font-bold">CORPO DOCENTE</h1>
      <Carousel>
        <CarouselContent>
          {faculties.map((faculty) => {
            return (
              <CarouselItem key={faculty.name} className="basis-full flex-grow md:basis-1/2 xl:basis-1/3">
                <CourseFaculty {...{ faculty }} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        <CarouselDots />
      </Carousel>
    </section>
  );
}

export function CourseFaculty({ faculty }: { faculty: Faculty }) {
  const {
    name,
    academicBackground,
    photo: { url },
  } = faculty;

  const _academicBackground = academicBackground.split('\n');

  return (
    <div className="flex flex-col !justify-start gap-4 h-full bg-white rounded-lg text-primary p-8 pb-10">
      <div className="flex items-center gap-4">
        <Image alt={name} src={url} width="64" height="64" className="rounded-full border-secondary border-2 border-solid" />
        <h3 className="text-2xl uppercase font-semibold">{name}</h3>
      </div>
      <Separator className="!m-0 bg-neutral-300" />
      <ul className="flex flex-col gap-1">
        {_academicBackground.map((degree, index) => (
          <li key={index}>&middot;&nbsp;{degree}</li>
        ))}
      </ul>
    </div>
  );
}
