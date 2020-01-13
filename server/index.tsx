import * as express from "express";
import * as React from "react";
import { renderToNodeStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import { createRouter } from "../common/routes";

// / pages
import Index from "../common/Pages/Top";
import About from "../common/Pages/About";

const App: React.FC = ({ children }) => (
  <html lang="ja">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>react-ssr-dynamic-import-sample</title>
    </head>
    <body>
      <div id="root">{children}</div>
      <script src="/static/vendors.js" />
      <script src="/static/bundle.js" />
    </body>
  </html>
);

const app = express();

app.use("/static", express.static("dist"));

const routes = [
  { exact: true, path: "/", component: Index },
  { exact: true, path: "/about", component: About }
];

app.get(["/", "/about"], (req, res) => {
  const context = {};
  const Router = createRouter({ routes });

  renderToNodeStream(
    <App>
      <StaticRouter location={req.url} context={context}>
        {Router}
      </StaticRouter>
    </App>
  ).pipe(res);
});

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 4000;
app.listen(PORT, () => {
  console.log(`listen on http://localhost:${PORT}`);
});
