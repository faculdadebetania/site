import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@components/ui/breadcrumb';
import { getFaculties } from 'src/providers/faculty.provider';

export default async function Page() {
  const faculties = await getFaculties();
  return (
    <main className="container space-y-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Início</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Experiência e Credibilidade</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="uppercase text-5xl font-bold ">Experiência e Credibilidade</h1>
      <section className="w-full bg-white py-8 px-4">
        <p className="text-black text-lg">
          A Betânia tem 75 anos de história e experiência na formação teológica e milhares de alunos formados trabalhando em diversas áreas, no Brasil e em dezenas de países.
        </p>
      </section>
    </main>
  );
}
