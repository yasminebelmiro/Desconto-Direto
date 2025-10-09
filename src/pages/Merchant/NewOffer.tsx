import React, { useEffect, useState } from "react";
import BreadcrumbBanner from "../../components/BreadcrumbBanner.tsx";
import { IoSearch } from "react-icons/io5";
import type { ProductType } from "../../types/ProductTypes.ts";
import api from "../../service/api/axios.ts";
import { IoMdClose } from "react-icons/io";
import type { OfferTypes } from "../../types/OfferTypes.ts";
import { useForm } from "react-hook-form";
import { OfferSchema, type OfferData } from "../../schemas/OfferSchema.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import NotFoundItem from "../../components/NotFoundItem.tsx";
import Header from "./components/Header.tsx";

const NewOffer = () => {
  const [search, setSearch] = useState<string>("");
  const [products, setProducts] = useState<ProductType[]>([]);

  const [selectProduct, setSelectProduct] = useState<ProductType | null>(null);

  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();

  const searchResult = products.filter((product) =>
    product.nome.toLowerCase().startsWith(search.toLowerCase())
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<OfferData>({
    resolver: zodResolver(OfferSchema),
  });

  const onError = (errors: any) => {
    Object.values(errors).forEach((err: any) => {
      if (err?.message) {
        toast.error(err.message);
      }
    });
  };

  const onSubmit = async (data: OfferData) => {
    try {
      const fetchOffer = await api.post("/ofertas", {
        comercioId: userId,
        produtoId: selectProduct?.id,
        preco: data.preco,
        validade: data.validade,
      });
      toast.success("Oferta cadastrada com sucesso!");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Não foi possível cadastrar a oferta!");
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await api.get("produtos/all");
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="font-inter">
      <Header/>
      <BreadcrumbBanner
        currentPage="Cadastrar oferta"
        typeUser="comerciantes"
      />

      <div className=" flex flex-col py-10 items-center justify-center">
        <h2 className="text-xl text-center font-bold font-kaisei text-dark-blue mb-5">
          Informações do Produto
        </h2>
        <div className="flex items-center justify-center px-5 w-[90%] md:w-[80%] h-15 border-2 border-dark-orange rounded-lg text-dark-orange mb-2 gap-5">
          <input
            type="text"
            value={search}
            placeholder="Procure pelo produto desejado"
            className="w-full outline-none"
            onChange={(e) => setSearch(e.target.value)}
          />
          <IoSearch size={22} />
          <IoMdClose
            className="cursor-pointer"
            size={22}
            onClick={() => {
              setSelectProduct(null);
              setSearch("");
            }}
          />
        </div>

        {search !== " " && (
          <>
            {searchResult.length === 0 ? (
              <NotFoundItem />
            ) : (
              <ul className="flex flex-col items-center justify-start  w-[90%] md:w-[80%] max-h-40 h-auto overflow-y-auto border-2 border-dark-orange rounded-lg text-dark-orange md:mb-5">
                {searchResult.map((product) => (
                  <li
                    className={`w-full cursor-pointer px-5 flex items-center justify-start h-10 hover:bg-dark-orange hover:text-white `}
                    key={product.id}
                    onClick={() => {
                      setSelectProduct(product);
                      setSearch(product.nome.toString());
                    }}
                  >
                    {product.nome}
                  </li>
                ))}
              </ul>
            )}
          </>
        )}

        {selectProduct != null && (
          <div className="w-[90%] md:w-[80%] font-inter flex flex-col-reverse md:flex-row items-center justify-center  md:justify-between">
            <div className=" flex flex-col items-center justify-center min-h-100 w-full  md:w-1/2 md:h-120 border-1 border-dashed border-dark-orange text-dark-orange  p-4">
              <img
                className="h-50 md:h-60 w-auto "
                src={selectProduct.fotoUrl}
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
                  value={selectProduct.nome}
                  disabled
                />
              </div>
              <div className="w-full flex flex-col xl:flex-row xl:justify-between">
                <div className="flex flex-col w-full">
                  <label className="text-lg text-dark-orange">Medida</label>
                  <input
                    className=" xl:w-[90%] outline-dark-orange outline-1 text-gray-500 p-3"
                    type="text"
                    value={selectProduct.medida}
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
                    value={selectProduct.unidadeMedida}
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
                Enviar
              </button>
            </form>
          </div>
        )}
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

export default NewOffer;
