import { BiChevronLeft, BiChevronRight, BiSearch } from "react-icons/bi";
import BreadcrumbBanner from "../../components/BreadcrumbBanner.tsx";
import Header from "./components/Header.tsx";
import { useEffect, useState } from "react";
import ListOffers from "./components/ListOffers.tsx";
import Filters from "./components/Filters.tsx";
import type { OfferTypes } from "../../types/OfferTypes.ts";
import api from "../../lib/axios.ts";
import { OfferService } from "../../service/OfferService.ts";
import NotFoundItem from "../../components/NotFoundItem.tsx";
import SearchWithFilters from "../../components/SearchWithFilters.tsx";
const SearchConsumer = () => {
  const [offers, setOffers] = useState<OfferTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!offers) {
      setLoading(false);
      return;
    }
    OfferService.getAll()
      .then(setOffers)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <Header />
      <BreadcrumbBanner currentPage="Ofertas" typeUser="consumidores" />
      <SearchWithFilters offers={offers} loading={loading} />
    </div>
  );
};

export default SearchConsumer;
