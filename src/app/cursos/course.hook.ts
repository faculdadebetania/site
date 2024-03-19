import { Course, courses } from 'src/mock/courses';

export default function useCourse(id: string) {
  const course = courses.find((course) => course.id === id) as Course;
  return course;
}
