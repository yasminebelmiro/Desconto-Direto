import React from "react";
import { FaFilter } from "react-icons/fa";

const Filters = () => {
  return (
    <div className="font-inter text-dark-yellow bg-dark-blue w-full h-15 flex items-center justify-between p-5 text-sm md:text-md">
      <p className="">1-8 de 9 resultados</p>

      <div className="w-auto flex items-center justify-end gap-5">
        <p>Ordenar por </p>
        <select
          className="bg-white h-8 text-dark-blue outline-none"
          name="order"
          id="order"
        >
          <option value="relevance">Relevância</option>
          <option value="price-asc">Menor preço</option>
          <option value="price-desc">Maior preço</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
