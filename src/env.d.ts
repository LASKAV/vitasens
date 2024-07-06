/// <reference types="astro/client" />
/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly PUBLIC_STRAPI_URL: string;
  readonly DEFAULT_APPOINTMENT_ID: number;
  readonly ADAPTER: string;
}
