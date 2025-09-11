import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Router from "./routes/Router.tsx";

import Modal from "react-modal";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

Modal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider future={{ v7_startTransition: true }} router={Router} />
    </Provider>
  </React.StrictMode>
);
