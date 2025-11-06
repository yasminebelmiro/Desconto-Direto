import { useState } from "react";
import { FaRegBell, FaRegHeart, FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { LogOut } from "../../../service/authService.ts";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <section
        className="bg-dark-blue flex items-center justify-between
       px-10 py-5 lg:px-30"
      >
        <img className="w-8 cursor-pointer" src={logo} alt="Logo DD" onClick={() => navigate("/consumidores/home")} />
        <button
          className="text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <GiHamburgerMenu className="md:hidden text-2xl hover:text-dark-yellow" />
        </button>
        <menu
          className="text-dark-yellow text-2xl hidden md:flex items-center
         justify-center gap-5"
        >
          <Link to="/consumidores/buscar">
            <IoSearch size={22} />
          </Link>

          <Link to={"/consumidores/favoritos"}>
            <FaRegHeart size={20} />
          </Link>
          <Link to={"/"} onClick={LogOut}>
            <LuLogOut size={20} />
          </Link>
        </menu>
      </section>
      {isMenuOpen && (
        <menu
          className="bg-dark-blue font-inter text-white w-full h-auto 
        flex flex-col justify-between items-start p-8 gap-5"
        >
          <Link
            className="font-inter flex gap-5 items-center w-full
           hover:text-dark-yellow"
            to="/consumidores/buscar"
          >
            <FaSearch /> Pesquisar
          </Link>
          <Link
            className="font-inter flex gap-5 items-center w-full
           hover:text-dark-yellow"
            to={"/consumidores/favoritos"}
          >
            <FaRegHeart /> Favoritos
          </Link>
          <Link
            className="font-inter flex gap-5 items-center w-full
           hover:text-dark-yellow"
            to={"/"}
            onClick={LogOut}
          >
            <LuLogOut size={20} /> Sair
          </Link>
        </menu>
      )}
    </>
  );
};

export default Header;
