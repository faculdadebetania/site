import { Separator } from '@components/separator';
import { notFound } from 'next/navigation';
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
  title: 'Teologia - Faculdade Teológica Betânia',
};

export default function Page() {
  const course = useCourse('teologia');
  if (!course) notFound();
  return (
    <main className="flex flex-col">
      <CourseHero>
        <CourseHeroBackground src={'/imagens/teologia/hero.jpg'} />
        <CourseHeroTitle>{course.title}</CourseHeroTitle>
        <CourseHeroSubtitle>{course.category}</CourseHeroSubtitle>
        <CourseHeroAction href="https://docs.google.com/forms/d/e/1FAIpQLSdASgDpRrWpWfpUtgXt9dHXD7Hml3odt1fU-1lKck1tQdhMag/viewform">
          Inscrição
        </CourseHeroAction>
      </CourseHero>
      <CourseFeatures>
        <CourseFeature>
          <CourseFeatureIcon name="PanelBottom" />
          <CourseFeatureTitle>Modalidade</CourseFeatureTitle>
          <CourseFeatureValue>{course.modality}</CourseFeatureValue>
        </CourseFeature>
        <CourseFeature>
          <CourseFeatureIcon name="CalendarDays" />
          <CourseFeatureTitle>Duração</CourseFeatureTitle>
          <CourseFeatureValue>{course.duration}</CourseFeatureValue>
          <CourseFeatureValue className="text-sm">
            (7 períodos)
          </CourseFeatureValue>
        </CourseFeature>
        <CourseFeature>
          <CourseFeatureIcon name="Clock3" />
          <CourseFeatureTitle>Período</CourseFeatureTitle>
          <CourseFeatureValue>
            {course.period}&nbsp;(19h-22h30)
          </CourseFeatureValue>
          <CourseFeatureValue className="text-sm">
            seg., ter., qui. e sexta-feira
          </CourseFeatureValue>
        </CourseFeature>
        <CourseFeature separator={false}>
          <CourseFeatureIcon name="DollarSign" />
          <CourseFeatureTitle>Valor</CourseFeatureTitle>
          <CourseFeatureValue>{course.price}*</CourseFeatureValue>
          <CourseFeatureValue className="text-sm">
            *Valor integral R$499,00, desconto de R$100,00 para pagamentos até o
            dia 10
          </CourseFeatureValue>
        </CourseFeature>
      </CourseFeatures>
      <CourseInfo>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
          <CourseInfoVideo source="/videos/teologia.mp4" className="sm" />
          <p className="text-primary">
            A Fatebe é uma instituição séria, interdenominacional, filiada a
            Missão Evangélica Betânia, que há mais de 70 anos atua na formação
            teológica e ministerial e enfatiza, além de um excelente
            conhecimento bíblico e teológico, também a formação espiritual e
            prática. Por isso, somos a faculdade com maior nota ENADE de
            Teologia entre as protestantes do Sul do país e a segunda maior nota
            do Brasil, prezando sempre por uma teologia bíblica e ministerial.
          </p>
          <Separator className="h-[1px] w-full my-0 lg:h-auto lg:self-stretch lg:w-[2px]" />
          <p className="text-primary">
            Nosso curso é presencial, para você que gosta de estar em sala de
            aula, convivendo e interagindo diretamente com os professores e
            colegas, assim como Jesus formou seus discípulos. Corpo docente é
            altamente capacitado, formado em sua maioria por mestres e doutores
            na área, todos engajados na prática do ministério e com ampla
            experiência.
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
            Inscrição
          </CourseLearnMoreItem>
          <CourseLearnMoreItem link="/vestibular" icon="GraduationCap">
            Vestibular
          </CourseLearnMoreItem>
          <CourseLearnMoreItem
            link="/documentos/teologia/matriz-curricular.pdf"
            icon="List"
          >
            Matriz Curricular
          </CourseLearnMoreItem>
          <CourseLearnMoreItem link="/republica-estudantil" icon="Home">
            República Estudantil
          </CourseLearnMoreItem>
        </CourseLearnMoreItems>
      </CourseLearnMore>
      <CourseFaculty id={course.id} />
    </main>
  );
}
