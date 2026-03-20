import { getFaculties } from 'src/providers/faculty.provider';

export default async function Page() {
  const faculties = await getFaculties();
  return (
    <main className="space-y-8">
      <section className="bg-white text-gray-800">
        <div className="container space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold">
            QUEM SOMOS<br/><br/>
            MEB – Missão Evangélica Betânia
          </h1>
          <p>
            A Betânia tem 75 anos de história e experiência na formação teológica e milhares de alunos formados trabalhando em diversas áreas, no Brasil e em dezenas de países.
          </p>
          <p>
            A <strong>Missão Evangélica Betânia (MEB) teve origem na década de 1940</strong>, nos Estados Unidos, quando cinco famílias cristãs passaram a se reunir semanalmente para estudar a Bíblia e orar pela obra missionária. Esses encontros aconteciam na casa do jovem comerciante Theodore A. Hegre, na cidade de Minneapolis. Nesse contexto, Deus despertou no grupo uma profunda visão para alcançar o mundo não evangelizado.
          </p>
          <p>
            Ao perceberem que grande parte de seus recursos era destinada apenas ao sustento familiar, decidiram viver de forma comunitária, colocando seus bens em comum para que mais recursos pudessem ser direcionados à obra missionária. Sob a liderança de Theodore A. Hegre, consagrado ao ministério, formou-se uma equipe de 16 pessoas comprometidas em cumprir o desafio que acreditavam ter recebido de Deus: recrutar, treinar e enviar cem missionários para diferentes partes do mundo.
          </p>
          <p>
            Com o passar dos anos, foi criado o <strong>Centro de Treinamento Missionário Betânia (EUA)</strong>, juntamente com uma estrutura de sustento para a escola, além da implantação de uma gráfica e editora, fortalecendo o trabalho de formação e envio missionário.
          </p>
          <p>
            <strong>A Missão Evangélica Betânia chegou ao Brasil em 1963</strong>, sendo a primeira iniciativa ministerial da organização fora da América do Norte. Desde então, tem desenvolvido suas atividades em diversas regiões do país e também no exterior, atuando nas áreas de formação teológica, produção literária e missões transculturais.
          </p>
          <p>
            Os primeiros ministérios da MEB no Brasil foram o <strong>Seminário e Instituto Bíblico Betânia (SEMIB)</strong>, na cidade de Altônia (PR), e a <strong>Editora Betânia</strong>. Atualmente, a missão mantém instituições de formação teológica e ministerial, entre elas a <strong>Faculdade Teológica Betânia (FATEBE)</strong>, em Curitiba (PR), e o <strong>Seminário Evangélico Betânia (SEB)</strong>, em Petrolina (PE).
          </p>
          <p>
            A partir do Brasil, o ministério expandiu sua atuação internacional, estando presente também no Paraguai, na cidade de Luque, desde 1986, além de desenvolver atividades missionárias no Senegal, na África, e em outros países por meio da <strong>Junta de Missões Betânia (JUMIB)</strong>.
          </p>
          <p>
            Criada em 1994, a <strong>JUMIB</strong> é um órgão interdenominacional de apoio e envio de missionários transculturais, com sede atualmente na cidade de Campinas (SP), que atua no suporte, cuidado e desenvolvimento de projetos missionários ao redor do mundo.
          </p>
          <p>
            Ao longo de sua história no Brasil, a MEB também desenvolveu importantes ações sociais, como o ministério <strong>Recanto da Paz</strong>, em Curitiba, dedicado ao acolhimento e cuidado de mulheres grávidas em situação de vulnerabilidade social, oferecendo suporte durante a gestação e apoio para sua reintegração familiar e social.
          </p>
          <p>
            Outro ministério relevante é o <strong>BETAMAR</strong>, localizado na cidade de São Francisco do Sul (SC), que tem como propósito promover cuidado, restauração e renovação espiritual a líderes cristãos que enfrentam os desafios da caminhada ministerial.
          </p>
          <p>
            A <strong>Editora Betânia</strong>, fundada no Brasil em 1965, iniciou suas atividades com a publicação da revista <strong>Mensagem da Cruz</strong>, que continua circulando no mundo de língua portuguesa e impactando a vida de milhares de pessoas. Atualmente sediada em Curitiba, ao lado da FATEBE, a editora dedica-se à produção e distribuição de literatura cristã voltada à edificação da Igreja e à formação de líderes.
          </p>
          <p>
            Por meio de seus diversos ministérios, a Missão Evangélica Betânia permanece comprometida com sua missão de formar líderes, fortalecer a Igreja e contribuir para a expansão do Reino de Deus no Brasil e no mundo...
          </p>
        </div>
      </section>
      <section className="container flex flex-col gap-8">
        <div className="w-full">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-md">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/sa4lX6gcosw"
              title="Vídeo institucional"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </main>
  );
}
