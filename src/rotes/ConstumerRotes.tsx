import ConsumerHome from "../pages/Consumer/Home/ConsumerHome.tsx";
import ConsumerRegister from "../pages/Consumer/Register/ConsumerRegister.tsx";
import LandingPage from "../pages/LadingPage/LandingPage.tsx";
import Login from "../pages/Login/Login.tsx";

const ConstumerRotes = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/area-consumidores/login",
    element: <Login />,
  },
  {
    path: "/area-consumidores/cadastro",
    element: <ConsumerRegister />,
  },
  {
    path: "/area-consumidores/home",
    element: <ConsumerHome />,
  },

];

export default ConstumerRotes;
