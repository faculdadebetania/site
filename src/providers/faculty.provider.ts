import { notFound } from 'next/navigation';
import { Faculty } from 'src/models/faculty.model';
import { FacultiesSchema } from 'src/schemas/faculties.schema';
import { fetchCMS } from './cms.provider';

export async function getFaculties(): Promise<Array<Faculty>> {
  const params = {
    populate: '*',
  };

  const response = await fetchCMS({
    uri: 'faculties',
    method: 'GET',
    schema: FacultiesSchema,
    params,
  });

  if (response.length < 1) notFound();

  return response;
}
