import Loading from "../../../components/Loading.tsx";
import NotFoundItem from "../../../components/NotFoundItem.tsx";
import type { OfferTypes } from "../../../types/OfferTypes.ts";
import OfferCard from "./OfferCard.tsx";

interface ListOffersProps {
  offers: OfferTypes[];
}

const ListOffers = ({offers}: ListOffersProps) => {

  return (
    <>{!offers ? (
            <Loading />
          ) : offers.length <= 0 ? (
            <NotFoundItem />
          ) : (<div className="flex items-center justify-center gap-10 py-10 md:px-10 flex-wrap lg:grid grid-cols-4 lg:w-250 ">
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          {...offer}
        />
      ))}
    </div>)}
    </>
    
  );
};

export default ListOffers;
