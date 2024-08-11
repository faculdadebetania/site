/* eslint-disable @next/next/no-img-element */
import {
  CourseFeature,
  CourseFeatureIcon,
  CourseFeatureTitle,
  CourseFeatureValue,
  CourseFeatures,
} from '@app/cursos/course-features';
import {
  CourseHero,
  CourseHeroAction,
  CourseHeroBackground,
  CourseHeroTitle,
} from '@app/cursos/course-hero';
import { CourseInfo } from '@app/cursos/course-info';
import {
  CourseLearnMore,
  CourseLearnMoreItem,
  CourseLearnMoreItems,
  CourseLearnMoreTitle,
} from '@app/cursos/course-learn-more';
import RepublicPhotos from './republic-photos';

export const metadata = {
  title: 'República Estudantil - Faculdade Teológica Betânia',
};

export default function Page() {
  return (
    <main className="flex flex-col">
      <CourseHero>
        <CourseHeroBackground src={'/imagens/republica-estudantil/hero.jpg'} />
        <CourseHeroTitle>República Estudantil</CourseHeroTitle>
        <CourseHeroAction href="https://docs.google.com/forms/d/e/1FAIpQLSdASgDpRrWpWfpUtgXt9dHXD7Hml3odt1fU-1lKck1tQdhMag/viewform">
          Inscrição
        </CourseHeroAction>
      </CourseHero>
      <CourseFeatures className="xl:grid-cols-3">
        <CourseFeature>
          <CourseFeatureIcon name="Award" />
          <CourseFeatureTitle>Reconhecido</CourseFeatureTitle>
          <CourseFeatureValue>
            Infraestrutura avaliada e reconhecida pelo MEC
          </CourseFeatureValue>
        </CourseFeature>
        <CourseFeature>
          <CourseFeatureIcon name="MapPin" />
          <CourseFeatureTitle>Localização</CourseFeatureTitle>
          <CourseFeatureValue>
            Av. Iguaçu, 1700, Curitiba - PR
          </CourseFeatureValue>
        </CourseFeature>
        <CourseFeature separator={false}>
          <CourseFeatureIcon name="DollarSign" />
          <CourseFeatureTitle>Valor</CourseFeatureTitle>
          <CourseFeatureValue>R$ 850,00 / mês</CourseFeatureValue>
          <CourseFeatureValue className="text-sm">
            Incluso custos de moradia e do curso
          </CourseFeatureValue>
        </CourseFeature>
      </CourseFeatures>
      <CourseInfo>
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl lg:text-7xl text-primary uppercase font-extrabold">
            INFORMAÇÕES
          </h1>
          <section className="flex flex-col gap-4">
            <h3 className="text-2xl text-primary border-b-secondary border-b-2 border-solid w-64 self-start">
              Estrutura
            </h3>
            <p className="text-primary">
              Localizada no coração de Curitiba, em um local estratégico e de
              fácil acesso. Edifício de 6 andares com elevador, auditório, salas
              de aula confortáveis e equipadas com multimídia, biblioteca, sala
              de informática, sala de estudo, cantina, entre outros.
            </p>
          </section>
          <section className="flex flex-col gap-4">
            <h3 className="text-2xl text-primary border-b-secondary border-b-2 border-solid w-64 self-start">
              Flexibilidade
            </h3>
            <p className="text-primary">
              Pensando nos alunos solteiros e que moram fora de Curitiba, a
              faculdade oferece a opção de moradia e estudo. O curso noturno
              possibilita ao aluno manter atividades profissionais e
              ministeriais durante o dia.
            </p>
          </section>
          <section className="flex flex-col gap-4">
            <h3 className="text-2xl text-primary border-b-secondary border-b-2 border-solid w-64 self-start">
              Localização
            </h3>
            <p className="text-primary">
              Estrategicamente localizada na região central de Curitiba, na Av.
              Iguaçu, 1700, próximo ao Shopping Curitiba e do Hospital Pequeno
              Príncipe.
            </p>
          </section>
        </div>
      </CourseInfo>
      <RepublicPhotos />
      <CourseLearnMore className="bg-white">
        <CourseLearnMoreTitle className="text-primary">
          Saiba Mais
        </CourseLearnMoreTitle>
        <CourseLearnMoreItems>
          <CourseLearnMoreItem
            link="https://docs.google.com/forms/d/e/1FAIpQLSdASgDpRrWpWfpUtgXt9dHXD7Hml3odt1fU-1lKck1tQdhMag/viewform"
            className="hover:bg-primary hover:opacity-75 hover:text-white uppercase !font-extrabold rounded-lg transition"
          >
            Inscrição
          </CourseLearnMoreItem>
          <CourseLearnMoreItem
            link="/cursos/teologia"
            className="bg-secondary hover:bg-secondary hover:opacity-75 hover:text-white"
          >
            Sobre o Curso
          </CourseLearnMoreItem>
        </CourseLearnMoreItems>
      </CourseLearnMore>
    </main>
  );
}
