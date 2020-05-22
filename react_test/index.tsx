// @ts-ignore
import { createRouter } from 'https://denopkg.com/keroxp/servest/router.ts';
// @deno-types="https://deno.land/std@v0.37.0/types/react.d.ts"
import React from "https://cdn.pika.dev/_/react/v16";
// @ts-ignore
import ReactDOMServer from 'https://dev.jspm.io/react-dom/server';
// // @ts-ignore
// import

// @ts-ignore
import App from './App.tsx';

declare namespace JSX {
  interface Element { }
  interface IntrinsicElements { div: any; }
}

const router = createRouter();
router.handle('/', async req => {
  await req.respond({
    headers: new Headers({
      'content-type': 'text/html; charset=UTF-8',
      status: '200',
    }),
    body: ReactDOMServer.renderToString(
      <html>
        <head>
          <title>deno react ssr</title>
        </head>
        <body>
          <App />
        </body>
      </html>
    )
  })
});

router.listen(':8000');
