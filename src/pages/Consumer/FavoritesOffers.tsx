import { BiChevronLeft, BiChevronRight, BiSearch } from "react-icons/bi";
import BreadcrumbBanner from "../../components/BreadcrumbBanner.tsx";
import Header from "./components/Header.tsx";
import { useEffect, useState } from "react";
import ListOffers from "./components/ListOffers.tsx";
import Filters from "./components/Filters.tsx";
import type { OfferTypes } from "../../types/OfferTypes.ts";
import api from "../../lib/axios.ts";
import SearchWithFilters from "../../components/SearchWithFilters.tsx";
import { ConsumerService } from "../../service/ConsumerService.ts";
const FavoritesOffers = () => {
  const [offers, setOffers] = useState<OfferTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const userId = localStorage.getItem("token");

  useEffect(() => {
    if (!offers) {
      setLoading(false);
      return;
    }
    ConsumerService.getById(userId)
      .then((data) => setOffers(data.ofertasPreferidas))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [offers]);

  return (
    <div>
      <Header />
      <BreadcrumbBanner currentPage="Favoritos" typeUser="consumidores" />
      <SearchWithFilters offers={offers} loading={loading} />
    </div>
  );
};

export default FavoritesOffers;
