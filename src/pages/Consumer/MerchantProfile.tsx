import { BiChevronRight } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import Header from "./components/Header.tsx";
import { useEffect, useState } from "react";
import type { MerchantTypes } from "../../types/MerchantTypes.ts";
import api from "../../lib/axios.ts";
import { TbTruckDelivery } from "react-icons/tb";
import { FaLocationDot, FaSquareInstagram } from "react-icons/fa6";
import { FaCity, FaPhone, FaWhatsapp } from "react-icons/fa";
import Separator from "../../components/Separator.tsx";
import type { OfferTypes } from "../../types/OfferTypes.ts";
import type { FlyerTypes } from "../../types/FlyerTypes.ts";
import ListOffers from "./components/ListOffers.tsx";
import FlyersCarousel from "./components/FlyersCarousel.tsx";
import { formatedHour } from "../../utils/FormatedHours.ts";
import { MerchantService } from "../../service/MerchantService.ts";

const MerchantProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [merchant, setMerchant] = useState<MerchantTypes>();
  const [offers, setOffers] = useState<OfferTypes[]>([]);
  const [flyers, setFlyers] = useState<FlyerTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!offers) {
      setLoading(false);
      return;
    }
    if (!flyers) {
      setLoading(false);
      return;
    }
    MerchantService.getById(id).then((data) => {
      setMerchant(data);
      setFlyers(data.panfletos);
      setOffers(data.ofertas);
    }).catch(console.error).finally(() => setLoading(false));
  }, [id]);
  const getPrimeiraLetra = (nome: string | undefined): string => {
    return nome?.charAt(0).toUpperCase() || "?";
  };

  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center ">
        <div className="bg-dark-yellow w-full h-15 md:text-xl flex items-center font-kaisei font-bold px-10 md:px-20 lg:px-30 gap-5 ">
          <button
            onClick={() => navigate("/consumidores/home")}
            className="text-white font-normal hover:underline"
          >
            Home
          </button>
          <BiChevronRight className="text-2xl" />
          <p>{merchant?.nome ?? "Comércio não encontrado"} </p>
        </div>

        <div className="relative flex flex-col w-full md:w-[80%] lg:w-[70%] mt-20 md:m-20 rounded-2xl bg-dark-orange justify-center items-center p-10 text-white">
          <div className="flex flex-col justify-center items-center text-center gap-5 mb-10">
            {merchant?.fotoUrl ? (
              <img
                className="absolute top-[-15%] rounded-full w-30 object-cover outline-3 outline-dark-orange"
                src={merchant?.fotoUrl}
                alt={`Logo de ${merchant?.nome}`}
              />
            ) : (
              <div className="absolute top-[-15%] rounded-full w-30 h-30 bg-dark-yellow outline-3 outline-dark-orange">
                <div className="w-full h-full bg-dark-yellow text-white text-lg rounded-full flex items-center justify-center">
                  <p className="text-3xl">{getPrimeiraLetra(merchant?.nome)}</p>
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
        </div>
      </div>
      <Separator section="Panfletos" />
      <FlyersCarousel flyers={flyers} loading={loading} />
      <Separator section="Ofertas" />
      <div className="w-full flex justify-center items-center">
        <ListOffers
          cardCount={16}
          offers={offers}
          order="last"
          loading={loading}
        />
      </div>
    </>
  );
};

export default MerchantProfile;
