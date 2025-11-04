import { useForm } from "react-hook-form";
import BreadcrumbBanner from "../../components/BreadcrumbBanner.tsx";
import {
  type MerchantProfileData,
  MerchantProfileSchema,
} from "../../schemas/MerchantRegisterSchema.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import api from "../../lib/axios.ts";
import type { MerchantTypes } from "../../types/MerchantTypes.ts";
import { MerchantCategorys } from "../../enum/MerchantCategorys.ts";

interface ErrorType {
  img_upload?: string | null;
}
const EditProfile = () => {
  const [uploadError, setUploadError] = useState<ErrorType | null>(null);
  const userId = localStorage.getItem("userId");
  const [merchant, setMerchant] = useState<MerchantTypes>();
  const [imgPreview, setImgPreview] = useState<File | undefined>(undefined);
  const [imgUrl, setImgUrl] = useState("");
  const {
    register,
    handleSubmit,
    reset, 
    watch,
    formState: { errors },
  } = useForm<MerchantProfileData>({
    resolver: zodResolver(MerchantProfileSchema),
    defaultValues: { fazEntrega: "false" } as any,
  });

  useEffect(() => {
    const fecthMerchant = async () => {
      const response = await api.get(`/comercios/find/${userId}`);
      const data = response.data;
      console.log(data.senha, data.email);
      
      setMerchant(response.data);
      setImgUrl(response.data.fotoUrl);

      reset({
        nome: data.nome,
        categoria: data.categoria,
        telefone: data.telefone,
        telefoneCelular: data.telefoneCelular,
        instagram: data.instagram,
        endereco: data.endereco,
        bairro: data.bairro,
        cep: data.cep,
        fazEntrega: data.fazEntrega ? "true" : "false",
        horarioAbertura: data.horarioAbertura,
        horarioFechamento: data.horarioFechamento,
        fotoUrl: data.fotoUrl,
      });
    };
    fecthMerchant();
  }, [reset]);

  useEffect(() => {
    if (imgPreview) {
      const url = URL.createObjectURL(imgPreview);
      setImgUrl(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [imgPreview]);

  const onError = (errors: any) => {
    Object.values(errors).forEach((err: any) => {
      if (err?.message) {
        toast.error(err.message);
      }
    });
  };

  const onSubmit = async (data: MerchantProfileData) => {

    try {
      const formData = new FormData();
      formData.append("photo", imgPreview);
      console.log(merchant)
      const merchantData = {
        ...data,
        id: userId,
        email: merchant?.email,
        senha: merchant?.senha,
      };
      // if (imgPreview) {
      //   await api.post(`/comercios/upload-foto-comercio/${userId}`, formData, {
      //     headers: { "Content-Type": "multipart/form-data" },
      //   });
      // }

      // await api.put("/comercios/edit", merchantData);
      toast.success("Perfil atualizado com sucesso!");
    } catch (error) {
      toast.error("Erro ao editar perfil.");
    }
  };

  const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.includes("image/")) {
      setUploadError({
        img_upload: "O arquivo precisa ser uma imagem (JPG ou PNG)",
      });
      setImgPreview(undefined);
      return;
    }

    setUploadError(null);
    setImgPreview(file);
  };

  const selectedRadio = watch("fazEntrega");

  return (
    <>
      <BreadcrumbBanner currentPage="Editar perfil" typeUser="comerciantes" />
      <div className="font-inter flex md:flex-row items-center justify-center md:justify-evenly p-10  ">
        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          className="md:w-[70%] lg:w-[50%] flex flex-col p-4"
        >
          {
            <div className="w-full flex justify-center items-center flex-col">
              {imgPreview === null ? (
                <div className="w-40 h-40 bg-dark-yellow text-white text-7xl rounded-full flex items-center justify-center">
                  {merchant?.nome[0]}
                </div>
              ) : (
                <img
                  className="w-40 h-40 object-cover rounded-full"
                  src={imgUrl}
                  alt={`Perfil de ${merchant?.nome}`}
                />
              )}

              <input
                type="file"
                accept="image/*"
                className="w-full lg:w-1/2 outline-1 outline-dark-orange text-dark-orange file:mr-2 file:py-2 file:px-3 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-light-yellow file:text-dark-orange my-4 cursor-pointer"
                placeholder="Editar imagem"
                {...register("fotoUrl")}
                onChange={handleImgChange}
              />
              {uploadError && <p>{uploadError.toString()} </p>}
            </div>
          }

          <div className="flex flex-col w-full">
            <label className="text-lg text-dark-orange">Nome do comércio</label>
            <input
              className=" outline-dark-orange outline-1 text-gray-500 p-3"
              type="text"
              {...register("nome")}
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-lg text-dark-orange">Cateogria</label>
            <select
              className=" w-full outline-dark-orange outline-1 text-gray-500 p-3"
              {...register("categoria")}
            >
              {Object.values(MerchantCategorys).map((category: string) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-2">
            <div className="flex flex-col w-full">
              <label className="text-lg text-dark-orange">Telefone</label>
              <input
                className=" outline-dark-orange outline-1 text-gray-500 p-3"
                type="text"
                {...register("telefone")}
              />
            </div>

            <div className="flex flex-col w-full">
              <label className="text-lg text-dark-orange">Whatsapp</label>
              <input
                className=" outline-dark-orange outline-1 text-gray-500 p-3"
                type="text"
                {...register("telefoneCelular")}
              />
            </div>
          </div>

          <div className="flex flex-col w-full">
            <label className="text-lg text-dark-orange">Endereço</label>
            <input
              className=" outline-dark-orange outline-1 text-gray-500 p-3"
              type="text"
              {...register("endereco")}
            />
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-2">
            <div className="flex flex-col w-full">
              <label className="text-lg text-dark-orange">Bairro</label>
              <input
                className=" outline-dark-orange outline-1 text-gray-500 p-3"
                type="text"
                {...register("bairro")}
              />
            </div>

            <div className="flex flex-col w-full">
              <label className="text-lg text-dark-orange">CEP</label>
              <input
                className=" outline-dark-orange outline-1 text-gray-500 p-3"
                type="text"
                {...register("cep")}
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-2">
            <div className="flex flex-col w-full">
              <label className="text-lg text-dark-orange">Instagram</label>
              <input
                className=" outline-dark-orange outline-1 text-gray-500 p-3"
                type="text"
                {...register("instagram")}
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-lg text-dark-orange">Faz entrega</label>
              <div className="flex flex-row w-full gap-5 p-2">
                <div className="flex justify-center items-center w-full gap-2">
                  <label className="text-lg text-dark-orange">Sim</label>
                  <input
                    value="true"
                    type="radio"
                    {...register("fazEntrega")}
                    checked={selectedRadio === "true"}
                  />
                </div>
                <div className="flex justify-center items-center w-full gap-2">
                  <label className="text-lg text-dark-orange">Não</label>
                  <input
                    value="false"
                    type="radio"
                    {...register("fazEntrega")}
                    checked={selectedRadio === "false"}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:gap-2">
            <div className="flex flex-col w-full">
              <label className="text-lg text-dark-orange">
                Horario de abertura
              </label>
              <input
                className=" outline-dark-orange outline-1 text-gray-500 p-3"
                type="time"
                {...register("horarioAbertura")}
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-lg text-dark-orange">
                Horario de fechamento
              </label>
              <input
                className=" outline-dark-orange outline-1 text-gray-500 p-3"
                type="time"
                {...register("horarioFechamento")}
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full h-10 mt-10 bg-dark-orange text-xl text-white rounded-2xl cursor-pointer"
          >
            {"Postar"}
          </button>
        </form>
      </div>
    </>
  );
};

export default EditProfile;
