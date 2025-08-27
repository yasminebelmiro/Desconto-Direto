import { useState } from "react";
import { FaRegBell, FaRegHeart, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../../assets/logo.png";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <section className="bg-dark-blue flex items-center justify-between
       px-10 py-5 lg:px-30">
        <img className="w-8" src={logo} alt="Logo DD" />
        <button
          className="text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <GiHamburgerMenu className="md:hidden text-2xl hover:text-dark-yellow" />
        </button>
        <menu className="text-dark-yellow text-2xl hidden md:flex items-center
         justify-center gap-5">
          <Link to={""}>
            <IoSearch size={22} />
          </Link>
          <Link to={""}>
            <FaRegBell size={20} />
          </Link>
          <Link to={""}>
            <FaRegHeart size={20} />
          </Link>
        </menu>
      </section>
      {isMenuOpen && (
        <menu className="bg-dark-blue font-inter text-white w-full h-auto 
        flex flex-col justify-between items-start p-8 gap-5">
          <Link className="font-inter flex gap-5 items-center w-full
           hover:text-dark-yellow" to={""}>
            <FaSearch  /> Pesquisar
          </Link>
          <Link className="font-inter flex gap-5 items-center w-full
           hover:text-dark-yellow" to={""}>
            <FaRegBell  /> Notificações
          </Link>
          <Link className="font-inter flex gap-5 items-center w-full
           hover:text-dark-yellow" to={""}>
            <FaRegHeart  /> Favoritos
          </Link>
        </menu>
      )}
    </>
  );
};

export default Header;
