import LandingPage from "../pages/LadingPage/LandingPage.tsx";
import Login from "../pages/Login/Login.tsx";
import MerchantRegister from "../pages/Merchant/Register/MerchantRegister.tsx";

const MerchantRotes = [
  { 
    path: "/area-comerciantes", 
    element: <LandingPage /> 
},{
     path: "/area-comerciantes/login", 
    element: <Login /> 
},{
     path: "/area-comerciantes/cadastro", 
    element: <MerchantRegister /> 
}
];

export default MerchantRotes;
