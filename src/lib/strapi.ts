interface Props {
  endpoint: string;
  query?: Record<string, string>;
  wrappedByKey?: string;
  wrappedByList?: boolean;
}

interface PostDataProps {
  endpoint: string;
  payload: string;
}

/**
 * Fetches data from the Strapi API
 * @param endpoint - The endpoint to fetch from
 * @param query - The query parameters to add to the url
 * @param wrappedByKey - The key to unwrap the response from
 * @param wrappedByList - If the response is a list, unwrap it
 * @returns
 */
export default async function fetchApi<T>({
  endpoint,
  query,
  wrappedByKey,
  wrappedByList,
}: Props): Promise<T> {
  if (endpoint.startsWith('/')) {
    endpoint = endpoint.slice(1);
  }

  const url = new URL(`${import.meta.env.PUBLIC_STRAPI_URL}/api/${endpoint}`);

  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }
  const res = await fetch(url.toString());
  let data = await res.json();

  if (wrappedByKey) {
    data = data[wrappedByKey];
    data = data.map((item: any) => {
      return {
        id: item.id,
        ...item.attributes,
      };
    });
  }

  if (wrappedByList) {
    data = data[0];
  }

  return data as T;
}

export async function fetchApiPost<T>({
  endpoint,
  payload,
}: PostDataProps): Promise<T> {
  if (endpoint.startsWith('/')) {
    endpoint = endpoint.slice(1);
  }

  const url = new URL(`${import.meta.env.PUBLIC_STRAPI_URL}/api/${endpoint}`);

  const res: Response = await fetch(url.toString(), {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: payload,
  });
  const result: any = await res.json();

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return JSON.stringify(result.body) as T;
}
