import LandingPage from "../pages/LadingPage/LandingPage.tsx";
import Login from "../pages/Login/Login.tsx";
import MerchantHome from "../pages/Merchant/Home/MerchantHome.tsx";
import MerchantRegister from "../pages/Merchant/Register/MerchantRegister.tsx";

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
