import { CourseFaculties } from '@app/cursos/course-faculty';
import {
  CourseFeature,
  CourseFeatureIcon,
  CourseFeatures,
  CourseFeatureTitle,
  CourseFeatureValue,
} from '@app/cursos/course-features';
import {
  CourseFeedback,
  CourseFeedbackBubble,
  CourseFeedbackHeader,
  CourseFeedbacks,
  CourseFeedbackText,
} from '@app/cursos/course-feedback';
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
import Image from 'next/image';
import { getCourse } from 'src/providers/course.provider';
import CourseCurriculum from '../course-curriculum';

export const metadata = {
  title: 'Bíblia, Teologia e Formação Ministerial - Faculdade Teológica Betânia',
};

export default async function Page() {
  const { startDate, name, category, modality, duration, period, durationDisclaimer, price, priceDisclaimer, faculties, curriculum } =
    await getCourse('biblia-teologia-e-formacao-ministerial');

  return (
    <main className="flex flex-col">
      <CourseHero>
        <CourseHeroBackground src={'/imagens/biblia-teologia-e-formacao-ministerial/hero.jpg'} />
        <CourseHeroTitle>{name}</CourseHeroTitle>
        <CourseHeroSubtitle>{category}</CourseHeroSubtitle>
        <div className="shrink-0 w-full lg:w-auto">
          <CourseHeroAction href="https://forms.gle/g2LLrFP9aCyagYVc9">Inscrição</CourseHeroAction>
        </div>
        <div className="bg-[#080f1c] rounded-[24px] p-4 w-full max-w-[380px] lg:ml-auto">
          <span className="text-white font-bold text-lg block text-center">
            Parceria:
          </span>
          <div className="flex items-end justify-center gap-6">
            <div className="h-[45px] flex items-end">
              <Image
                src={`/imagens/logo.png`}
                alt="Fatebe"
                width={200}
                height={50}
                className="object-contain h-full w-auto"
              />
            </div>
            <div className="h-[40px] flex items-end">
              <Image
                src={`/imagens/unise-logo-branca-removebg-preview.png`}
                alt="Unise"
                width={100}
                height={30}
                className="object-contain h-full w-auto"
              />
            </div>
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
          {durationDisclaimer && <CourseFeatureValue className="text-sm">{durationDisclaimer}</CourseFeatureValue>}
        </CourseFeature>
        <CourseFeature>
          <CourseFeatureIcon name="Clock3" />
          <CourseFeatureTitle>Período</CourseFeatureTitle>
          <CourseFeatureValue>
            {period}
          </CourseFeatureValue>
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
      <CourseCurriculum {...{ curriculum }} />
      <CourseFeedbacks>
        <CourseFeedback>
          <CourseFeedbackHeader
            image="/imagens/biblia-teologia-e-formacao-ministerial/foto-gabriel.jpeg"
            name="Gabriel Silva"
            subtitle="Aluno da Pós em Bíblia, Teologia e Formação Ministerial"
          />

          <CourseFeedbackBubble>
            <CourseFeedbackText>
              "Minha experiência no curso tem sido muito boa. 
              O site é bem intuitivo e as aulas ao vivo são um diferencial. 
              Fui surpreendido pela <strong>seriedade da instituição</strong> e pela <strong>dedicação dos professores</strong>, 
              que demonstram cuidado não apenas em transmitir conhecimento teológico/bíblico, 
              mas também em contribuir para o nossa transformação pessoal e avanço da nossa vida cristã."
            </CourseFeedbackText>
          </CourseFeedbackBubble>
        </CourseFeedback>

        <CourseFeedback>
          <CourseFeedbackHeader
            image="/imagens/biblia-teologia-e-formacao-ministerial/foto-jose.jpeg"
            name="José Magagule"
            subtitle="Aluno da Pós em Bíblia, Teologia e Formação Ministerial"
          />

          <CourseFeedbackBubble>
            <CourseFeedbackText>
              "Fazer este curso tem sido uma boa experiência. As aulas e a colocação dos textos facilitam muito para que eu possa estudar no tempo que estou disponível. Os vídeos, por serem curtos, ajudam a manter a atenção e também para que eu consiga assistir nos tempos livres. Até aqui estou feliz por fazer parte deste curso."
            </CourseFeedbackText>
          </CourseFeedbackBubble>
        </CourseFeedback>

        <CourseFeedback>
          <CourseFeedbackHeader
            image="/imagens/biblia-teologia-e-formacao-ministerial/foto-james.jpeg"
            name="JAMES"
            subtitle="Aluno da Pós em Bíblia, Teologia e Formação Ministerial"
          />

          <CourseFeedbackBubble>
            <CourseFeedbackText>
              "Tem sido uma belíssima experiência didática, mesmo com a correria do dia e da semana, os módulos bem construídos as vídeo aulas apostila intuitiva a plataforma muito boa! Parabéns a instituição a dedicação com os alunos para o crescimento!"
            </CourseFeedbackText>
          </CourseFeedbackBubble>
        </CourseFeedback>
        
      </CourseFeedbacks>
      <CourseLearnMore>
        <CourseLearnMoreTitle>Saiba Mais</CourseLearnMoreTitle>
        <CourseLearnMoreItems>
          <CourseLearnMoreItem
            link="https://forms.gle/g2LLrFP9aCyagYVc9"
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
