import React from "react";
import notFoundLogo from "../assets/notFound.png";
const NotFoundItem = () => {
  return (
    <div className="flex flex-col bg-dark-blue w-auto rounded-2xl items-center justify-center p-5 m-10 gap-5 text-white font-kaisei font-bold">
      <img className="w-10" src={notFoundLogo} alt="Não encontrado" />
        <p className="">
          Nenhum resultado encontrado!
        </p>
    </div>
  );
};

export default NotFoundItem;
