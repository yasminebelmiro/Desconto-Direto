import OfferCard from "./OfferCard.tsx";

interface ListOffersProps {
  offers: {
    id: number;
    imgMerchant: string;
    imgProduct: string;
    name: string;
    expiration: string;
    price: number;
    likes: number;
  }[];
  cardCount: number;
  order: string;
}

function ListOffers({ offers, cardCount, order }: ListOffersProps) {
  const offersToShow = offers.slice(0, cardCount);
  const formatedPrice = (price: number) => {
    return price.toFixed(2).replace(".", ",");
  };

  const sortOffers = (offers: ListOffersProps["offers"], order: string) => {
    switch (order) {
      case "exp-asc":
        return [...offers].sort(
          (a, b) =>
            new Date(a.expiration).getTime() - new Date(b.expiration).getTime()
        );
      case "exp-desc":
        return [...offers].sort(
          (a, b) =>
            new Date(b.expiration).getTime() - new Date(a.expiration).getTime()
        );

      case "price-asc":
        return offers.sort((a, b) => a.price - b.price);
      case "price-desc":
        return offers.sort((a, b) => b.price - a.price);
      case "relevance":
        return offers.sort((a, b) => b.likes - a.likes);
      default:
        return offers;
    }
  };

  const sortedOffers = sortOffers(offersToShow, order);
  console.log(sortedOffers);

  return (
    <div className="flex items-center justify-center gap-10 py-10 md:px-10 flex-wrap lg:grid grid-cols-4 lg:w-250 ">
      {sortedOffers.map((offer) => (
        <OfferCard
          key={offer.id}
          imgMerchant={offer.imgMerchant}
          imgProduct={offer.imgProduct}
          name={offer.name}
          expiration={offer.expiration}
          price={formatedPrice(offer.price)}
          likes={offer.likes}
        />
      ))}
    </div>
  );
}

export default ListOffers;
