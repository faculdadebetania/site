/* eslint-disable react-hooks/rules-of-hooks */
import { capitalize } from '@utils/capitalize';
import { getCourse } from 'src/providers/course.provider';
import { CourseFaculties } from '../course-faculty';
import { CourseFeature, CourseFeatureIcon, CourseFeatures, CourseFeatureTitle, CourseFeatureValue } from '../course-features';
import { CourseHero, CourseHeroAction, CourseHeroBackground, CourseHeroSubtitle, CourseHeroSubtitleCenter, CourseHeroSubtitleCenterTwo, CourseHeroTitleCenter } from '../course-hero';
import { CourseInfo } from '../course-info';
import {
  CourseLearnMore,
  CourseLearnMoreItem,
  CourseLearnMoreItemIcon,
  CourseLearnMoreItems,
  CourseLearnMoreItemTitle,
  CourseLearnMoreTitle,
} from '../course-learn-more';

export const metadata = {
  title: 'Inteligência Artificial Aplicada ao Ministério - Faculdade Teológica Betânia',
};

export default async function Page() {
  const {
    startDate,
    name,
    category,
    modality,
    duration,
    period,
    durationDisclaimer,
    price,
    priceDisclaimer,
    classSchedule,
    weekDays,
    curriculum,
    faculties,
  } = await getCourse('inteligencia-artificial-aplicada-ao-ministerio');

  return (
    <main className="flex flex-col">
      <CourseHero>
        <CourseHeroBackground src={`/imagens/inteligencia-artificial-aplicada-ao-ministerio/fundo-ia.png`} />
        <CourseHeroTitleCenter>Inteligência Artificial<br/>Aplicada ao Ministério</CourseHeroTitleCenter>
        <hr className="w-[700px] mx-auto border-t-1 border-white" />
        <CourseHeroSubtitleCenter>PARA PASTORES E LÍDERES</CourseHeroSubtitleCenter>
        <CourseHeroSubtitleCenterTwo>Como otimizar a gestão, transformar sermões gravados<br/>em aulas, apostilas, esboço de células, gerar relatórios,<br/>apresentações e muito mais em minutos?</CourseHeroSubtitleCenterTwo>
        <CourseHeroSubtitle>{category}</CourseHeroSubtitle>
        <div className="flex flex-col lg:flex-row items-center w-full gap-4">
          <div className="shrink-0 w-full lg:w-auto">
            <CourseHeroAction href="https://forms.gle/qNPd6KACMRSiKVyLA">
              Inscrição
            </CourseHeroAction>
          </div>
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
          <CourseFeatureValue className="text-sm">{durationDisclaimer}</CourseFeatureValue>
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
          <CourseFeatureValue className="text-sm">{priceDisclaimer}</CourseFeatureValue>
        </CourseFeature>
        <CourseFeature separator={false}>
          <CourseFeatureIcon name="CirclePlay" />
          <CourseFeatureTitle>Início</CourseFeatureTitle>
          <CourseFeatureValue>{startDate}</CourseFeatureValue>
        </CourseFeature>
      </CourseFeatures>
      <CourseInfo>
        <div className="grid grid-cols-1 lg:grid-cols-1 justify-center items-start gap-4">
          <h3 className="font-bold uppercase text-primary">O que é o curso?</h3>
          <p className="text-primary">
            A rotina do ministério consome muito do seu tempo com gestão, relatórios, burocracias e produção de materiais?<br/>
            A FATEBE quer te convidar para uma virada de chave na sua produtividade e liderança: O curso Inteligência Artificial Aplicada ao Ministério.
          </p>
          <div className="text-primary">
            <h3 className="uppercase font-bold">Imagine fazer tudo isso EM MINUTOS:</h3>
            <ul>
              <li>&bull;&nbsp;Transformar seus sermões gravados do domingo em aulas e apostilas de estudo.</li>
              <li>&bull;&nbsp;Em roteiros e esboços para as células e pequenos grupos com facilidade.</li>
              <li>&bull;&nbsp;Gerar relatórios e apresentações modernas e bonitas.</li>
              <li>&bull;&nbsp;Organizar e otimizar a gestão administrativa da igreja.</li>
              <li>&bull;&nbsp;E muito mais...</li>
              <li><br /></li>
              <li>
                Tudo com foco na praticidade e ética ministerial!<br/>
                Use a inteligência artificial para potencializar o seu ministério e investir o seu tempo no que realmente só você pode fazer!
              </li>
            </ul>
          </div>
        </div>
      </CourseInfo>
      <CourseLearnMore>
        <CourseLearnMoreTitle>Saiba Mais</CourseLearnMoreTitle>
        <CourseLearnMoreItems>
          <CourseLearnMoreItem
            link="https://forms.gle/qNPd6KACMRSiKVyLA"
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
