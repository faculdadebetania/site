import { Separator } from '@components/ui/separator';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

export default function Page() {
  return (
    <main className="container">
      <h1 className="text-7xl uppercase font-bold mb-8">Documentos</h1>
      <ul>
        <h2 className="text-2xl uppercase text-secondary">Para Todos</h2>
        <Document href="/documentos/teologia/calendario-academico.pdf">
          Calendário Acadêmico 2024
        </Document>
        <Separator className="!my-8" />
        <h2 className="text-2xl uppercase text-secondary">
          Para Vestibulandos
        </h2>
        <Document href="/documentos/teologia/manual-do-candidato.pdf">
          Manual do Candidato
        </Document>
        <Document href="/documentos/teologia/edital-vestibular.pdf">
          Edital do Vestibular 2024
        </Document>
        <Separator className="!my-8" />
        <h2 className="text-2xl uppercase text-secondary">Instituição</h2>
        <Document href="/documentos/teologia/portaria-renovacao.pdf">
          Portaria de Renovação de Reconhecimento do Curso
        </Document>
        <Document href="/documentos/portaria-credenciamento.pdf">
          Portaria de Credenciamento
        </Document>
        <Document href="/documentos/portaria-recredenciamento.pdf">
          Portaria de Recredenciamento
        </Document>
        <Document href="/documentos/teologia/portaria-reconhecimento.pdf">
          Portaria de Reconhecimento - Teologia
        </Document>
        <Document href="/documentos/pdi-2021-2025.pdf">
          Plano de Desenvolvimento Institucional - 2021 a 2025
        </Document>
        <Separator className="!my-8" />
        <h2 className="text-2xl uppercase text-secondary">Relatórios CPA</h2>
        <Document href="/documentos/cpa/relatorio-cpa-parcial-2022.pdf">
          Relatório CPA 2022 - parcial
        </Document>
        <Document href="/documentos/cpa/relatorio-cpa-parcial-2021.pdf">
          Relatório CPA 2021 - parcial
        </Document>
        <Document href="/documentos/cpa/relatorio-cpa-2020.pdf">
          Relatório CPA 2020 - integral
        </Document>
        <Document href="/documentos/cpa/relatorio-cpa-parcial-2019.pdf">
          Relatório CPA 2019 - parcial
        </Document>
        <Document href="/documentos/cpa/relatorio-cpa-parcial-2018.pdf">
          Relatório CPA 2018 - parcial
        </Document>
        <Document href="/documentos/cpa/relatorio-cpa-2017.pdf">
          Relatório CPA 2017 - integral
        </Document>
        <Document href="/documentos/cpa/relatorio-cpa-2016.pdf">
          Relatório CPA 2016 - parcial
        </Document>
        <Document href="/documentos/cpa/relatorio-cpa-parcial-2015.pdf">
          Relatório CPA 2015 - parcial
        </Document>
        <Document href="/documentos/cpa/relatorio-cpa-2014.pdf">
          Relatório CPA 2014 - parcial
        </Document>
      </ul>
    </main>
  );
}

function Document({ children, href }: PropsWithChildren<{ href: string }>) {
  return (
    <li className="underline cursor-pointer underline-offset-2">
      <Link href={href}>{children}</Link>
    </li>
  );
}
