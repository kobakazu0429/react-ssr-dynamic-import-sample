import "normalize.css";

import * as React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { createRouter } from "../common/routes";

const routes = [
  {
    exact: true,
    path: "/",
    component: React.lazy(() => import("../common/Pages/Top"))
  },
  {
    exact: true,
    path: "/about",
    component: React.lazy(() => import("../common/Pages/About"))
  }
];

const Router = createRouter({ routes });

hydrate(
  <BrowserRouter>
    <h1>client</h1>
    <React.Suspense fallback={<div>now loading...</div>}>
      {Router}
    </React.Suspense>
  </BrowserRouter>,
  document.getElementById("root")
);
