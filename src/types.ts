import type { Page } from './types';

// https://vite-plugin-ssr.com/pageContext#typescript
declare global {
  namespace Vike {
    interface PageContext {
      Page: Page;
      pageProps: Record<string, unknown>;
      urlPathname: string;
      exports: {
        documentProps?: {
          title?: string;
          description?: string;
        };
      };
    }
  }
}

export type { PageContext };
export type { PageContextServer } from 'vite-plugin-ssr/types';
export type { PageContextClient } from 'vite-plugin-ssr/types';
export type { Page } from 'vite-plugin-ssr/types';
