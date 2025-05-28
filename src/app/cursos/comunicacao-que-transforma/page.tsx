import { Separator } from '@components/ui/separator';
import { capitalize } from '@utils/capitalize';
import Image from 'next/image';
import { getCourse } from 'src/providers/course.provider';
import { CourseFeature, CourseFeatureIcon, CourseFeatures, CourseFeatureTitle, CourseFeatureValue } from '../course-features';
import { CourseHero, CourseHeroAction, CourseHeroBackground, CourseHeroSubtitle, CourseHeroTitle } from '../course-hero';
import { CourseInfo, CourseInfoVideo } from '../course-info';
import {
  CourseLearnMore,
  CourseLearnMoreItem,
  CourseLearnMoreItemIcon,
  CourseLearnMoreItems,
  CourseLearnMoreItemTitle,
} from '../course-learn-more';

export const metadata = {
  title: 'Comunicação que transforma - Faculdade Teológica Betânia',
};

export default async function Page() {
  const {
    startDate,
    name,
    category,
    modality,
    duration,
    period,
    price,
    priceDisclaimer,
    classSchedule,
    weekDays,
    faculties: [faculty],
  } = await getCourse('comunicacao-que-transforma');

  return (
    <main className="flex flex-col">
      <CourseHero>
        <CourseHeroBackground src={`/imagens/comunicacao-que-transforma/hero.jpg`} />
        <CourseHeroTitle>{name}</CourseHeroTitle>
        <CourseHeroSubtitle>{category}</CourseHeroSubtitle>
        <div className="flex items-center gap-4">
          <CourseHeroAction href="https://forms.gle/gqa7rXb7Tsoz1mPN8">Inscrição</CourseHeroAction>
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
          <CourseFeatureValue>{weekDays}</CourseFeatureValue>
        </CourseFeature>
        <CourseFeature>
          <CourseFeatureIcon name="CircleDollarSign" />
          <CourseFeatureTitle>Valor</CourseFeatureTitle>
          <CourseFeatureValue>{price}</CourseFeatureValue>
          <CourseFeatureValue>{priceDisclaimer}</CourseFeatureValue>
        </CourseFeature>
        <CourseFeature separator={false}>
          <CourseFeatureIcon name="CirclePlay" />
          <CourseFeatureTitle>Início</CourseFeatureTitle>
          <CourseFeatureValue>{startDate}</CourseFeatureValue>
        </CourseFeature>
      </CourseFeatures>
      <CourseInfo>
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-start gap-8">
          <CourseInfoVideo source={`/videos/comunicacao-que-transforma.mp4`} className="lg:w-[384px]" />
          <div className="flex flex-col">
            <h3 className="font-bold uppercase text-primary">O que é o curso?</h3>
            <p className="text-primary">
              Trata-se de uma abordagem mais atual e muito interessante de elaboração e apresentação de pregações, denominada
              por Andy Stanley de “Comunicação que transforma”. Venha conhecer, pois estar atualizado é urgente do mundo da
              comunicação!
            </p>
          </div>
          <div className="text-primary">
            <h3 className="uppercase font-bold">Temas Abordados</h3>
            <ul>
              <li>&bull;&nbsp;Por que atualizar a forma de comunicar?</li>
              <li>&bull;&nbsp;Escolher o ponto da pregação</li>
              <li>&bull;&nbsp;Nada de esboço, vamos criar um mapa</li>
              <li>&bull;&nbsp;Internalizando a mensagem</li>
              <li>&bull;&nbsp;Envolvendo os ouvintes</li>
              <li>&bull;&nbsp;Encontrando a sua voz na pregação</li>
              <li>&bull;&nbsp;Laboratórios de prática.</li>
            </ul>
          </div>
        </div>
      </CourseInfo>
      <CourseLearnMore>
        <CourseLearnMoreItems>
          <CourseLearnMoreItem
            link="https://forms.gle/gqa7rXb7Tsoz1mPN8"
            className="bg-white hover:opacity-75 text-primary uppercase !font-extrabold rounded-lg transition"
          >
            <CourseLearnMoreItemIcon icon="ClipboardList" />
            <CourseLearnMoreItemTitle>Inscrição</CourseLearnMoreItemTitle>
          </CourseLearnMoreItem>
          <CourseLearnMoreItem link="http://moodle.faculdadebetania.com.br/">
            <CourseLearnMoreItemIcon icon="User" />
            <CourseLearnMoreItemTitle>Portal do Aluno</CourseLearnMoreItemTitle>
          </CourseLearnMoreItem>
        </CourseLearnMoreItems>
      </CourseLearnMore>
      <section className="container bg-primary flex flex-col gap-8" id="corpo-docente">
        <h1 className="uppercase text-5xl lg:text-7xl text-white font-bold">CORPO DOCENTE</h1>
        <section className="flex flex-col md:flex-row items-center gap-16">
          <Image
            src={faculty.photoURL}
            alt="docente"
            width={384}
            height={384}
            className="relative border-secondary border-2 border-solid rounded-full"
          />
          <section className="flex flex-col gap-4">
            <h3 className="uppercase font-bold text-secondary text-3xl md:text-4xl">Rogério Souza</h3>
            <Separator className="bg-secondary !m-0 opacity-25" />
            <p>
              Pastor e professor por quase 20 anos. Formado em Teologia e com Bacharel e licenciatura em Filosofia pela UFPR.
              Pós-graduado em Ciência da Religião. Diretor geral da Fatebe e professor das disciplinas de comunicação e
              homilética.
            </p>
          </section>
        </section>
      </section>
    </main>
  );
}
