import { CMS_SCHEMA } from 'src/schemas/cms.schema';
import { z } from 'zod';

const { CMS_API_URL, CMS_API_TOKEN } = process.env;

interface Props<T> {
  uri: string;
  method: 'GET' | 'POST';
  schema: T;
  params?: Record<string, unknown>;
}
export async function fetchCMS<T extends z.Schema>(props: Props<T>): Promise<z.infer<T>> {
  const { uri, method, schema, params } = props;

  const URI = new URL(CMS_API_URL + uri);

  if (params && method === 'GET') {
    Object.entries(params).forEach(([key, value]) => {
      if (!value) return;
      if (!Array.isArray(value)) return URI.searchParams.append(key, String(value));
      value.forEach((value) => URI.searchParams.append(key, String(value)));
    });
  }

  const decodedURI = decodeURIComponent(URI.toString());

  const headers = new Headers();
  headers.append('Authorization', `Bearer ${CMS_API_TOKEN}`);

  const requestInit: RequestInit = { method, headers, cache: 'force-cache', next: { tags: ['web'] } };
  if (params && method === 'POST') requestInit.body = JSON.stringify(params);

  const body = await fetch(decodedURI, requestInit).then((res) => res.json());

  const response = CMS_SCHEMA.safeParse(body);
  if (!response.success) throw new Error(response.error.message);

  if (response.data.error) throw new Error(response.data.error.message);

  const result = schema.safeParse(response.data);
  if (!result.success) throw new Error(result.error.message);

  return result.data;
}
