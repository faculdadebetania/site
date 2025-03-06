import { notFound } from 'next/navigation';
import { Course } from 'src/models/course.model';
import { CourseSchema } from 'src/schemas/courses.schema';
import { fetchCMS } from './cms.provider';

export async function getCourse(slug: string): Promise<Course> {
  const params = {
    'populate[0]': '*',
    'populate[faculties][populate]': 'photo',
    'filters[slug][$eq]': slug,
  };

  const response = await fetchCMS({
    uri: 'courses',
    method: 'GET',
    schema: CourseSchema,
    params,
  });

  if (response.length !== 1) notFound();

  const [data] = response;

  return data;
}

export async function getCourses(): Promise<Array<Course>> {
  const params = {
    'populate[0]': '*',
    'populate[faculties][populate]': 'photo',
  };

  const response = await fetchCMS({
    uri: 'courses',
    method: 'GET',
    schema: CourseSchema,
    params,
  });

  if (response.length < 1) notFound();

  return response;
}
