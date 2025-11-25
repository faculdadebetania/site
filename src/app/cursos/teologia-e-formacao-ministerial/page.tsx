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
    await getCourse('teologia-e-formacao-ministerial');

  return (
    <main className="flex flex-col">
      <CourseHero>
        <CourseHeroBackground src={'/imagens/teologia-e-formacao-ministerial/hero.jpg'} />
        <CourseHeroTitle>{name}</CourseHeroTitle>
        <CourseHeroSubtitle>{category}</CourseHeroSubtitle>
        <div className="flex justify-between items-center gap-4">
          <CourseHeroAction href="https://forms.gle/mMQGhhjee42YpmHd8">Inscrição</CourseHeroAction>
        </div>
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
            O Curso de Bíblia, Teologia e Formação Ministerial oferece uma formação sólida, acessível e academicamente
            reconhecida para quem deseja crescer na fé, servir melhor na igreja local ou simplesmente aprofundar sua caminhada
            com Deus. A FATEBE tem o compromisso de unir excelência teológica e prática ministerial, com o respaldo de uma das
            melhores avaliações do país no ENADE/MEC.
          </p>
          <p className="text-primary">
            Ao longo do curso, você terá acesso a disciplinas que abrangem toda a estrutura das Escrituras: Antigo e Novo
            Testamento, Evangelhos, Epístolas, Teologia Sistemática, História da Igreja, Ética Cristã, Homilética, Eclesiologia
            e muito mais. Além disso, temas essenciais como espiritualidade, liderança cristã e aconselhamento pastoral são
            tratados com profundidade e sensibilidade prática.
          </p>
          <ul className="text-primary list-disc pl-4">
            <li>Certificação de Extensão Universitária válida em todo o território nacional</li>
            <li>Acesso a ebooks exclusivos</li>
            <li>Acompanhamento com tutores e professores</li>
            <li>Suporte ao aluno em grupos de estudo online</li>
          </ul>
        </div>
        <section className="space-y-4">
          <h1 className="font-bold text-primary text-xl lg:text-2xl">O QUE É UM CURSO DE EXTENSÃO?</h1>
          <p className="text-primary">
            Um curso de extensão é uma modalidade de formação que complementa a formação acadêmica e profissional ao oferecer
            conhecimentos e habilidades específicas em áreas de interesse. Diferente dos cursos livres, estes só podem ser
            ministrados e certificados por instituições credenciadas pelo Ministério da Educação (MEC), garantindo maior
            credibilidade e respaldo à formação.
          </p>
        </section>
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
