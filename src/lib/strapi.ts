import type { AnalysisSuperCategory } from '@/types/AnalysisSuperCategory.ts';

interface Props {
  endpoint: string;
  query?: Record<string, string>;
  wrappedByKey?: string;
  wrappedByList?: boolean;
}

interface AnalyseProps {
  endpoint: string;
  query?: Record<string, string>;
  wrappedByKey: string;
}

interface PostDataProps {
  endpoint: string;
  payload: string;
}

const REQUEST_TIMEOUT_MS = 8000;

/**
 * Base URL for the Strapi API.
 *
 * In the browser this has to be the public domain. On the server it must not
 * be: that domain is served by the same reverse proxy which is already waiting
 * on the render in progress, so a server-side call through it makes the proxy
 * wait on itself. Once enough requests pile up that deadlocks every site behind
 * the proxy until the container is restarted.
 */
function apiBaseUrl(): string {
  if (import.meta.env.SSR) {
    // Read at call time from the running process first, so the address can be
    // changed by redeploying the container rather than rebuilding the image;
    // the build-time value is a fallback for environments that inline it.
    const internal =
      (typeof process !== 'undefined' && process.env?.STRAPI_INTERNAL_URL) ||
      import.meta.env.STRAPI_INTERNAL_URL;
    if (internal) {
      return internal;
    }
  }
  return import.meta.env.PUBLIC_STRAPI_URL;
}

function apiUrl(endpoint: string, query?: Record<string, string>): URL {
  if (endpoint.startsWith('/')) {
    endpoint = endpoint.slice(1);
  }

  const url = new URL(`${apiBaseUrl()}/api/${endpoint}`);

  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }

  return url;
}

/**
 * fetch().json(), but bounded in time and honest about non-JSON bodies.
 *
 * Without the timeout a slow CMS holds the render open indefinitely, and a
 * proxy error page used to surface as an opaque "Unexpected token 'G'".
 */
async function fetchJson(url: string, init?: RequestInit): Promise<any> {
  const res = await fetch(url, {
    ...init,
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
  });
  const body = await res.text();

  try {
    return JSON.parse(body);
  } catch {
    throw new Error(
      `Strapi returned ${res.status} with a non-JSON body: ${body.slice(0, 120)}`
    );
  }
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
  let data = await fetchJson(apiUrl(endpoint, query).toString());

  if (wrappedByKey) {
    data = unwrapObject(wrappedByKey, data);
  }

  if (wrappedByList) {
    data = data[0];
  }

  return data as T;
}

/**
 * Fetches data from the Strapi API
 * @param endpoint - The endpoint to fetch from
 * @param payload - The request body
 * @returns
 */
export async function fetchApiPost<T>({
  endpoint,
  payload,
}: PostDataProps): Promise<T> {
  const res: Response = await fetch(apiUrl(endpoint).toString(), {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: payload,
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
  });
  const result: any = await res.json();

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return JSON.stringify(result.body) as T;
}

/**
 * Fetches data from the Strapi API
 * @param endpoint - The endpoint to fetch from
 * @param query - The query parameters to add to the url
 * @param wrappedByKey - The key to unwrap the response from
 * @returns
 */
export async function fetchAnalyseDataAndUnwrap({
  endpoint,
  query,
  wrappedByKey,
}: AnalyseProps): Promise<AnalysisSuperCategory[]> {
  const data = await fetchJson(apiUrl(endpoint, query).toString());

  return unwrapSuperCategory(wrappedByKey, data);
}

function unwrapSuperCategory(
  wrappedByKey: string,
  data: any
): AnalysisSuperCategory[] {
  let array = unwrapObject(wrappedByKey, data);

  array.forEach((item: any) => {
    item.AnalysisSubCategories = unwrapObject(
      wrappedByKey,
      item.AnalysisSubCategories
    );

    item.Analyses = unwrapObject(wrappedByKey, item.Analyses);

    item.AnalysisSubCategories.forEach((subItem: any) => {
      subItem.Analyses = unwrapObject(wrappedByKey, subItem.Analyses);
    });
  });
  return array;
}

export function unwrapObject(wrappedByKey: string, data: any): any {
  if (data) {
    if (data[wrappedByKey] instanceof Array) {
      data = data[wrappedByKey];
      return data?.map((item: any) => {
        return {
          id: item.id,
          ...item.attributes,
        };
      });
    } else if (data[wrappedByKey] instanceof Object) {
      data = data[wrappedByKey];
      return {
        id: data.id,
        ...data.attributes,
      };
    }
  } else {
    return {};
  }
}
