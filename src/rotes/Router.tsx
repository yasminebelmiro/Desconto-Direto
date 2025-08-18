import { createBrowserRouter } from "react-router-dom";
import App from "../App.tsx";
import MerchantRotes from "./MerchantRotes.tsx";
import ConstumerRotes from "./ConstumerRotes.tsx";

const Router = createBrowserRouter([
  { path: "/", 
    element: <App />, 
    errorElement: <h1>Page not found</h1>, 
    children: [
        ...MerchantRotes,
        ...ConstumerRotes,
        
    ]},
]);

export default Router;
