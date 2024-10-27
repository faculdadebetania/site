import { Button } from '@components/ui/button';
import { Separator } from '@components/ui/separator';
import { cn } from '@utils/cn';
import { toLocaleDate } from '@utils/date';
import capitalize from 'capitalize';
import Link from 'next/link';
import { Course } from 'src/models/course.model';

type Props = {
  course: Course;
};

export function CourseCard({ course }: Props) {
  const { category, duration, durationUnit, name, paymentRecurrence, period, price, slug, startDate, startDateType } = course;

  let _duration = String(duration);

  if (duration % 1 === 0.5) {
    _duration = Math.trunc(duration) + '½';
  }

  _duration = `${_duration} ${durationUnit}`;

  const _period = capitalize(period);

  let _startDate = toLocaleDate(startDate).toLocaleDateString('pt-BR', { day: 'numeric', month: 'short', year: 'numeric' });

  if (startDateType === 'mês') {
    _startDate = toLocaleDate(startDate).toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' });
  }

  _startDate = _startDate.replace(/\sde\s/g, String.fromCharCode(32));

  let _price = `R$ ${price}`;
  if (paymentRecurrence === 'mês') _price = `${_price} / mês`;

  let backgroundColor = 'bg-neutral-200';
  let textColor = 'text-primary';

  if (category === 'pós-graduação') {
    backgroundColor = 'bg-secondary';
  }

  if (category === 'curso livre') {
    backgroundColor = 'bg-primary';
    textColor = 'text-neutral-200';
  }

  return (
    <Link
      href={slug}
      className={cn(
        'flex flex-col justify-between min-h-[300px] gap-4 p-8 rounded-lg hover:opacity-80 transition border-white border-[1px] border-solid',
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
          <b>{_duration}</b>
        </div>
        <div>
          Período:&nbsp;<b>{_period}</b>
        </div>
        <div>
          Data de início:&nbsp;<b>{_startDate}</b>
        </div>
      </section>
      <Separator className="!m-0" />
      <section className="flex flex-col justify-between items-start gap-4 md:flex-row md:items-center">
        <div className="font-extrabold">{_price}</div>
        <Button className="w-full p-4 bg-white text-primary font-bold text-base hover:bg-white hover:text-primary md:w-max">
          Saiba Mais
        </Button>
      </section>
    </Link>
  );
}
