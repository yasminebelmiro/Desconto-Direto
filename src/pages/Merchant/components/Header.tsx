import { useEffect, useState } from "react";
import { FaRegBell, FaRegHeart, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import api from "../../../service/api/axios.ts";
import { DiVim } from "react-icons/di";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [imageMerchant, setImageMerchant] = useState<string | null>(null);
  const [nameMerchant, setNameMerchant] = useState<string>("");

  const userId = localStorage.getItem("userId");
  const firtsLetter = nameMerchant[0];
  console.log(firtsLetter);

  useEffect(() => {
    try {
      const fetchId = async () => {
        const response = await api.get(`/comercios/find/${userId}`);
        const { fotoUrl, nome } = response.data;
        setImageMerchant(fotoUrl);
        setNameMerchant(nome);
      };
      fetchId();
    } catch (error) {}
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
          <Link to={""}>
            <IoSearch size={22} />
          </Link>
          {/* <Link to={""}>
            <FaRegBell size={20} />
          </Link> */}
          <Link to={""}>
            {imageMerchant ? (
              <img className="w-10 h-10 rounded-full object-cover" src={imageMerchant ?? undefined} alt="Imagem de perfil" />
            ) : (
              <div className="w-10 h-10 bg-dark-yellow text-white text-lg rounded-full flex items-center justify-center">
                {firtsLetter}
              </div>
            )}
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
            to={""}
          >
            <FaSearch /> Pesquisar
          </Link>
          {/* <Link
            className="font-inter flex gap-5 items-center w-full
           hover:text-dark-yellow"
            to={""}
          >
            <FaRegBell /> Notificações
          </Link> */}
          <Link
            className="font-inter flex gap-5 items-center w-full
           hover:text-dark-yellow"
            to={""}
          >
            <img src="" alt="Imagem de perfil" />
          </Link>
        </menu>
      )}
    </>
  );
};

export default Header;
