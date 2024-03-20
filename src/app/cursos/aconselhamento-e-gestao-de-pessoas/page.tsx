import { notFound } from 'next/navigation';
import CourseCurriculum from '../course-curriculum';
import { CourseFaculty } from '../course-faculty';
import {
  CourseFeature,
  CourseFeatureIcon,
  CourseFeatureTitle,
  CourseFeatureValue,
  CourseFeatures,
} from '../course-features';
import {
  CourseHero,
  CourseHeroAction,
  CourseHeroBackground,
  CourseHeroSubtitle,
  CourseHeroTitle,
} from '../course-hero';
import { CourseInfo, CourseInfoVideo } from '../course-info';
import {
  CourseLearnMore,
  CourseLearnMoreItem,
  CourseLearnMoreItems,
  CourseLearnMoreTitle,
} from '../course-learn-more';
import useCourse from '../course.hook';

export const metadata = {
  title: 'Aconselhamento e Gestão de Pessoas - Faculdade Teológica Betânia',
};

export default function Page() {
  const course = useCourse('aconselhamento-e-gestao-de-pessoas');
  if (!course) notFound();
  return (
    <main className="flex flex-col">
      <CourseHero>
        <CourseHeroBackground src={`/imagens/${course.id}/hero.jpg`} />
        <CourseHeroTitle>{course.title}</CourseHeroTitle>
        <CourseHeroSubtitle>{course.category}</CourseHeroSubtitle>
        <CourseHeroAction href="https://docs.google.com/forms/d/e/1FAIpQLSdQL625muJpl5pJqman_wsZGq5xl1RV5dLW-kd86tBT9KgpSQ/viewform">
          Inscrição
        </CourseHeroAction>
      </CourseHero>
      <CourseFeatures>
        <CourseFeature>
          <CourseFeatureIcon name="PanelBottom" />
          <CourseFeatureTitle>Modalidade</CourseFeatureTitle>
          <CourseFeatureValue>{course.modality}</CourseFeatureValue>
          <p className="text-sm">Próxima turma 15/08/2024</p>
        </CourseFeature>
        <CourseFeature>
          <CourseFeatureIcon name="CalendarDays" />
          <CourseFeatureTitle>Duração</CourseFeatureTitle>
          <CourseFeatureValue>{course.duration}</CourseFeatureValue>
        </CourseFeature>
        <CourseFeature>
          <CourseFeatureIcon name="Clock3" />
          <CourseFeatureTitle>Período</CourseFeatureTitle>
          <CourseFeatureValue>
            {course.period}&nbsp;(19h-22h30)
          </CourseFeatureValue>
          <CourseFeatureValue className="text-sm">
            quintas e sextas
          </CourseFeatureValue>
        </CourseFeature>
        <CourseFeature separator={false}>
          <CourseFeatureIcon name="DollarSign" />
          <CourseFeatureTitle>Valor</CourseFeatureTitle>
          <CourseFeatureValue>{course.price}*</CourseFeatureValue>
          <CourseFeatureValue className="text-sm">
            *Valor integral R$399,00, desconto de R$100,00 para pagamentos até o
            dia 10
          </CourseFeatureValue>
        </CourseFeature>
      </CourseFeatures>
      <CourseInfo>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
          <CourseInfoVideo
            source={`/videos/${course.id}.mp4`}
            className="w-full lg:w-[512px]"
          />
          <section className="flex flex-col gap-4 text-section text-primary">
            <p>
              Gerir pessoas é um dos maiores desafios, seja no ministério
              cristão ou na vida profissional. Contudo é também o segredo de
              sucesso em qualquer projeto. Pensando nisto, a FATEBE apresenta o
              curso que o tornará um especialista na arte da gestão e
              aconselhamento de pessoas. EXCELENTES PROFESSORES E PREÇO
              ACESSÍVEL!
            </p>
            <section>
              <h4 className="uppercase font-bold">Público-alvo</h4>
              <p>
                Líderes, gestores, pastores, educadores, conselheiros,
                empresários, teólogos e profissionais com interesse na área.
              </p>
            </section>
            <section>
              <h4 className="uppercase font-bold">Objetivo</h4>
              <p>
                Capacitar pessoas para uma atuação mais dinâmica, eficaz e
                preparada para a mediação de conflitos, liderança,
                aconselhamento e gestão de pessoas.
              </p>
            </section>
          </section>
        </div>
      </CourseInfo>
      <CourseCurriculum curriculum={course.curriculum} />
      <CourseLearnMore>
        <CourseLearnMoreTitle>Saiba Mais</CourseLearnMoreTitle>
        <CourseLearnMoreItems>
          <CourseLearnMoreItem
            link="https://docs.google.com/forms/d/e/1FAIpQLSdQL625muJpl5pJqman_wsZGq5xl1RV5dLW-kd86tBT9KgpSQ/viewform"
            className="bg-white hover:opacity-75 text-primary uppercase !font-extrabold rounded-lg transition"
          >
            Inscrição
          </CourseLearnMoreItem>
        </CourseLearnMoreItems>
      </CourseLearnMore>
      <CourseFaculty id={course.id} />
    </main>
  );
}
