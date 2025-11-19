import { Children } from "react";
import ConsumerHome from "../pages/Consumer/ConsumerHome.tsx";
import ConsumerRegister from "../pages/Consumer/ConsumerRegister.tsx";
import SearchConsumer from "../pages/Consumer/SearchConsumer.tsx";
import LandingPage from "../pages/LadingPage/LandingPage.tsx";

import ProtectedRoutes from "./ProtectedRoute.tsx";
import FavoritesOffers from "../pages/Consumer/FavoritesOffers.tsx";
import MerchantProfile from "../pages/Consumer/MerchantProfile.tsx";
import LoginConsumer from "../pages/Login/LoginConsumer.tsx";

const ConsumerRoutes = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/consumidores/login",
    element: <LoginConsumer />,
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
      {
        path: "/consumidores/favoritos",
        element: <FavoritesOffers />,
      },
      {
        path: `/consumidores/comercios/:id`,
        element: <MerchantProfile />,
      },
    ],
  },
];

export default ConsumerRoutes;
