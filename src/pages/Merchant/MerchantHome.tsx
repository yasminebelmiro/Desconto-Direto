import Separator from "../../components/Separator.tsx"
import FlyersCarousel from "./components/FlyersCarousel.tsx"
import Header from "./components/Header.tsx"
import ListOffers from "./components/ListOffers.tsx"

const MerchantHome = () => {
  return (
    <>
     <Header />
      <div>
        <Separator section="Panfletos" />
         <FlyersCarousel />
        <Separator section="Minhas ofertas" />
        <div className="flex items-center justify-center">
        <ListOffers/>
        </div>

      </div>
    </>
  )
}

export default MerchantHome