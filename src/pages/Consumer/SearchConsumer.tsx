import { BiSearch } from "react-icons/bi";
import BreadcrumbBanner from "../../components/BreadcrumbBanner.tsx";
import Header from "./components/Header.tsx";
import { useState } from "react";
import offers from "../../mocks/offers.json" with  { type: "json" };
import ListOffers from "./components/ListOffers.tsx";
import Filters from "./components/Filters.tsx";
const SearchConsumer = () => {
  const [search, setSearch] = useState("");
  const filteredOffers = offers.filter((offer) =>
    offer.name.toLowerCase().startsWith(search.toLowerCase())
  );
  console.log(filteredOffers);
  return (
    <div>
      <Header />
      <BreadcrumbBanner currentPage="Ofertas" typeUser="consumidores" />
      <form className="flex items-center justify-between px-5 w-full h-15 font-bold">
        <input
          className="w-[80%] text-dark-yellow placeholder:text-dark-yellow outline-none"
          type="text"
          placeholder="Pesquise pelo produto que deseja"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="">
          <BiSearch className="text-dark-yellow text-2xl cursor-pointer" />
        </button>
      </form>
      <Filters/>
      {filteredOffers.length > 0 ? <ListOffers offers={filteredOffers} /> 
      : <p className="text-center m-10 font-inter">Nenhum resultado encontrado</p>}
    </div>
  );
};

export default SearchConsumer;
