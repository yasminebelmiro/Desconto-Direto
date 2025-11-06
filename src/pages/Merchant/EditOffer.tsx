import React, { useEffect, useState } from "react";
import BreadcrumbBanner from "../../components/BreadcrumbBanner.tsx";
import type { OfferTypes } from "../../types/OfferTypes.ts";
import { useForm } from "react-hook-form";
import { OfferSchema, type OfferData } from "../../schemas/OfferSchema.ts";
import { zodResolver } from "@hookform/resolvers/zod";

import { useNavigate, useParams } from "react-router-dom";
import Header from "./components/Header.tsx";
import { onError } from "../../utils/handleError.ts";
import { OfferService } from "../../service/OfferService.ts";
import { toast } from "react-toastify";

const EditOffer = () => {
  const [offer, setOffer] = useState<OfferTypes | undefined>();

  const { offerId } = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<OfferData>({
    resolver: zodResolver(OfferSchema),
  });

  useEffect(() => {
  
    OfferService.getById(offerId as string)
      .then((data) => {
        setOffer(data);
      })
      .catch(console.error);
  }, []);

  const onSubmit = async (data: OfferData) => {
    // const updatedData = { ...offer, ...data };
    // console.log(offer);
    // await OfferService.update(updatedData).then(() => {
    //   // navigate("/comerciantes/home");
    //   toast.success("Oferta atualizada com sucesso!");
    // }).catch((error) => {
    //   onError(error);
    //   toast.error("Erro ao atualizar a oferta.");
    // });
    navigate("/comerciantes/home");
    toast.error("Essa funcionalidade esta com erro na api.");
  };

  return (
    <div className="font-inter">
      <Header />
      <BreadcrumbBanner currentPage="Editar oferta" typeUser="comerciantes" />

      <div className=" flex flex-col py-10 items-center justify-center">
        <h2 className="text-xl text-center font-bold font-kaisei text-dark-blue mb-5">
          Informações do Produto
        </h2>

        <div className="w-[90%] md:w-[80%] font-inter flex flex-col-reverse md:flex-row items-center justify-center  md:justify-between">
          <div className=" flex flex-col items-center justify-center min-h-100 w-full  md:w-1/2 md:h-120 border-1 border-dashed border-dark-orange text-dark-orange  p-4">
            <img
              className="h-50 md:h-60 w-auto "
              src={offer?.produto.fotoUrl}
              alt="Preview do panfleto"
            />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit, onError)}
            className="w-full  md:w-1/2 flex flex-col p-4 gap-2"
          >
            <div className="flex flex-col">
              <label className="text-lg text-dark-orange">
                Nome do produto
              </label>
              <input
                className="outline-dark-orange outline-1 text-gray-500 p-3"
                type="text"
                value={offer?.produto.nome}
                disabled
              />
            </div>
            <div className="w-full flex flex-col xl:flex-row xl:justify-between">
              <div className="flex flex-col w-full">
                <label className="text-lg text-dark-orange">Medida</label>
                <input
                  className=" xl:w-[90%] outline-dark-orange outline-1 text-gray-500 p-3"
                  type="text"
                  value={offer?.produto.medida}
                  disabled
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-lg text-dark-orange">
                  Unidade de medida
                </label>
                <input
                  className=" w-full outline-dark-orange outline-1 text-gray-500 p-3"
                  type="text"
                  value={offer?.produto.unidadeMedida}
                  disabled
                />
              </div>
            </div>
            <h2 className="text-xl text-center font-bold font-kaisei text-dark-blue py-5">
              Informações da Oferta
            </h2>
            <div className="flex flex-col">
              <label className="text-lg text-dark-orange">
                Data de expiração
              </label>
              <input
                className="outline-dark-orange outline-1 text-gray-500 p-3"
                type="date"
                min={new Date().toISOString().split("T")[0]}
                {...register("validade")}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg text-dark-orange">
                Preço da oferta
              </label>
              <input
                className="outline-dark-orange outline-1 text-gray-500 p-3"
                type="number"
                step="0.01"
                min="0"
                placeholder="R$0.00"
                {...register("preco", {
                  setValueAs: (val) =>
                    val ? parseFloat(val.replace(",", ".")) : undefined,
                })}
              />
            </div>{" "}
            <button
              type="submit"
              className="w-full h-10 mt-4 bg-dark-orange text-xl text-white rounded-2xl cursor-pointer"
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
              
            </button>
          </form>
        </div>

        <p className="mt-5">Não encontrou o que procurava? </p>
        <span
          className="hover:underline font-bold cursor-pointer"
          onClick={() => navigate("/comerciantes/novo-produto")}
        >
          Cadastre um novo produto
        </span>
      </div>
    </div>
  );
};

export default EditOffer;
