import { Carousel, CarouselContent, CarouselDots, CarouselItem, CarouselNext, CarouselPrevious } from '@components/ui/carousel';
import { Course } from 'src/models/course.model';
import { getCourses } from 'src/providers/course.provider';
import { CourseCard } from './course-card';

export default async function Courses() {
  const courses = await getCourses();

  const order = [
    'teologia',
    'aconselhamento-e-gestao-de-pessoas',
    'biblia-teologia-e-formacao-ministerial',
    'teologia-e-formacao-ministerial',
    'capelania',
    'comunicacao-que-transforma',
  ];

  return (
    <section className="container flex flex-col gap-8" id="cursos">
      <div className="flex flex-col gap-4">
        <h2 className="uppercase text-4xl lg:text-7xl font-bold">PREPARE-SE PARA O MINISTÉRIO</h2>
        <span className="text-md lg:text-2xl">
          &quot;Procura apresentar-te diante de Deus aprovado, como obreiro que não tem de que se envergonhar, que maneja bem a
          palavra da verdade.&quot; Timóteo 2:15
        </span>
      </div>
      <Carousel>
        <CarouselContent className="px-2">
          {order.map((slug) => {
            const course = courses.find((course) => course.slug === slug) as Course;
            console.log(course);
            return (
              <CarouselItem key={course.slug} className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <CourseCard course={course} />
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
