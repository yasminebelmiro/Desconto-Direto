import React from "react";
import { FaFilter } from "react-icons/fa";
interface FiltersProps {
  totalQtyProducts?: number;
  currentPage?: number;
  offersPerPage?: number;
  order: string;
  setOrder: React.Dispatch<React.SetStateAction<string>>;
}
const Filters = ({
  totalQtyProducts,
  currentPage,
  offersPerPage,
  order,
  setOrder,
}: FiltersProps) => {
  const startItem = (currentPage! - 1) * offersPerPage! + 1;
  const endItem = Math.min(currentPage! * offersPerPage!, totalQtyProducts!);
  return (
    <div className="font-inter text-dark-yellow bg-dark-blue w-full h-15  lg:px-30 flex items-center justify-between p-5 text-sm md:text-md">
      <p className="">
        {startItem}-{endItem} de {totalQtyProducts} resultados
      </p>

      <div className="w-auto flex items-center justify-end gap-5">
        <p>Ordenar por </p>
        <select
          className="bg-white h-8 text-dark-blue outline-none"
          name="order"
          id="order"
          value={order}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setOrder(e.target.value)
          }
        >
          <option value="exp-asc">Vencimento mais próximo</option>
          <option value="exp-desc">Vencimento mais distante</option>
          <option value="relevance">Relevância</option>
          <option value="price-asc">Menor preço</option>
          <option value="price-desc">Maior preço</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
