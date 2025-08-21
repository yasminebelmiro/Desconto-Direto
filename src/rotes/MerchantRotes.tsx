import LandingPage from "../pages/LadingPage/LandingPage.tsx";
import Login from "../pages/Login/Login.tsx";

const MerchantRotes = [
  { 
    path: "/area-comerciantes", 
    element: <LandingPage /> 
},{
     path: "/area-comerciantes/login", 
    element: <Login /> 
}
];

export default MerchantRotes;
