import React, { useEffect, useState } from "react";
import BreadcrumbBanner from "../../components/BreadcrumbBanner.tsx";
import { IoSearch } from "react-icons/io5";
import type { ProductType } from "../../types/ProductTypes.ts";

const NewOffer = () => {
  const [search, setSearch] = useState<string>("");
  const [products, setProducts] = useState<ProductType[]>([]);
  const searchResult = products.filter((product) =>
    product.nome.toLowerCase().startsWith(search.toLowerCase())
  );

  useEffect(()=> {},[])
  return (
    <div>
      <BreadcrumbBanner
        currentPage="Cadastrar oferta"
        typeUser="comerciantes"
      />
      <div className="flex flex-col p-10 items-center justify-center">
        <div className="flex items-center justify-center px-5 w-[80%] h-15 border-2 border-dark-orange rounded-lg text-dark-orange">
          <input
            type="text"
            className="w-full outline-none"
            onChange={(e) => setSearch(e.target.value)}
          />
          <IoSearch size={22} />
        </div>
        <div>{}</div>
      </div>
    </div>
  );
};

export default NewOffer;
