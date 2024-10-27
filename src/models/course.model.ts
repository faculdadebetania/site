export interface Course {
  id: number;
  documentId: string;
  price: number;
  period: 'noturno';
  duration: number;
  durationUnit: 'dias' | 'meses' | 'anos';
  startDate: Date;
  modality: 'presencial' | 'presencial/online' | 'online';
  category: 'bacharelado' | 'pós-graduação' | 'curso livre';
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  name: string;
  slug: string;
  priceDisclaimer: string;
  weekDays: Array<'seg.' | 'ter.' | 'qua.' | 'qui.' | 'sex.' | 'sáb.' | 'dom.'>;
  paymentRecurrence: 'mês' | 'único';
  startDateType: 'dia' | 'mês';
  classSchedule: string;
}
