import ConsumerHome from "../pages/Consumer/Home/ConsumerHome.tsx";
import ConsumerRegister from "../pages/Consumer/Register/ConsumerRegister.tsx";
import LandingPage from "../pages/LadingPage/LandingPage.tsx";
import Login from "../pages/Login/Login.tsx";

const ConsumerRoutes = [
  {
    path: "/consumidores",
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
    path: "/consumidores/home",
    element: <ConsumerHome />,
  },
];


export default ConsumerRoutes;
