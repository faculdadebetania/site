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
            <BreadcrumbPage>Interdenominacional</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="uppercase text-5xl font-bold ">INTERDENOMINACIONAL</h1>
      <section className="w-full bg-white py-8 px-4">
        <p className="text-black text-lg">
          Na FATEBE temos professores e alunos de diferentes denominações e você estuda as diferentes visões teológicas e interpretações bíblicas sobre diversos assuntos.
        </p>
      </section>
    </main>
  );
}
