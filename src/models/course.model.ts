import { Faculty } from './faculty.model';

export interface Course {
  price: string;
  period: string;
  duration: string;
  startDate: string;
  modality: 'presencial' | 'presencial/online' | 'online';
  category: 'bacharelado' | 'pós-graduação' | 'curso livre' | 'extensão';
  name: string;
  slug: string;
  priceDisclaimer: string;
  weekDays: string;
  classSchedule: string;
  curriculum?: Array<string>;
  faculties: Array<Faculty>;
}
