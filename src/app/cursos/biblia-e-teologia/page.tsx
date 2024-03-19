import { Separator } from '@components/separator';
import { notFound } from 'next/navigation';
import CourseCurriculum from '../course-curriculum';
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
import { CourseInfo } from '../course-info';
import {
  CourseLearnMore,
  CourseLearnMoreItem,
  CourseLearnMoreItems,
  CourseLearnMoreTitle,
} from '../course-learn-more';
import useCourse from '../course.hook';

export const metadata = {
  title: 'Bíblia e Teologia - Faculdade Teológica Betânia',
};

export default function Page() {
  const course = useCourse('biblia-e-teologia');
  if (!course) notFound();
  return (
    <main className="flex flex-col">
      <CourseHero>
        <CourseHeroBackground src={`/imagens/${course.id}/hero.jpg`} />
        <CourseHeroTitle>{course.title}</CourseHeroTitle>
        <CourseHeroSubtitle>{course.category}</CourseHeroSubtitle>
        <CourseHeroAction href="https://forms.gle/QZW2Y1tETB1pZsY49">
          Inscrição
        </CourseHeroAction>
      </CourseHero>
      <CourseFeatures>
        <CourseFeature>
          <CourseFeatureIcon name="panel-bottom" />
          <CourseFeatureTitle>Modalidade</CourseFeatureTitle>
          <CourseFeatureValue>{course.modality}</CourseFeatureValue>
          <p className="text-sm">Próxima turma 18/03/2024</p>
        </CourseFeature>
        <CourseFeature>
          <CourseFeatureIcon name="calendar-days" />
          <CourseFeatureTitle>Duração</CourseFeatureTitle>
          <CourseFeatureValue>{course.duration}</CourseFeatureValue>
        </CourseFeature>
        <CourseFeature>
          <CourseFeatureIcon name="clock-3" />
          <CourseFeatureTitle>Período</CourseFeatureTitle>
          <CourseFeatureValue>
            {course.period}&nbsp;(19h-22h30)
          </CourseFeatureValue>
          <CourseFeatureValue className="text-sm">
            segundas e terças
          </CourseFeatureValue>
        </CourseFeature>
        <CourseFeature separator={false}>
          <CourseFeatureIcon name="dollar-sign" />
          <CourseFeatureTitle>Valor</CourseFeatureTitle>
          <CourseFeatureValue>{course.price}*</CourseFeatureValue>
          <CourseFeatureValue className="text-sm">
            *Valor integral R$399,00, desconto de R$100,00 para pagamentos até o
            dia 10
          </CourseFeatureValue>
        </CourseFeature>
      </CourseFeatures>
      <CourseInfo>
        <div className="flex flex-col justify-center items-center gap-8 text-primary">
          <div className="gap-8">
            <section className="flex flex-col gap-4">
              <p>
                A Bíblia é o livro mais importante da história da humanidade. É
                a fonte de inspiração de milhões de pessoas em todo o mundo, e
                seu estudo é essencial para quem deseja aprofundar sua fé,
                conhecer mais a Deus e ajudar pessoas.
              </p>
              <p>
                A pós-graduação em Bíblia e Teologia da Fatebe é a oportunidade
                perfeita para você aprofundar seus conhecimentos sobre a Bíblia
                e a teologia cristã. O curso oferece uma formação abrangente,
                que aborda os principais aspectos da Bíblia, desde sua história
                e contexto até sua teologia e mensagem.
              </p>
            </section>
          </div>
          <Separator orientation="horizontal" className="!my-0" />
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <div className="flex flex-col gap-2">
              <b>OS ALUNOS DO CURSO DESENVOLVERÃO AS SEGUINTES HABILIDADES:</b>
              <ul className="list-disc">
                <li>
                  Capacidade de interpretar a Bíblia de forma crítica e
                  reflexiva
                </li>
                <li>Conhecimento dos principais temas da teologia cristã</li>
                <li>
                  Habilidade de aplicar os ensinamentos bíblicos à vida pessoal
                  e profissional
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <b>O CURSO É IDEAL PARA:</b>
              <ul className="list-disc">
                <li>
                  Graduados das diversas áreas que desejam aprofundar seu
                  conhecimento bíblico e teológico para servir melhor nos
                  ministérios da igreja local
                </li>
                <li>
                  Pastores, obreiros e líderes religiosos sem formação teológica
                </li>
                <li>
                  Pessoas interessadas no estudo da Bíblia e da teologia cristã
                </li>
              </ul>
            </div>
          </section>
        </div>
      </CourseInfo>
      <CourseCurriculum curriculum={course.curriculum} />
      <CourseLearnMore className="bg-white">
        <CourseLearnMoreTitle className="text-primary">
          Saiba Mais
        </CourseLearnMoreTitle>
        <CourseLearnMoreItems>
          <CourseLearnMoreItem
            link="https://forms.gle/QZW2Y1tETB1pZsY49"
            className="hover:bg-primary hover:opacity-75 hover:text-white uppercase !font-extrabold rounded-lg transition"
          >
            Inscrição
          </CourseLearnMoreItem>
        </CourseLearnMoreItems>
      </CourseLearnMore>
    </main>
  );
}
