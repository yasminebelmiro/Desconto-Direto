import { createBrowserRouter } from "react-router-dom";
import App from "../App.tsx";
import MerchantRotes from "./MerchantRoutes.tsx";
import ConstumerRotes from "./ConsumerRoutes.tsx";
import NotFoundPage from "../pages/NotFoundPage.tsx";

const Router = createBrowserRouter([
  { path: "/", 
    element: <App />, 
    errorElement: <NotFoundPage/>, 
    children: [
        ...MerchantRotes,
        ...ConstumerRotes,
        
    ]},
]);

export default Router;
