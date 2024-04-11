export interface Course {
  id: string;
  title: string;
  price: string;
  period: string;
  duration: string;
  upcoming: string;
  link: string;
  modality: string;
  category: string;
  backgroundColor: string;
  textColor: string;
  curriculum?: string[];
  faculty?: number[];
}

export const courses: Course[] = [
  {
    id: 'teologia',
    title: 'Teologia',
    price: 'R$ 399 / mês',
    period: 'Noturno',
    duration: '3½ anos',
    upcoming: '22 jul. 2024',
    link: '/cursos/teologia',
    modality: 'Presencial',
    category: 'Bacharelado',
    backgroundColor: 'bg-neutral-200',
    textColor: 'text-primary',
    faculty: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
  },
  {
    id: 'aconselhamento-e-gestao-de-pessoas',
    title: 'Aconselhamento e Gestão de Pessoas',
    price: 'R$ 299 / mês',
    period: 'Noturno',
    duration: '13 meses',
    upcoming: 'Agosto 2024',
    link: '/cursos/aconselhamento-e-gestao-de-pessoas',
    modality: 'Presencial',
    category: 'Pós-graduação',
    backgroundColor: 'bg-secondary',
    textColor: 'text-primary',
    faculty: [1, 2, 5, 6, 8, 13, 14, 15, 16, 17],
    curriculum: [
      'A Arte de Liderar e Mobilizar Pessoas',
      'Gestão de Equipes',
      'Elaboração de Projetos e Planejamento Estratégico',
      'Desenvolvimento de Habilidades e Competências',
      'Inteligência Emocional e Relacional',
      'Resolução e Mediação de Conflitos',
      'Modelos e Técnicas de Aconselhamento I & II',
      'Saúde Mental e Noções de Psicopatologia',
      'Teologia e Espiritualidade',
      'Ética Aplicada',
      'Autogestão e desenvolvimento pessoal',
    ],
  },
  {
    id: 'biblia-e-teologia',
    title: 'Bíblia e Teologia',
    price: 'R$ 299 / mês',
    period: 'Noturno',
    duration: '12 meses',
    upcoming: '13 mai. 2024',
    link: '/cursos/biblia-e-teologia',
    modality: 'Presencial',
    category: 'Pós-graduação',
    backgroundColor: 'bg-secondary',
    textColor: 'text-primary',
    curriculum: [
      'Bibliologia',
      'Métodos de interpretação bíblica aprofundada',
      'Teologia do Antigo Testamento ',
      'Teologia do Novo Testamento',
      'Panorama histórico da teologia Cristã',
      'Introdução geral à teologia.',
      'Teologia sistemática I',
      'Teologia sistemática II',
      'Eclesiologia',
      'Antropologia teológica',
      'Teologias contemporâneas',
    ],
  },
  {
    id: 'capelania',
    title: 'Capelania',
    price: 'R$ 150,00',
    period: 'Noturno',
    duration: '4 dias',
    upcoming: '22 abr. 2024',
    link: '/cursos/capelania',
    modality: 'Presencial/Online',
    category: 'Curso Livre',
    backgroundColor: 'bg-primary',
    textColor: 'text-neutral-200',
  },
  {
    id: 'comunicacao-que-transforma',
    title: 'Comunicação que transforma',
    price: 'R$ 349,99',
    period: 'Noturno',
    duration: '9 dias',
    upcoming: '09 abr. 2024',
    link: '/cursos/comunicacao-que-transforma',
    modality: 'Presencial/Online',
    category: 'Curso Livre',
    backgroundColor: 'bg-primary',
    textColor: 'text-neutral-200',
  },
];
