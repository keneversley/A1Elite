import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Main from "../layout/Main";
import Home from "../pages/Home";
import Donate from "../pages/Donate";
import Contact from "../pages/Contact";

export const routes = createBrowserRouter([
  {
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/donate",
        element: <Donate />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
