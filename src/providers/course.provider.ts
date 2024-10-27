import { notFound } from 'next/navigation';
import { Course } from 'src/models/course.model';
import { getCourseSchema } from 'src/schemas/course.schema';
import { fetchCMS } from './cms.provider';

export async function getCourse(slug: string): Promise<Course> {
  const params = {
    populate: '*',
    'filters[slug][$eq]': slug,
  };

  const response = await fetchCMS({
    uri: 'courses',
    method: 'GET',
    schema: getCourseSchema,
    params,
  });

  if (response.length !== 1) notFound();

  const [data] = response;

  return data;
}

export async function getCourses(): Promise<Array<Course>> {
  const params = {
    populate: '*',
  };

  const response = await fetchCMS({
    uri: 'courses',
    method: 'GET',
    schema: getCourseSchema,
    params,
  });

  if (response.length < 1) notFound();

  return response;
}
