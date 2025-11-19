import { BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header.tsx";
import { useEffect, useState } from "react";
import type { MerchantTypes } from "../../types/MerchantTypes.ts";
import { TbTruckDelivery } from "react-icons/tb";
import { FaLocationDot, FaSquareInstagram } from "react-icons/fa6";
import { FaCity, FaPhone, FaWhatsapp } from "react-icons/fa";
import { MerchantService } from "../../service/MerchantService.ts";
import ReactModal from "react-modal";
import { toast } from "react-toastify";

const Profile = () => {
  const userId = localStorage.getItem("token");
  const navigate = useNavigate();
  const [merchant, setMerchant] = useState<MerchantTypes>();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const formatedHour = (time: string) => {
    if (!time) return "N/A";
    const [hour, minute] = time.split(":");
    return `${hour}:${minute}`;
  };

  useEffect(() => {
    MerchantService.getById(userId).then(setMerchant).catch(console.error);
  }, []);

  const handleDeleteOffer = (id: string | undefined) => {
    if (id === undefined) return;
    MerchantService.delete(id).then(() => toast("Conta excluida com sucesso!"));
    
    navigate("/")
  };

  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center ">
        <div className="bg-dark-yellow w-full h-15 md:text-xl flex items-center font-kaisei font-bold px-10 md:px-20 lg:px-30 gap-5 ">
          <button
            onClick={() => navigate("/comerciantes/home")}
            className="text-white font-normal hover:underline"
          >
            Home
          </button>
          <BiChevronRight className="text-2xl" />
          <p>{merchant?.nome ?? "Comércio não encontrado"} </p>
        </div>

        <div className="relative flex flex-col w-full md:w-[80%] lg:w-[70%] mt-20 md:mt-20 rounded-2xl bg-dark-orange justify-center items-center p-10 text-white">
          <div className="flex flex-col justify-center items-center text-center gap-5 mb-10">
            {merchant?.fotoUrl ? (
              <img
                className="absolute top-[-10%] md:top-[-20%] rounded-full w-30 object-cover outline-3 outline-dark-orange"
                src={merchant?.fotoUrl}
                alt={`Logo de ${merchant?.nome}`}
              />
            ) : (
              <div className="absolute top-[-15%] rounded-full w-30 h-30 bg-dark-yellow outline-3 outline-dark-orange">
                <div className="w-full h-full bg-dark-yellow text-white text-lg rounded-full flex items-center justify-center">
                  <p className="text-3xl">{merchant?.nome[0]}</p>
                </div>
              </div>
            )}

            <div className="pt-10">
              <h1 className="font-kaisei text-xl font-bold">
                {merchant?.nome}
              </h1>
              <h2> {merchant?.categoria}</h2>
              {merchant?.horarioAbertura && merchant?.horarioFechamento && (
                <h3>
                  Horário de funcionamento:{" "}
                  {formatedHour(merchant?.horarioAbertura)} -{" "}
                  {formatedHour(merchant?.horarioFechamento)}
                </h3>
              )}
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full items-start justify-evenly ">
            <div>
              <ul>
                <li className="flex gap-4 justify-start items-center">
                  <FaLocationDot size={20} className="t" />
                  {merchant?.endereco && merchant?.bairro
                    ? `${merchant?.endereco}, ${merchant?.bairro}`
                    : "N/A"}
                </li>
                <li className="flex gap-4 justify-start items-center">
                  <FaCity size={20} className="t" />{" "}
                  {merchant?.cep ? merchant?.cep : "N/A"}{" "}
                </li>
                <li className="flex gap-4 justify-start items-center">
                  <FaPhone size={20} className="t" />
                  {merchant?.telefone ? merchant?.telefone : "N/A"}{" "}
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="flex gap-4 justify-start items-center">
                  <FaWhatsapp size={20} className="t" />{" "}
                  {merchant?.telefoneCelular
                    ? merchant?.telefoneCelular
                    : "N/A"}
                </li>
                <li className="flex gap-4 justify-start items-center">
                  <TbTruckDelivery size={20} className="t" /> Faz entrega:{" "}
                  {merchant?.fazEntrega ? "Sim" : "Não"}{" "}
                </li>
                <li className="flex gap-4 justify-start items-center">
                  <FaSquareInstagram size={20} className="t" />{" "}
                  {merchant?.instagram ? merchant?.instagram : "N/A"}
                </li>
              </ul>
            </div>
          </div>
          <button
            onClick={() => navigate("/comerciantes/editar-perfil")}
            className="w-full md:w-30 md:absolute top-0 right-4 h-10 mt-4 bg-dark-yellow text-xl text-white rounded-2xl cursor-pointer"
          >
            Editar
          </button>
          <button
            onClick={() => setIsOpenModal(true)}
            className="md:hidden w-full  top-0 right-4 h-10 mt-4 bg-red-700 text-xl text-white rounded-2xl cursor-pointer"
          >
            Deletar minha conta
          </button>
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
                Tem certeza que deseja excluir esta oferta?
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
                    handleDeleteOffer(merchant?.id);
                    setIsOpenModal(false);
                  }}
                >
                  Confirmar
                </button>
              </div>
            </div>
          </ReactModal>
        </div>
        <button
          onClick={() => setIsOpenModal(true)}
          className="hidden md:flex text-center w-1/3 h-10 items-center justify-center m-5 bg-red-700 text-xl text-white rounded-2xl cursor-pointer"
        >
          Deletar minha conta
        </button>
      </div>
    </>
  );
};

export default Profile;
