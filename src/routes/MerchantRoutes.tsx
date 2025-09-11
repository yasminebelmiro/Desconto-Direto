import LandingPage from "../pages/LadingPage/LandingPage.tsx";
import Login from "../pages/Login/Login.tsx";
import MerchantHome from "../pages/Merchant/MerchantHome.tsx";

import MerchantRegister from "../pages/Merchant/MerchantRegister.tsx";

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
    path: "/comerciantes/home",
    element: <MerchantHome />,
  },
];


export default MerchantRoutes;
