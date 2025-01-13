import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import GlobalStyles from "./global";


import {  RouterProvider } from "react-router-dom";
import router from "./routes/routes";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyles />
    <RouterProvider router={router} />
  </StrictMode>
);
