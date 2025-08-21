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
];

export default ConstumerRotes;
