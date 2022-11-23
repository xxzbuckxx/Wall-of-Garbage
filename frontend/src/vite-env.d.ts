/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_VERCEL_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
