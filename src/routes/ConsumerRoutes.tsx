
import ConsumerHome from "../pages/Consumer/ConsumerHome.tsx";
import ConsumerRegister from "../pages/Consumer/ConsumerRegister.tsx";
import SearchConsumer from "../pages/Consumer/SearchConsumer.tsx";
import LandingPage from "../pages/LadingPage/LandingPage.tsx";
import Login from "../pages/Login/Login.tsx";

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
    path: "/consumidores/:id/home",
    element: <ConsumerHome />,
  },{
    path: "/consumidores/buscar",
    element: <SearchConsumer />,
  }
];


export default ConsumerRoutes;
