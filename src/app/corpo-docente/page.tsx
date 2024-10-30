import { CourseFaculty } from '@app/cursos/course-faculty';
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
            <BreadcrumbPage>Corpo Docente</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="uppercase text-5xl font-bold ">CORPO DOCENTE</h1>
      <section className="grid auto-row-[1fr] grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {faculties.map((faculty) => (
          <CourseFaculty {...{ faculty }} key={faculty.name} />
        ))}
      </section>
    </main>
  );
}
