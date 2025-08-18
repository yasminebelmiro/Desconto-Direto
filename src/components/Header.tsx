import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
const Header = () => {
  const navigate = useNavigate();
  const [menuisOpen, setMenuIsOpen] = useState(false);
  return (
    <>
      <div className="bg-dark-blue font-inter text-white w-full h-25 flex justify-between items-center p-4">
        <a href="/">
          <img className="w-10" src={logo} />
        </a>
        <button className="lg:hidden" onClick={() => setMenuIsOpen(!menuisOpen)}> 
          <GiHamburgerMenu className="text-3xl hover:text-dark-yellow" />
        </button>
         <nav className="hidden lg:flex">
          <ul className="flex justify-between items-center gap-5">
            <li className="">
              <a href="#about">Sobre nós</a>
            </li>
            <li className="">
              <a href="#howWork">Como funciona?</a>
            </li>
            <li className="">
              <a href="#merchantArea">Área do comerciante</a>
            </li>
            <li
              className=""
              onClick={() => navigate("/login")}
            >
              Login
            </li>
            <li
              className=""
              onClick={() => navigate("/cadastro/consumidor")}
            >
              Cadastro
            </li>
          </ul>
        </nav>
      </div>
      {menuisOpen && (
        <nav className="bg-dark-blue font-inter text-white w-full h-auto flex justify-between items-center p-8">
          <ul className=" w-full flex flex-col justify-between items-start gap-5">
            <li className="hover:text-dark-yellow">
              <a href="#about">Sobre nós</a>
            </li>
            <li className="hover:text-dark-yellow">
              <a href="#howWork">Como funciona?</a>
            </li>
            <li className="hover:text-dark-yellow">
              <a href="#merchantArea">Área do comerciante</a>
            </li>
            <li
              className="bg-dark-yellow text-center p-3 w-40 text-dark-blue font-bold rounded-md hover:bg-light-yellow"
              onClick={() => navigate("/login")}
            >
              Login
            </li>
            <li
              className="bg-dark-yellow text-center p-3 w-40 text-dark-blue font-bold rounded-md hover:bg-light-yellow"
              onClick={() => navigate("/cadastro/consumidor")}
            >
              Cadastro
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Header;
