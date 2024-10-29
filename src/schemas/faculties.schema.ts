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

const response = schema.transform<Array<Faculty>>(({ data }) => {
  const result = data.map<Faculty>(({ photo, ...faculty }) => {
    return {
      photoURL: photo.url,
      ...faculty,
    };
  });

  return result;
});

export const getFacultiesSchema = response;
