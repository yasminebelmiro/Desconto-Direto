import path from "path";
import LandingPage from "../pages/LadingPage/LandingPage.tsx";
import Login from "../pages/Login/Login.tsx";
import MerchantHome from "../pages/Merchant/MerchantHome.tsx";

import MerchantRegister from "../pages/Merchant/MerchantRegister.tsx";
import ProtectedRoutes from "./ProtectedRoute.tsx";
import AddFlyer from "../pages/Merchant/AddFlyer.tsx";

const MerchantRoutes = [
  {
    path: "/comerciantes",
    element: <LandingPage />,
  },
  {
    path: "/comerciantes/login",
    element: <Login />,
  },
  {
    path: "/comerciantes/cadastrar",
    element: <MerchantRegister />,
  },
  {
    element: <ProtectedRoutes roleRequired="merchant" />,
    children: [
      {
        path: "/comerciantes/home",
        element: <MerchantHome />,
      },
      {
        path: "/comerciantes/novo-panfleto",
        element: <AddFlyer/>
      },
      {
        path: "/comerciantes/nova-oferta"
      },
    ],
  },
];

export default MerchantRoutes;
