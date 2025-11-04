import { useEffect, useState } from "react";
import { FaCartPlus, FaRegBell, FaRegHeart, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { MdLocalOffer } from "react-icons/md";
import { TbBuildingPlus } from "react-icons/tb";
import { LuLogOut } from "react-icons/lu";
import { LogOut } from "../../../service/authService.ts";
import type { MerchantTypes } from "../../../types/MerchantTypes.ts";
import { MerchantService } from "../../../service/MerchantService.ts";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [merchant, setMerchant] = useState<MerchantTypes>();
  const userId = localStorage.getItem("userId");


  useEffect(() => {
    MerchantService.getById(userId).then(setMerchant).catch(console.error);
  }, []);
  return (
    <>
      <section
        className="bg-dark-blue flex items-center justify-between
       px-10 py-5 lg:px-30"
      >
        <img className="w-8" src={logo} alt="Logo DD" />
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
          <Link to={"/comerciantes/nova-oferta"}>
            <IoSearch size={22} />
          </Link>

          <Link to={"/comerciantes/perfil"}>
            {merchant?.fotoUrl ? (
              <img
                className="w-10 h-10 rounded-full object-cover"
                src={merchant?.fotoUrl ?? undefined}
                alt="Imagem de perfil"
              />
            ) : (
              <div className="w-10 h-10 bg-dark-yellow text-white text-lg rounded-full flex items-center justify-center">
                {merchant?.nome[0]}
              </div>
            )}
          </Link>
          <Link to="/comerciantes" onClick={LogOut}>
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
            to={"v"}
          >
            <FaCartPlus />
            <p className="">Adicionar produto</p>
          </Link>
          <Link
            className="font-inter flex gap-5 items-center w-full
           hover:text-dark-yellow"
            to={"/comerciantes/nova-oferta"}
          >
            <MdLocalOffer />
            <p className="">Adicionar oferta</p>
          </Link>
          <Link
            className="font-inter flex gap-5 items-center w-full
           hover:text-dark-yellow"
            to={"/comerciantes/novo-panfleto"}
          >
            <TbBuildingPlus />
            <p className="">Adicionar panfleto</p>
          </Link>
          <Link
            className="font-inter flex gap-5 items-center w-full
           hover:text-dark-yellow"
            to={"/comerciantes/perfil"}
          >
            {merchant?.fotoUrl ? (
              <div className="flex  gap-5">
                <img
                  className="w-7 h-7 rounded-full object-cover"
                  src={merchant?.fotoUrl ?? undefined}
                  alt="Imagem de perfil"
                />
                <p className="">Perfil</p>
              </div>
            ) : (
              <div className="w-7 h-7 bg-dark-yellow text-white text-lg rounded-full flex items-center justify-center">
                {merchant?.nome[0]}
                <p className="">Perfil</p>
              </div>
            )}
          </Link>
          <Link
            to="/comerciantes"
            className="font-inter flex gap-5 items-center w-full
           hover:text-dark-yellow"
          >
            <LuLogOut size={20} /> Sair
          </Link>
        </menu>
      )}
    </>
  );
};

export default Header;
