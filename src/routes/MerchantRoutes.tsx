import LandingPage from "../pages/LadingPage/LandingPage.tsx";
import Login from "../pages/Login/Login.tsx";
import MerchantHome from "../pages/Merchant/MerchantHome.tsx";
import MerchantRegister from "../pages/Merchant/MerchantRegister.tsx";
import ProtectedRoutes from "./ProtectedRoute.tsx";
import AddFlyer from "../pages/Merchant/AddFlyer.tsx";
import NewOffer from "../pages/Merchant/NewOffer.tsx";
import Profile from "../pages/Merchant/Profile.tsx";
import AddProduct from "../pages/Merchant/AddProduct.tsx";
import EditProfile from "../pages/Merchant/EditProfile.tsx";

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
        element: <AddFlyer />,
      },
      {
        path: "/comerciantes/nova-oferta",
        element: <NewOffer />,
      },
      {
        path: "/comerciantes/novo-produto",
        element: <AddProduct />,
      },
      {
        path: "/comerciantes/perfil",
        element: <Profile />,
      },
      {
        path: "/comerciantes/editar-perfil",
        element: <EditProfile />,
      },
    ],
  },
];

export default MerchantRoutes;
