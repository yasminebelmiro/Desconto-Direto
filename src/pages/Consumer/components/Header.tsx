import { useState } from "react";
import { FaRegBell, FaRegHeart, FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { LogOut } from "../../../service/authService.ts";
import { BiTrash } from "react-icons/bi";
import ReactModal from "react-modal";
import { ConsumerService } from "../../../service/ConsumerService.ts";
import { toast } from "react-toastify";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const userId = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleDeleteAccount = (id: string | undefined) => {
    if (id === undefined) return;
    ConsumerService.delete(id).then(() => toast("Conta excluida com sucesso!"));

    navigate("/");
  };


  return (
    <>
      <section
        className="bg-dark-blue flex items-center justify-between
       px-10 py-5 lg:px-30"
      >
        <img
          className="w-8 cursor-pointer"
          src={logo}
          alt="Logo DD"
          onClick={() => navigate("/consumidores/home")}
        />
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
          <Link to="/consumidores/buscar" >
            <IoSearch size={22} />
          </Link>

          <Link to={"/consumidores/favoritos"}>
            <FaRegHeart size={20} />
          </Link>
          <Link onClick={() => setIsOpenModal(true)} to={"#"}>
            <BiTrash size={22} color="red" />
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
          <Link
            className="font-inter flex gap-5 items-center w-full
           hover:bg-dark-yellow bg-red-700 p-2 rounded-lg"
            onClick={() => setIsOpenModal(true)}
            to={"#"}
          >
            <BiTrash size={20}/> Deletar minha conta
          </Link>
        </menu>
      )}
      <ReactModal
        isOpen={isOpenModal}
        onRequestClose={() => setIsOpenModal(false)}
        ariaHideApp={false}
        style={{
          overlay: {
            zIndex: 1000,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            zIndex: 1001,
            position: "relative",
            inset: "auto",
          },
        }}
        className="flex justify-center items-center w-full h-full p-8 max-w-md mx-auto"
      >
        <div className="flex flex-col items-center bg-white w-auto p-10 h-auto rounded-2xl">
          <p className="text-lg font-bold">
            Tem certeza que deseja excluir sua conta?
          </p>
          <div className="flex gap-4 mt-4">
            <button
              className="p-4 w-1/2 bg-red-500 rounded-2xl text-white font-bold cursor-pointer"
              onClick={() => setIsOpenModal(false)}
            >
              Cancelar
            </button>
            <button
              className=" p-4 w-1/2 bg-dark-blue rounded-2xl text-dark-yellow font-bold cursor-pointer"
              onClick={() => {
                handleDeleteAccount(userId as string);
                setIsOpenModal(false);
              }}
            >
              Confirmar
            </button>
          </div>
        </div>
      </ReactModal>
    </>
  );
};

export default Header;
