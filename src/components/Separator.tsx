import React from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { Link, Navigate, useNavigate } from "react-router-dom";
interface SeparatorProps {
  section: string;
  typeUser?: "consumidores" | "comerciantes";
  route?: string;
}
const Separator = ({ section, typeUser, route }: SeparatorProps) => {
  const navigate = useNavigate()
  return (
    <div className="bg-dark-yellow h-15 md:text-xl flex items-center justify-between font-kaisei text-white font-bold px-10 md:px-20 lg:px-30">
      <p>{section} </p>
      {typeUser && <Link to={`/${typeUser}/buscar`}>Ver mais</Link>}
      { route && (
        <button className="bg-dark-blue w-15 h-8 rounded-2xl flex justify-center items-center cursor-pointer"  onClick={() => navigate(route)}>
          <FaCirclePlus />
        </button>
      )}
    </div>
  );
};

export default Separator;
