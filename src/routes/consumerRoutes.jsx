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
    path: "/consumidor/ofertas-favoritas",
    element: <CostumerFavoriteOffer />,
  },
  {
    path: "/consumidor/:nome/:id",
    element: <CostumerCommerceProfile />,
  },
];

export default consumerRoutes;
