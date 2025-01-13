import { createBrowserRouter } from "react-router-dom";
import consumerRoutes from "./consumerRoutes.jsx";
import commerceRoutes from "./commerceRoutes.jsx";
import PublicChoiseRegister from "../pages/PublicChoiseRegister/PublicChoiseRegister.jsx";
import PublicLogin from "../pages/PublicLogin/PublicLogin.jsx";
import LandingPage from "../Pages/LandingPage/LandingPage.jsx";
import App from "../App.jsx";
import ErrorPage from "../Pages/ErrorPage/ErrorPage.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      ...consumerRoutes,
      ...commerceRoutes,
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/login",
        element: <PublicLogin />,
      },
      {
        path: "/tipo-cadastro",
        element: <PublicChoiseRegister />,
      },
    ],
  },
]);

export default router;
