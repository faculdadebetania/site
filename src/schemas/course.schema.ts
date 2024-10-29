import { toLocaleDate } from '@utils/date';
import capitalize from 'capitalize';
import { Course } from 'src/models/course.model';
import { z } from 'zod';

export const schema = z.object({
  data: z.array(
    z.object({
      price: z.number(),
      period: z.literal('noturno'),
      duration: z.number(),
      durationUnit: z.enum(['dias', 'meses', 'anos']),
      startDate: z.coerce.date(),
      modality: z.enum(['presencial', 'presencial/online', 'online']),
      category: z.enum(['bacharelado', 'pós-graduação', 'curso livre']),
      name: z.string(),
      slug: z.string(),
      priceDisclaimer: z.string(),
      weekDays: z.array(z.enum(['seg.', 'ter.', 'qua.', 'qui.', 'sex.', 'sáb.', 'dom.'])),
      paymentRecurrence: z.enum(['mês', 'único']),
      startDateType: z.enum(['dia', 'mês']),
      classSchedule: z.string(),
      faculties: z.array(
        z.object({
          name: z.string(),
          academicBackground: z.string(),
          photo: z.object({
            url: z.string(),
          }),
        })
      ),
    })
  ),
  meta: z.any(),
});

const response = schema.transform<Array<Course>>(({ data }) => {
  const result = data.map<Course>((course) => {
    const {
      duration,
      durationUnit,
      period,
      startDate,
      startDateType,
      price,
      paymentRecurrence,
      weekDays,
      name,
      slug,
      category,
      modality,
      classSchedule,
      priceDisclaimer,
      faculties,
    } = course;

    let _duration = String(duration);

    if (duration % 1 === 0.5) {
      _duration = Math.trunc(duration) + '½';
    }

    _duration = `${_duration} ${durationUnit}`;

    let _period = capitalize(period);

    let _startDate = toLocaleDate(startDate).toLocaleDateString('pt-BR', { day: 'numeric', month: 'short', year: 'numeric' });

    if (startDateType === 'mês') {
      _startDate = toLocaleDate(startDate).toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' });
    }

    _startDate = _startDate.replace(/\sde\s/g, String.fromCharCode(32));

    let _price = `R$ ${price}`;
    if (paymentRecurrence === 'mês') _price = `${_price} / mês`;

    let _weekDays = weekDays[0].toString();

    if (weekDays.length > 1) {
      _weekDays = weekDays.slice(0, weekDays.length - 1).join(',' + String.fromCharCode(32));
      _weekDays = `${_weekDays}, e ${weekDays[weekDays.length - 1]}`;
    }

    return {
      name,
      slug,
      category,
      modality,
      classSchedule,
      priceDisclaimer,
      duration: _duration,
      period: _period,
      startDate: _startDate,
      price: _price,
      weekDays: _weekDays,
      faculties,
    };
  });

  return result;
});

export const getCourseSchema = response;
