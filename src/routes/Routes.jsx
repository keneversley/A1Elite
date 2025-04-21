import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Main from "../layout/Main";
import Home from "../pages/Home";

export const routes = createBrowserRouter([
  {
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
