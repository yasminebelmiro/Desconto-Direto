import CommerceAddFlyer from "../Pages/CommerceAddFlyer/CommerceAddFlyer";
import CommerceAddOffer from "../Pages/CommerceAddOffer/CommerceAddOffer";
import CommerceAddProduct from "../Pages/CommerceAddProduct/CommerceAddProduct";
import CommerceEditProfile from "../Pages/CommerceEditProfile/CommerceEditProfile";
import CommerceHome from "../Pages/CommerceHome/CommerceHome";
import CommerceProfile from "../Pages/CommerceProfile/CommerceProfile";
import RegisterMarket from "../Pages/RegisterMarket/RegisterMarket";

const commerceRoutes = [
  {
    path: "/comercio/casdastro",
    element: <RegisterMarket />,
  },
  {
    path: "/comercio/home",
    element: <CommerceHome />,
  },
  {
    path: "/comercio/novo-panfleto",
    element: <CommerceAddFlyer />,
  },
  {
    path: "/comercio/meu-perfil",
    element: <CommerceProfile />,
  },
  {
    path: "/comercio/nova-oferta",
    element: <CommerceAddOffer />,
  },
  {
    path: "/comercio/novo-produto",
    element: <CommerceAddProduct />,
  },
  {
    path: "/comercio/meu-perfil/editar",
    element: <CommerceEditProfile />,
  },

];

export default commerceRoutes;
