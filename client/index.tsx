import "normalize.css";

import React, { lazy, Suspense } from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { createRoute } from "../common/routes";

const routes = [
  {
    exact: true,
    path: "/",
    component: lazy(() => import("../common/Pages/Top"))
  },
  {
    exact: true,
    path: "/about",
    component: lazy(() => import("../common/Pages/About"))
  }
];

const Router = createRoute({ routes });

hydrate(
  <BrowserRouter>
    <h1>client</h1>
    <Suspense fallback={<div>now loading...</div>}>{Router}</Suspense>
  </BrowserRouter>,
  document.getElementById("root")
);
