import CommerceAddFlyer from "../Pages/CommerceAddFlyer/CommerceAddFlyer";
import CommerceAddOffer from "../Pages/CommerceAddOffer/CommerceAddOffer";
import CommerceAddProduct from "../Pages/CommerceAddProduct/CommerceAddProduct";
import CommerceEditOffer from "../Pages/CommerceEditOffer/CommerceEditOffer";
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
    path: "/comercio/home/:idCommerce",
    element: <CommerceHome />,
  },
  {
    path: "/comercio/:idCommerce/novo-panfleto",
    element: <CommerceAddFlyer />,
  },
  {
    path: "/comercio/:idCommerce/meu-perfil",
    element: <CommerceProfile />,
  },
  {
    path: "/comercio/:idCommerce/meu-perfil/editar",
    element: <CommerceEditProfile />,
  },
  {
    path: "/comercio/:idCommerce/editar-oferta/:idOffer",
    element : <CommerceEditOffer/>,
  },
  {
    path: "/comercio/:idCommerce/nova-oferta",
    element: <CommerceAddOffer/>,
  },
  {
    path: "/comercio/:idCommerce/novo-produto",
    element: <CommerceAddProduct />,
  },
  {
    path: "/comercio/:id/meu-perfil/editar",
    element: <CommerceEditProfile />,
  },

];

export default commerceRoutes;
