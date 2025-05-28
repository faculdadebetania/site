import { Separator } from '@components/ui/separator';
import { capitalize } from '@utils/capitalize';
import { MdHomeWork } from 'react-icons/md';
import { getCourse } from 'src/providers/course.provider';
import { CourseFaculties } from '../course-faculty';
import { CourseFeature, CourseFeatureIcon, CourseFeatures, CourseFeatureTitle, CourseFeatureValue } from '../course-features';
import { CourseHero, CourseHeroAction, CourseHeroBackground, CourseHeroSubtitle, CourseHeroTitle } from '../course-hero';
import { CourseInfo, CourseInfoVideo } from '../course-info';
import {
  CourseLearnMore,
  CourseLearnMoreItem,
  CourseLearnMoreItemIcon,
  CourseLearnMoreItems,
  CourseLearnMoreItemTitle,
  CourseLearnMoreTitle,
} from '../course-learn-more';

export const metadata = {
  title: 'Teologia - Faculdade Teológica Betânia',
};

export default async function Page() {
  const { startDate, name, category, modality, duration, period, price, priceDisclaimer, classSchedule, weekDays, faculties } =
    await getCourse('teologia');

  return (
    <main className="flex flex-col">
      <CourseHero>
        <CourseHeroBackground src={'/imagens/teologia/hero.jpg'} />
        <CourseHeroTitle>{name}</CourseHeroTitle>
        <CourseHeroSubtitle>{category}</CourseHeroSubtitle>
        <CourseHeroAction href="https://docs.google.com/forms/d/e/1FAIpQLSdASgDpRrWpWfpUtgXt9dHXD7Hml3odt1fU-1lKck1tQdhMag/viewform">
          Inscrição
        </CourseHeroAction>
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
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
          <CourseInfoVideo source="/videos/teologia.mp4" className="sm" />
          <p className="text-primary">
            A Fatebe é uma instituição séria, interdenominacional, filiada a Missão Evangélica Betânia, que há mais de 70 anos
            atua na formação teológica e ministerial e enfatiza, além de um excelente conhecimento bíblico e teológico, também a
            formação espiritual e prática. Por isso, somos a faculdade com maior nota ENADE de Teologia entre as protestantes do
            Sul do país e a segunda maior nota do Brasil, prezando sempre por uma teologia bíblica e ministerial.
          </p>
          <Separator className="h-[1px] w-full my-0 lg:h-auto lg:self-stretch lg:w-[2px]" />
          <p className="text-primary">
            Nosso curso é presencial, para você que gosta de estar em sala de aula, convivendo e interagindo diretamente com os
            professores e colegas, assim como Jesus formou seus discípulos. Corpo docente é altamente capacitado, formado em sua
            maioria por mestres e doutores na área, todos engajados na prática do ministério e com ampla experiência.
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
          <CourseLearnMoreItem link="/vestibular">
            <CourseLearnMoreItemIcon icon="GraduationCap" />
            <CourseLearnMoreItemTitle>Vestibular</CourseLearnMoreItemTitle>
          </CourseLearnMoreItem>
          <CourseLearnMoreItem link="/documentos/teologia/matriz-curricular.pdf">
            <CourseLearnMoreItemIcon icon="List" />
            <CourseLearnMoreItemTitle>Matriz Curricular</CourseLearnMoreItemTitle>
          </CourseLearnMoreItem>
          <CourseLearnMoreItem link="/republica-estudantil">
            <CourseLearnMoreItemIcon>
              <MdHomeWork />
            </CourseLearnMoreItemIcon>
            <CourseLearnMoreItemTitle>República Estudantil</CourseLearnMoreItemTitle>
          </CourseLearnMoreItem>
          <CourseLearnMoreItem link="/documentos/teologia/manual-do-aluno.pdf">
            <CourseLearnMoreItemIcon icon="ScrollText" />
            <CourseLearnMoreItemTitle>Manual do Aluno</CourseLearnMoreItemTitle>
          </CourseLearnMoreItem>
        </CourseLearnMoreItems>
      </CourseLearnMore>
      <CourseFaculties {...{ faculties }} />
    </main>
  );
}
