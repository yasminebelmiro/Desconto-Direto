import { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactModal from "react-modal";
import type { FlyerTypes } from "../../../types/FlyerTypes.ts";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation } from "swiper/modules";
import api from "../../../lib/axios.ts";
import type { MerchantTypes } from "../../../types/MerchantTypes.ts";
import { useNavigate } from "react-router-dom";
import Loading from "../../../components/Loading.tsx";
import NotFoundItem from "../../../components/NotFoundItem.tsx";
import { MerchantService } from "../../../service/MerchantService.ts";
import { FlyerService } from "../../../service/FlyerService.ts";
import { toast } from "react-toastify";

interface FlyersCarouselProps {
  flyers: FlyerTypes[];
  loading: boolean;
}
const FlyersCarousel = ({ flyers, loading }: FlyersCarouselProps) => {
  const [flyer, setFlyer] = useState<FlyerTypes[]>([]);
  const [flyerSelected, setFlyerSelected] = useState<null | FlyerTypes[][0]>(
    null
  );
  const [merchant, setMerchant] = useState<MerchantTypes>();
  const [modalView, setModalView] = useState<"details" | "confirm">("details");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMerchant = async () => {
      if (flyerSelected) {
        MerchantService.getById(flyerSelected.comercioId)
          .then(setMerchant)
          .catch(console.error);
      }
    };
    fetchMerchant();
    setFlyer(flyers);
  }, [flyers, flyerSelected?.comercioId]);

  const formatedData = (date: string) => {
    const data = new Date(date);
    return data.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const handleDeleteFlyer = (id: string) => {
    if (!id) return;
    FlyerService.delete(id)
      .then(() => {
        setFlyerSelected(null);
      })
      .catch(console.error);
      toast.success("Panfleto excluído com sucesso!");
  };

  const handleCloseModal = () => {
    setFlyerSelected(null);

    setTimeout(() => {
      setModalView("details");
    }, 300);
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : flyer.length === 0 ? (
        <NotFoundItem />
      ) : (
        <div>
          <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            breakpoints={{
              340: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            slidesPerGroup={1}
            spaceBetween={0}
            autoplay={{ delay: 3000 }}
            speed={2000}
            className="w-auto z-10"
          >
            {flyer.map((item) => (
              <SwiperSlide key={item.id} className="w-full">
                <img
                  src={item.fotoUrl}
                  alt={`Panfleto de ${merchant?.nome} ${item.fotoUrl} `}
                  className="h-[200px] md:h-[300px] lg:h-[450px] w-full object-fill"
                  onClick={() => setFlyerSelected(item)}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <ReactModal
            isOpen={!!flyerSelected}
            onRequestClose={handleCloseModal}
            contentLabel="Panfleto Detalhes"
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
            className="flex flex-col md:flex-row justify-center items-center overflow-y-hidden h-full p-8  max-w-4xl mx-auto"
          >
            {modalView === "details" && flyerSelected && (
              <div className="flex flex-col md:flex-row items-center bg-white w-full p-10 h-auto rounded-2xl">
                <div className="w-full lg:w-1/2  h-auto flex items-center justify-center">
                  <img
                    className="w-auto h-[80%] lg:w-[60%] lg:h-auto rounded-lg"
                    src={flyerSelected?.fotoUrl}
                    alt={`Panfleto de ${merchant?.nome} `}
                  />
                </div>
                <div className="pt-4 w-full lg:w-1/2  flex flex-col items-center gap-4">
                  <button
                    onClick={() =>
                      navigate(
                        `/consumidores/comercios/${flyerSelected?.comercioId}`
                      )
                    }
                    className="text-2xl font-bold hover:underline cursor-pointer"
                  >
                    {merchant?.nome}{" "}
                  </button>
                  <p>
                    Válido até{" "}
                    <span className="font-bold text-red-500">
                      {formatedData(
                        flyerSelected?.dataExpiracao ?? ""
                      ).toString()}
                    </span>
                  </p>
                  <button
                    className="p-4 w-1/2 bg-dark-blue rounded-2xl text-dark-yellow font-bold cursor-pointer"
                    onClick={handleCloseModal}
                  >
                    Fechar
                  </button>
                  <button
                    className="p-4 w-1/2 bg-red-500 rounded-2xl text-white font-bold cursor-pointer"
                    onClick={() => setModalView("confirm")}
                  >
                    Excluir
                  </button>
                </div>
              </div>
            )}
            {modalView === "confirm" && (
              <div className="flex flex-col items-center bg-white w-auto p-10 h-auto rounded-2xl">
                <p className="text-lg font-bold">
                  Tem certeza que deseja excluir este panfleto?
                </p>
                <div className="flex gap-4 mt-4">
                  <button
                    className="p-4 w-1/2 bg-red-500 rounded-2xl text-white font-bold cursor-pointer"
                    onClick={handleCloseModal}
                  >
                    Cancelar
                  </button>
                  <button className="p-4 w-1/2 bg-dark-blue rounded-2xl text-dark-yellow font-bold cursor-pointer" onClick={() => { handleDeleteFlyer(flyerSelected!.id); handleCloseModal(); }}>
                    Confirmar
                  </button>
                </div>
              </div>
            )}
          </ReactModal>
        </div>
      )}
    </>
  );
};

export default FlyersCarousel;
