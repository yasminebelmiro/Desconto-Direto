import CostumerRegister from "../pages/CostumerRegister/CostumerRegister";
import CostumerHome from "../Pages/CostumerHome/CostumerHome";
import CostumerFavoriteOffer from "../Pages/CostumerFavoriteOffer/CostumerFavoriteOffer";
import CostumerCommerceProfile from "../Pages/CostumerCommerceProfile/CostumerCommerceProfile";
import CostumerSearchOffer from "../Pages/CostumerSearchOffer/CostumerSearchOffer";

const consumerRoutes = [
  {
    path: "/consumidor/cadastro",
    element: <CostumerRegister />,
  },
  {
    path: "/consumidor/home/:idConsumer",
    element: <CostumerHome />,
  },
  {
    path: "/consumidor/ofertas-favoritas/:idConsumer",
    element: <CostumerFavoriteOffer />,
  },
  {
    path: "/consumidor/:idConsumer/:name/:idCommerce",
    element: <CostumerCommerceProfile />,
  },
  {
    path: "/search",
    element: <CostumerSearchOffer />,
  },
];

export default consumerRoutes;
