import ReactDOMServer from 'react-dom/server';
import { PageShell } from './PageShell';
import type { PageContextServer } from './types';
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server';

export { render };

// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ['pageProps', 'urlPathname'];

async function render(pageContext: PageContextServer) {
  const { Page, pageProps } = pageContext;
  
  // This render() hook only supports SSR, see https://vite-plugin-ssr.com/render-modes for how to modify render() to support SPA
  if (!Page) throw new Error('My render() hook expects pageContext.Page to be defined');
  
  const pageHtml = ReactDOMServer.renderToString(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  );

  // See https://vite-plugin-ssr.com/head
  const { documentProps } = pageContext.exports;
  const title = (documentProps && documentProps.title) || 'Red Rock Cleaning - Premium Multi-Location Cleaning Services';
  const description = (documentProps && documentProps.description) || 'Professional cleaning services across South Florida, Las Vegas, Hawaii, Columbus Ohio, and Dallas. Residential, commercial, and vacation rental cleaning.';

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${description}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {
      // We can add custom `pageContext` here, see https://vite-plugin-ssr.com/page-context#custom
    },
  };
}
