import CostumerRegister from "../pages/CostumerRegister/CostumerRegister";
import CostumerHome from "../Pages/CostumerHome/CostumerHome";
import CostumerFavoriteOffer from "../Pages/CostumerFavoriteOffer/CostumerFavoriteOffer";
import CostumerCommerceProfile from "../Pages/CostumerCommerceProfile/CostumerCommerceProfile";

const consumerRoutes = [
  {
    path: "/consumidor/cadastro",
    element: <CostumerRegister />,
  },
  {
    path: "/consumidor/home/:id",
    element: <CostumerHome />,
  },
  {
    path: "/consumidor/ofertas-favoritas/:id",
    element: <CostumerFavoriteOffer />,
  },
  {
    path: "/consumidor/:id/:name/:id",
    element: <CostumerCommerceProfile />,
  },

];

export default consumerRoutes;
