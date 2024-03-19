import { CourseFacultyLecturer } from '@app/cursos/course-faculty';
import { faculty } from 'src/mock/faculty';

export default function Page() {
  return (
    <section className="container grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      {faculty.map((lecturer) => (
        <CourseFacultyLecturer {...lecturer} key={lecturer.id} />
      ))}
    </section>
  );
}
