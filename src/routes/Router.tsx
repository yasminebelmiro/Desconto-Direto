import { createBrowserRouter } from "react-router-dom";
import App from "../App.tsx";
import MerchantRotes from "./MerchantRoutes.tsx";
import ConstumerRotes from "./ConsumerRoutes.tsx";
import ErrorPage from "../pages/ErroPage.tsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [...MerchantRotes, ...ConstumerRotes],
  },
]);

export default Router;
