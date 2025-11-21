import { Button } from '@components/ui/button';
import { Separator } from '@components/ui/separator';
import { cn } from '@utils/cn';
import Link from 'next/link';
import { Course } from 'src/models/course.model';

type Props = {
  course: Course;
};

export function CourseCard({ course }: Props) {
  const { category, duration, name, period, price, slug, startDate } = course;

  let backgroundColor = 'bg-neutral-200';
  let textColor = 'text-primary';

  if (category === 'pós-graduação') {
    backgroundColor = 'bg-secondary';
  }

  if (category === 'curso livre' || category === 'extensão') {
    backgroundColor = 'bg-primary';
    textColor = 'text-neutral-200';
  }

  return (
    <Link
      href={`/cursos/${slug}`}
      className={cn(
        'flex flex-col justify-between min-h-[300px] h-full gap-4 p-8 rounded-lg hover:opacity-80 transition border-white border-[1px] border-solid',
        backgroundColor,
        textColor
      )}
    >
      <section>
        <h6 className="uppercase font-bold text-sm opacity-70">{category}</h6>
        <h4 className="font-bold text-xl min-h-14">{name}</h4>
      </section>
      <section>
        <div>
          Duração:&nbsp;
          <b>{duration}</b>
        </div>
        <div>
          Período:&nbsp;<b>{period}</b>
        </div>
        <div>
          Data de início:&nbsp;<b>{startDate}</b>
        </div>
      </section>
      <Separator className="!m-0" />
      <section className="flex flex-col justify-between items-start gap-4 md:flex-row md:items-center">
        <div className="font-extrabold">{price}</div>
        <Button className="w-full p-4 bg-white text-primary font-bold text-base hover:bg-white hover:text-primary md:w-max">
          Saiba Mais
        </Button>
      </section>
    </Link>
  );
}
