import React, { useState } from "react";
import { FaRegBell, FaRegHeart, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../../assets/logo.png";

import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <section className="bg-dark-blue flex items-center justify-between px-10 py-5">
        <img className="w-8" src={logo} alt="Logo DD" />
        <button
          className="text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <GiHamburgerMenu className="text-2xl hover:text-dark-yellow" />
        </button>
        <menu className="hidden md:flex gap-5">
          <Link to={""}>
            <FaSearch />
          </Link>
          <Link to={""}>
            <FaRegBell />
          </Link>
          <Link to={""}>
            <FaRegHeart />
          </Link>
        </menu>
      </section>
      {isMenuOpen && (
        <menu className="bg-dark-blue font-inter text-white w-full h-auto flex flex-col justify-between items-start p-8 gap-5">
          <Link className="font-inter flex gap-5 items-center w-full hover:text-dark-yellow" to={""}>
            <FaSearch  /> Pesquisar
          </Link>
          <Link className="font-inter flex gap-5 items-center w-full hover:text-dark-yellow" to={""}>
            <FaRegBell  /> Notificações
          </Link>
          <Link className="font-inter flex gap-5 items-center w-full hover:text-dark-yellow" to={""}>
            <FaRegHeart  /> Favoritos
          </Link>
        </menu>
      )}
    </>
  );
};

export default Header;
