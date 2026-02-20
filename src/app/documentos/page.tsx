import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@components/ui/breadcrumb';
import { Separator } from '@components/ui/separator';
import { PropsWithChildren } from 'react';

export default function Page() {
  return (
    <main className="container space-y-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Início</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Documentos</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="uppercase text-5xl font-bold ">DOCUMENTOS</h1>
      <ul>
        <h2 className="text-2xl uppercase text-secondary">Alunos</h2>
        <Document href="/documentos/teologia/manual-do-aluno.pdf">Manual do Aluno</Document>
        <Document href="/documentos/teologia/calendario-academico.pdf">Calendário Acadêmico 2025</Document>
        <Separator className="!my-8" />
        <h2 className="text-2xl uppercase text-secondary">Para Vestibulandos</h2>
        <Document href="/documentos/teologia/manual-do-candidato.pdf">Manual do Candidato</Document>
        <Document href="/documentos/teologia/edital-vestibular.pdf">Edital do Vestibular 2026</Document>
        <Separator className="!my-8" />
        <h2 className="text-2xl uppercase text-secondary">Instituição</h2>
        <Document href="/documentos/relato-institucional.pdf">Relato Institucional</Document>
        <Document href="/documentos/regimento-institucional.pdf">Regimento Institucional</Document>
        <Document href="/documentos/portaria-credenciamento.pdf">Portaria de Credenciamento</Document>
        <Document href="/documentos/portaria-recredenciamento.pdf">Portaria de Recredenciamento</Document>
        <Document href="/documentos/teologia/portaria-reconhecimento.pdf">Portaria de Reconhecimento - Teologia</Document>
        <Document href="/documentos/teologia/portaria-renovacao.pdf">Portaria de Renovação de Reconhecimento do Curso</Document>
        <Document href="/documentos/pdi-2021-2025.pdf">Plano de Desenvolvimento Institucional - 2021 a 2025</Document>
        <Document href="/documentos/ppc-teologia.pdf">PPC - Bacharelado em Teologia - Presencial</Document>
        <Document href="/documentos/ppc-aconselhamento-e-gestao.pdf">
          PPC - Pós-graduação em Aconselhamento e Gestão de pessoas
        </Document>
        <Document href="/documentos/ppc-biblia-e-teologia.pdf">PPC - Pós-graduação em Bíblia e Teologia</Document>
        <Separator className="!my-8" />
        <h2 className="text-2xl uppercase text-secondary">Relatórios CPA</h2>
        <h3 className="text-xl uppercase font-bold tracking-wider mt-4">Integrais</h3>
        <Document href="/documentos/cpa/relatorio-cpa-2024.pdf">Relatório CPA 2024</Document>
        <Document href="/documentos/cpa/relatorio-cpa-2023.pdf">Relatório CPA 2023</Document>
        <Document href="/documentos/cpa/relatorio-cpa-2020.pdf">Relatório CPA 2020</Document>
        <Document href="/documentos/cpa/relatorio-cpa-2017.pdf">Relatório CPA 2017</Document>
        <h3 className="text-xl uppercase font-bold tracking-wider mt-8">Parciais</h3>
        <Document href="/documentos/cpa/relatorio-cpa-parcial-2022.pdf">Relatório CPA 2022</Document>
        <Document href="/documentos/cpa/relatorio-cpa-parcial-2021.pdf">Relatório CPA 2021</Document>
        <Document href="/documentos/cpa/relatorio-cpa-parcial-2019.pdf">Relatório CPA 2019</Document>
        <Document href="/documentos/cpa/relatorio-cpa-parcial-2018.pdf">Relatório CPA 2018</Document>
        <Document href="/documentos/cpa/relatorio-cpa-2016.pdf">Relatório CPA 2016</Document>
        <Document href="/documentos/cpa/relatorio-cpa-parcial-2015.pdf">Relatório CPA 2015</Document>
        <Document href="/documentos/cpa/relatorio-cpa-2014.pdf">Relatório CPA 2014</Document>
      </ul>
    </main>
  );
}

function Document({ children, href }: PropsWithChildren<{ href: string }>) {
  return (
    <li className="underline decoration-1 decoration-white/20 cursor-pointer underline-offset-2 hover:decoration-white/50 transition-colors duration-50">
      <a href={href} target="_blank">
        {children}
      </a>
    </li>
  );
}
