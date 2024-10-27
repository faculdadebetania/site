import { Course } from 'src/models/course.model';
import { z } from 'zod';

export const schema = z.object({
  data: z.array(
    z.object({
      id: z.number(),
      documentId: z.string(),
      price: z.number(),
      period: z.literal('noturno'),
      duration: z.number(),
      durationUnit: z.enum(['dias', 'meses', 'anos']),
      startDate: z.coerce.date(),
      modality: z.enum(['presencial', 'presencial/online', 'online']),
      category: z.enum(['bacharelado', 'pós-graduação', 'curso livre']),
      createdAt: z.coerce.date(),
      updatedAt: z.coerce.date(),
      publishedAt: z.coerce.date(),
      name: z.string(),
      slug: z.string(),
      priceDisclaimer: z.string(),
      weekDays: z.array(z.enum(['seg.', 'ter.', 'qua.', 'qui.', 'sex.', 'sáb.', 'dom.'])),
      paymentRecurrence: z.enum(['mês', 'único']),
      startDateType: z.enum(['dia', 'mês']),
      classSchedule: z.string(),
    })
  ),
  meta: z.any(),
});

const response = schema.transform<Array<Course>>(({ data }) => data);

export const getCourseSchema = response;
