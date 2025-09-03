import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import Router from './routes/Router.tsx'

import Modal from "react-modal";

Modal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider  future={{
    v7_startTransition: true,
  }} router={Router} />
  </React.StrictMode>
)
