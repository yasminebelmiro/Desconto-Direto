import LandingPage from "../pages/LadingPage/LandingPage.tsx";
import Login from "../pages/Login/Login.tsx";
import MerchantHome from "../pages/Merchant/Home/MerchantHome.tsx";
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
},{
    path: "/area-comerciantes/home",
    element: <MerchantHome/>,
  },
];

export default MerchantRotes;
