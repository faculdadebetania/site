import { Separator } from '@components/ui/separator';
import Image from 'next/image';
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
  title: 'Capelania - Faculdade Teológica Betânia',
};

export default function Page() {
  const course = useCourse('capelania');
  return (
    <main className="flex flex-col">
      <CourseHero>
        <CourseHeroBackground src={`/imagens/${course.id}/hero.jpg`} />
        <CourseHeroTitle>{course.title}</CourseHeroTitle>
        <CourseHeroSubtitle>{course.category}</CourseHeroSubtitle>
        <div className="flex items-center gap-4">
          <CourseHeroAction href="https://forms.gle/jK6FMYTqfamkLzXk8">
            Inscrição
          </CourseHeroAction>
          <CourseHeroAction
            href="http://moodle.faculdadebetania.com.br/"
            className="shadow-none bg-primary hover:bg-white border-solid border-[1px] border-white text-white hover:text-primary"
          >
            Portal do Aluno
          </CourseHeroAction>
        </div>
      </CourseHero>
      <CourseFeatures>
        <CourseFeature>
          <CourseFeatureIcon name="PanelBottom" />
          <CourseFeatureTitle>Modalidade</CourseFeatureTitle>
          <CourseFeatureValue>{course.modality}</CourseFeatureValue>
          <p className="text-sm">Previsão de início 12/08/2024</p>
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
          <CourseFeatureValue>12 a 16 de agosto</CourseFeatureValue>
        </CourseFeature>
        <CourseFeature separator={false}>
          <CourseFeatureIcon name="DollarSign" />
          <CourseFeatureTitle>Valor</CourseFeatureTitle>
          <CourseFeatureValue>{course.price}*</CourseFeatureValue>
          <CourseFeatureValue className="text-sm">
            *Inclui certificado digital/credential
          </CourseFeatureValue>
        </CourseFeature>
      </CourseFeatures>
      <CourseInfo>
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-start gap-8">
          <CourseInfoVideo
            source={`/videos/${course.id}.mp4`}
            className="lg:w-[384px]"
          />
          <div className="flex flex-col">
            <h3 className="font-bold uppercase text-primary">
              O que é o curso?
            </h3>
            <p className="text-primary">
              O curso de Capelania tem como objetivo principal fomentar,
              treinar, equipar de forma prática o exercício da capelania em seus
              diversos contextos de atuação, de maneira que a assistência
              religiosa seja assertiva e eficaz.
            </p>
          </div>
          <div className="text-primary">
            <h3 className="uppercase font-bold">Temas Abordados</h3>
            <ul>
              <li>
                &bull;&nbsp;Conceito e desenvolvimento histórico da Capelania
              </li>
              <li>&bull;&nbsp;O que é e o que não é capelania</li>
              <li>&bull;&nbsp;Os contextos de atuação da Capelania</li>
              <li>
                &bull;&nbsp;Diferenciação da Capelania Voluntária e Capelania
                Profissional
              </li>
              <li>&bull;&nbsp;Capelania Escolar e seus desafios de atuação</li>
              <li>&bull;&nbsp;Capelania Prisional e suas particularidades</li>
              <li>&bull;&nbsp;Os desafios da Capelania empresarial</li>
              <li>
                &bull;&nbsp;Capelania Hospitalar de forma prática e assertiva.
                (Assepsia, Abordagens, Visitação em UTI, Etc)
              </li>
              <li>&bull;&nbsp;Processos do Luto</li>
            </ul>
          </div>
        </div>
      </CourseInfo>
      <CourseLearnMore>
        <CourseLearnMoreTitle>Saiba Mais</CourseLearnMoreTitle>
        <CourseLearnMoreItems>
          <CourseLearnMoreItem
            link="https://forms.gle/jK6FMYTqfamkLzXk8"
            className="bg-white hover:opacity-75 text-primary uppercase !font-extrabold rounded-lg transition"
          >
            Inscrição
          </CourseLearnMoreItem>
          <CourseLearnMoreItem
            link="http://moodle.faculdadebetania.com.br/"
            icon="User"
          >
            Portal do Aluno
          </CourseLearnMoreItem>
        </CourseLearnMoreItems>
      </CourseLearnMore>
      <section
        className="container bg-primary flex flex-col gap-8"
        id="corpo-docente"
      >
        <h1 className="uppercase text-5xl lg:text-7xl text-white font-bold">
          CORPO DOCENTE
        </h1>
        <section className="flex items-center gap-16">
          <Image
            src="/imagens/corpo-docente/capelania.png"
            alt="docente"
            width={384}
            height={384}
            className="relative border-secondary border-2 border-solid rounded-full"
          />
          <section className="flex flex-col gap-4">
            <h3 className="uppercase font-bold text-secondary text-4xl">
              Adriano Cruz
            </h3>
            <Separator className="bg-secondary !m-0 opacity-25" />
            <p>
              Escritor do livro Diário do Capelão, capelão do projeto Valores em
              Construção, fundador do projeto Loly e o Pequeno Marruquinho,
              professor, radialista, palestrante, bacharel em Teologia,
              pós-graduado em Gestão de Pessoas, especialista em Marketing e
              Comunicação e pós-graduado em Psicologia.
            </p>
            <p>
              Atualmente atende 34 escolas públicas na região de Palmeira- PR,
              algo em torno de 700 professores, 34 diretores e mais de 10 mil
              alunos. Pela Transmundial do Brasil é responsável pela implantação
              e treinamento de equipes de capelania escolar em várias cidades no
              Brasil e America Latina.
            </p>
          </section>
        </section>
      </section>
    </main>
  );
}
