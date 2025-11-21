import {
  CourseFeature,
  CourseFeatureIcon,
  CourseFeatureTitle,
  CourseFeatureValue,
  CourseFeatures,
} from '@app/cursos/course-features';
import {
  CourseHero,
  CourseHeroAction,
  CourseHeroBackground,
  CourseHeroSubtitle,
  CourseHeroTitle,
} from '@app/cursos/course-hero';
import { CourseLearnMore, CourseLearnMoreItem, CourseLearnMoreItems } from '@app/cursos/course-learn-more';

export default function Page() {
  return (
    <main className="flex flex-col">
      <CourseHero>
        <CourseHeroBackground src={'/imagens/vestibular/hero.jpg'} />
        <CourseHeroTitle>VESTIBULAR TEOLOGIA</CourseHeroTitle>
        <CourseHeroSubtitle>1º semestre / 2026</CourseHeroSubtitle>
        <CourseHeroAction href="https://docs.google.com/forms/d/e/1FAIpQLSdASgDpRrWpWfpUtgXt9dHXD7Hml3odt1fU-1lKck1tQdhMag/viewform">
          Inscrição
        </CourseHeroAction>
      </CourseHero>
      <CourseFeatures className="xl:grid-cols-3">
        <CourseFeature>
          <CourseFeatureIcon name="Pencil" />
          <CourseFeatureTitle>Exame</CourseFeatureTitle>
          <CourseFeatureValue>Uma redação, máximo 2 horas</CourseFeatureValue>
        </CourseFeature>
        <CourseFeature>
          <CourseFeatureIcon name="CalendarDays" />
          <CourseFeatureTitle>Data</CourseFeatureTitle>
          <CourseFeatureValue>Agendado</CourseFeatureValue>
        </CourseFeature>
        <CourseFeature separator={false}>
          <CourseFeatureIcon name="DollarSign" />
          <CourseFeatureTitle>Inscrição</CourseFeatureTitle>
          <CourseFeatureValue>R$ 30,00</CourseFeatureValue>
        </CourseFeature>
      </CourseFeatures>
      <CourseLearnMore className="bg-neutral-200">
        <CourseLearnMoreItems>
          <CourseLearnMoreItem
            link="https://docs.google.com/forms/d/e/1FAIpQLSdASgDpRrWpWfpUtgXt9dHXD7Hml3odt1fU-1lKck1tQdhMag/viewform"
            className="bg-secondary hover:opacity-75 uppercase !font-extrabold rounded-lg transition"
          >
            Inscrição
          </CourseLearnMoreItem>
          <CourseLearnMoreItem
            link="/documentos/teologia/manual-do-candidato.pdf"
            target="_blank"
            className="hover:bg-secondary"
          >
            Manual do Candidato
          </CourseLearnMoreItem>
          <CourseLearnMoreItem
            link="/documentos/teologia/calendario-academico.pdf"
            target="_blank"
            className="hover:bg-secondary"
          >
            Calendário Acadêmico
          </CourseLearnMoreItem>
          <CourseLearnMoreItem link="/cursos/teologia" className="hover:bg-secondary">
            Sobre o Curso
          </CourseLearnMoreItem>
        </CourseLearnMoreItems>
      </CourseLearnMore>
    </main>
  );
}
