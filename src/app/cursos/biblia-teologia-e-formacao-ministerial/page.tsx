import { CourseFaculties } from '@app/cursos/course-faculty';
import {
  CourseFeature,
  CourseFeatureIcon,
  CourseFeatures,
  CourseFeatureTitle,
  CourseFeatureValue,
} from '@app/cursos/course-features';
import {
  CourseHero,
  CourseHeroAction,
  CourseHeroBackground,
  CourseHeroSubtitle,
  CourseHeroTitle,
} from '@app/cursos/course-hero';
import { CourseInfo } from '@app/cursos/course-info';
import {
  CourseLearnMore,
  CourseLearnMoreItem,
  CourseLearnMoreItemIcon,
  CourseLearnMoreItems,
  CourseLearnMoreItemTitle,
  CourseLearnMoreTitle,
} from '@app/cursos/course-learn-more';
import { capitalize } from '@utils/capitalize';
import { getCourse } from 'src/providers/course.provider';

export const metadata = {
  title: 'Teologia e Formação Ministerial - Faculdade Teológica Betânia',
};

export default async function Page() {
  const { startDate, name, category, modality, duration, period, price, priceDisclaimer, classSchedule, weekDays, faculties } =
    await getCourse('biblia-teologia-e-formacao-ministerial');

  return (
    <main className="flex flex-col">
      <CourseHero>
        <CourseHeroBackground src={'/imagens/biblia-teologia-e-formacao-ministerial/hero.jpg'} />
        <CourseHeroTitle>{name}</CourseHeroTitle>
        <CourseHeroSubtitle>{category}</CourseHeroSubtitle>
        <CourseHeroAction href="https://forms.gle/f7CxDuhSmiwDyGrr6">Inscrição</CourseHeroAction>
      </CourseHero>
      <CourseFeatures>
        <CourseFeature>
          <CourseFeatureIcon name="PanelBottom" />
          <CourseFeatureTitle>Modalidade</CourseFeatureTitle>
          <CourseFeatureValue>{capitalize(modality)}</CourseFeatureValue>
        </CourseFeature>
        <CourseFeature>
          <CourseFeatureIcon name="CalendarDays" />
          <CourseFeatureTitle>Duração</CourseFeatureTitle>
          <CourseFeatureValue>{duration}</CourseFeatureValue>
        </CourseFeature>
        <CourseFeature>
          <CourseFeatureIcon name="Clock3" />
          <CourseFeatureTitle>Período</CourseFeatureTitle>
          <CourseFeatureValue>
            {period}&nbsp;({classSchedule})
          </CourseFeatureValue>
          <CourseFeatureValue className="text-sm">{weekDays}</CourseFeatureValue>
        </CourseFeature>
        <CourseFeature>
          <CourseFeatureIcon name="CircleDollarSign" />
          <CourseFeatureTitle>Valor</CourseFeatureTitle>
          <CourseFeatureValue>{price}</CourseFeatureValue>
          {priceDisclaimer && <CourseFeatureValue className="text-sm">{priceDisclaimer}</CourseFeatureValue>}
        </CourseFeature>
        <CourseFeature separator={false}>
          <CourseFeatureIcon name="CirclePlay" />
          <CourseFeatureTitle>Início</CourseFeatureTitle>
          <CourseFeatureValue>{startDate}</CourseFeatureValue>
        </CourseFeature>
      </CourseFeatures>
      <CourseInfo>
        <div className="space-y-4">
          <p className="text-primary">
            A igreja de hoje enfrenta desafios cada vez mais complexos: secularização, superficialidade doutrinária, confusão
            teológica e lideranças despreparadas. Diante desse cenário, uma formação teológica consistente é essencial para quem
            deseja servir com clareza, autoridade bíblica e relevância.
          </p>
          <p className="text-primary">
            A Pós-Graduação em Teologia e Formação Ministerial da FATEBE foi desenvolvida para formar líderes cristãos
            preparados para atuar com discernimento, competência e sensibilidade pastoral em um mundo que exige respostas
            teologicamente profundas e espiritualmente autênticas. Trata-se de um curso completo, com foco acadêmico e
            vocacional, pensado para quem leva a sério o chamado ao ministério.
          </p>
          <p className="text-primary">
            Esse programa é composto por dois eixos integrados: a&nbsp;
            <span className="font-bold">Pós-Graduação em Teologia</span>&nbsp;e a&nbsp;
            <span className="font-bold">Pós-Graduação em Ministério</span>&nbsp;Cristão, permitindo ao aluno uma imersão tanto
            na reflexão teológica quanto na prática ministerial contemporânea.
          </p>
        </div>
      </CourseInfo>
      <CourseLearnMore>
        <CourseLearnMoreTitle>Saiba Mais</CourseLearnMoreTitle>
        <CourseLearnMoreItems>
          <CourseLearnMoreItem
            link="https://docs.google.com/forms/d/e/1FAIpQLSdASgDpRrWpWfpUtgXt9dHXD7Hml3odt1fU-1lKck1tQdhMag/viewform"
            className="bg-white hover:opacity-75 text-primary uppercase !font-extrabold rounded-lg transition"
          >
            <CourseLearnMoreItemIcon icon="ClipboardList" />
            <CourseLearnMoreItemTitle>Inscrição</CourseLearnMoreItemTitle>
          </CourseLearnMoreItem>
        </CourseLearnMoreItems>
      </CourseLearnMore>
      <CourseFaculties {...{ faculties }} />
    </main>
  );
}
