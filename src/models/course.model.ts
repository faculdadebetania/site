export interface Course {
  price: string;
  period: string;
  duration: string;
  startDate: string;
  modality: 'presencial' | 'presencial/online' | 'online';
  category: 'bacharelado' | 'pós-graduação' | 'curso livre';
  name: string;
  slug: string;
  priceDisclaimer: string;
  weekDays: string;
  classSchedule: string;
}
