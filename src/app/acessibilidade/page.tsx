import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@components/ui/breadcrumb';
export default function Page() {
  return (
    <main className="container space-y-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Início</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Acessibilidade</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <section className="flex flex-col justify-between gap-4">
        <h1 className="uppercase text-5xl font-bold">Acessibilidade</h1>
        <strong>
          Este portal segue as diretrizes do e-MAG (Modelo de Acessibilidade em
          Governo Eletrônico), conforme as normas do Governo Federal, em
          obediência ao Decreto 5.296, de 2.12.2004.
        </strong>

        <p>
          O termo acessibilidade significa incluir a pessoa com deficiência na
          participação de atividades como o uso de produtos, serviços e
          informações. Alguns exemplos são os prédios com rampas de acesso para
          cadeira de rodas e banheiros adaptados para deficientes.
        </p>

        <p>
          Na internet, acessibilidade refere-se principalmente às recomendações
          do WCAG (World Content Accessibility Guide) do W3C e no caso do
          Governo Brasileiro ao e-MAG (Modelo de Acessibilidade em Governo
          Eletrônico). O e-MAG está alinhado as recomendações internacionais,
          mas estabelece padrões de comportamento acessível para sites
          governamentais.
        </p>
      </section>
      <section className="space-y-4">
        <h2 className="font-bold text-2xl">
          LEIS E DECRETOS SOBRE ACESSIBILIDADE
        </h2>

        <a
          className="underline"
          href="https://www.planalto.gov.br/ccivil_03/_Ato2004-2006/2004/Decreto/D5296.htm"
        >
          Decreto nº 5.296 de 02 de dezembro de 2004
        </a>

        <p>
          <a
            className="underline"
            href="https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2009/decreto/d6949.htm"
          >
            Decreto nº 6.949, de 25 de agosto de 2009
          </a>
          &nbsp; - Promulga a Convenção Internacional sobre os Direitos das
          Pessoas com Deficiência e seu Protocolo Facultativo, assinados em Nova
          York, em 30 de março de 2007
        </p>

        <p>
          <a
            className="underline"
            href="https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/Decreto/D7724.htm"
          >
            Decreto nº 7.724, de 16 de Maio de 2012
          </a>
          &nbsp; - Regulamenta a Lei No 12.527, que dispõe sobre o acesso a
          informações.
        </p>

        <a
          className="underline"
          href="https://www.governoeletronico.gov.br/acoes-e-projetos/e-MAG"
        >
          Modelo de Acessibilidade de Governo Eletrônico
        </a>

        <p>
          <a
            className="underline"
            href="https://www.governoeletronico.gov.br/biblioteca/arquivos/portaria-no-03-de-07-05-2007"
          >
            Portaria nº 03, de 07 de Maio de 2007
          </a>
          &nbsp; - Institucionaliza o Modelo de Acessibilidade em Governo
          Eletrônico - e-MAG
        </p>
      </section>
      <section className="flex flex-col">
        <h2 className="font-bold text-2xl">LINKS ÚTEIS</h2>
        <a href="http://acessibilidadelegal.com/" className="underline">
          Acessibilidade Legal
        </a>
        <a href="http://acessodigital.net/links.html" className="underline">
          Acesso Digital
        </a>
      </section>
    </main>
  );
}
