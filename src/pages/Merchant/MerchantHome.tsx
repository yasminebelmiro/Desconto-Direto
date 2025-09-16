import Separator from "../../components/Separator.tsx"
import FlyersCarousel from "./components/FlyersCarousel.tsx"
import Header from "./components/Header.tsx"
import ListOffers from "./components/ListOffers.tsx"

const MerchantHome = () => {
  return (
    <>
     <Header />
      <div>
        <Separator section="Meus panfletos" route="/comerciantes/novo-panfleto"/>
         <FlyersCarousel />
        <Separator section="Minhas ofertas" route="/comerciantes/nova-oferta"/>
        <div className="flex items-center justify-center">
        <ListOffers/>
        </div>
      </div>
    </>
  )
}

export default MerchantHome