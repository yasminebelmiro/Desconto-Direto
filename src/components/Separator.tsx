import React from "react";
import { Link } from "react-router-dom";
interface SeparatorProps {
  section: string;
  typeUser?: "consumidores" | "comerciantes";
}
const Separator = ({ section, typeUser }: SeparatorProps) => {
  return (
    <div className="bg-dark-yellow h-15 md:text-xl flex items-center justify-start font-kaisei text-white font-bold pl-10">
      <p>{section} </p>
      {typeUser && <Link to={`/${typeUser}/buscar`}>Ver mais</Link>}
    </div>
  );
};

export default Separator;
