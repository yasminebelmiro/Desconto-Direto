import { Children } from "react";
import ConsumerHome from "../pages/Consumer/ConsumerHome.tsx";
import ConsumerRegister from "../pages/Consumer/ConsumerRegister.tsx";
import SearchConsumer from "../pages/Consumer/SearchConsumer.tsx";
import LandingPage from "../pages/LadingPage/LandingPage.tsx";
import Login from "../pages/Login/Login.tsx";
import ProtectedRoutes from "./ProtectedRoute.tsx";

const ConsumerRoutes = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/consumidores/login",
    element: <Login />,
  },
  {
    path: "/consumidores/cadastrar",
    element: <ConsumerRegister />,
  },
  {
    element: <ProtectedRoutes roleRequired="consumer" />,
    children: [
      {
        path: "/consumidores/home",
        element: <ConsumerHome />,
      },
      {
        path: "/consumidores/buscar",
        element: <SearchConsumer />,
      },
    ],
  },
];

export default ConsumerRoutes;
