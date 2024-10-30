import { Faculty } from 'src/models/faculty.model';
import { z } from 'zod';

export const schema = z.object({
  data: z.array(
    z.object({
      name: z.string(),
      academicBackground: z.string(),
      photo: z.object({
        url: z.string(),
      }),
    })
  ),
  meta: z.any(),
});

export function getFacultiesSchemaTransform(data: z.infer<typeof schema>['data']) {
  const result = data.map<Faculty>(({ photo, academicBackground, ...faculty }) => {
    const _academicBackground = academicBackground.split('\n');

    return {
      photoURL: photo.url,
      academicBackground: _academicBackground,
      ...faculty,
    };
  });

  return result;
}

const response = schema.transform<Array<Faculty>>(({ data }) => getFacultiesSchemaTransform(data));

export const getFacultiesSchema = response;
