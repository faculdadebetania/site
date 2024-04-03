import { Button } from '@components/ui/button';
import { Separator } from '@components/ui/separator';
import { cn } from '@utils/cn';
import Link from 'next/link';
import { Course, courses } from 'src/mock/courses';

export default function Courses() {
  return (
    <section className="container flex flex-col gap-8" id="cursos">
      <div className="flex flex-col gap-4">
        <h2 className="uppercase text-5xl lg:text-7xl font-bold">
          PREPARE-SE PARA O MINISTÉRIO
        </h2>
        <span className="text-lg lg:text-2xl">
          &quot;Procura apresentar-te diante de Deus aprovado, como obreiro que
          não tem de que se envergonhar, que maneja bem a palavra da
          verdade.&quot; Timóteo 2:15
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 rounded-md">
        {courses.map((course) => (
          <CourseCard key={course.link} course={course} />
        ))}
      </div>
    </section>
  );
}

type CourseProps = {
  course: Course;
};

function CourseCard({ course }: CourseProps) {
  return (
    <Link
      href={course.link}
      className={cn(
        'flex flex-col justify-between min-h-[300px] gap-4 p-8 rounded-lg hover:opacity-80 transition border-white border-[1px] border-solid',
        course.backgroundColor,
        course.textColor
      )}
    >
      <section>
        <h6 className="uppercase font-bold text-sm opacity-70">
          {course.category}
        </h6>
        <h4 className="font-bold text-xl">{course.title}</h4>
      </section>
      <section>
        <div>
          Duração: <b>{course.duration}</b>
        </div>
        <div>
          Período: <b>{course.period}</b>
        </div>
        <div>
          Previsão de início: <b>{course.upcoming}</b>
        </div>
      </section>
      <Separator className="!m-0" />
      <section className="flex justify-between items-center">
        <div className="font-extrabold">{course.price}</div>
        <Button className="w-max p-4 bg-white text-primary font-bold text-base hover:bg-white hover:text-primary">
          Saiba Mais
        </Button>
      </section>
    </Link>
  );
}
