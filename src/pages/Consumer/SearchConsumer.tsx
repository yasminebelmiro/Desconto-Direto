import { BiChevronLeft, BiChevronRight, BiSearch } from "react-icons/bi";
import BreadcrumbBanner from "../../components/BreadcrumbBanner.tsx";
import Header from "./components/Header.tsx";
import { useEffect, useState } from "react";
import ListOffers from "./components/ListOffers.tsx";
import Filters from "./components/Filters.tsx";
import type { OfferTypes } from "../../types/OfferTypes.ts";
import api from "../../service/api/axios.ts";
const SearchConsumer = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [order, setOrder] = useState("exp-asc");
  const [offers, setOffers] = useState<OfferTypes[]>([]);

   useEffect(() => {
      try {
        const fetchOffers = async () => {
          const response = await api.get("/ofertas/all");
          setOffers(response.data);
          console.log(response.data);
        };
        fetchOffers();
      } catch (error) {
        console.error(error);
      }
     
    }, [offers]);

  const offersPerPage = 16;

  const filteredOffers = offers.filter((offer) =>
    offer.produto.nome.toLowerCase().startsWith(search.toLowerCase())
  );

  const indexOfLastOffer = currentPage * offersPerPage;
  const indexOfFirstOffer = indexOfLastOffer - offersPerPage;

  const currentOffers = filteredOffers.slice(
    indexOfFirstOffer,
    indexOfLastOffer
  );

  const totalPages = Math.ceil(filteredOffers.length / offersPerPage);

  const backPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
    }
  };

  return (
    <div>
      <Header />
      <BreadcrumbBanner currentPage="Ofertas" typeUser="consumidores" />
      <form className="flex items-center justify-between px-5 w-full h-15 lg:px-30 font-bold">
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
      <Filters
        totalQtyProducts={filteredOffers.length}
        currentPage={currentPage}
        offersPerPage={offersPerPage}
        order={order}
        setOrder={setOrder}
      />
      <div className="flex flex-col items-center justify-center">
        {filteredOffers.length > 0 ? (
          <ListOffers
            offers={currentOffers}
            cardCount={offersPerPage}
            order={order}
          />
        ) : (
          <p className="text-center m-10 font-inter">
            Nenhum resultado encontrado
          </p>
        )}
        <div className="flex gap-5 mb-10">
          <button
            className=" p-2 h-10 min-w-10 w-auto "
            onClick={backPage}
            disabled={currentPage === 1}
          >
            <BiChevronLeft className="text-2xl " />
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={` p-2 h-10 min-w-10 w-auto ${
                currentPage === index + 1
                  ? "bg-dark-orange font-bol rounded-3xl text-white"
                  : ""
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className=" p-2 h-10 min-w-10 w-auto "
            onClick={nextPage}
            disabled={currentPage === totalPages}
          >
            <BiChevronRight className="text-2xl " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchConsumer;
