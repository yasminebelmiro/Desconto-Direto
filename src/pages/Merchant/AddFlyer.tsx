import { FaCamera } from "react-icons/fa";
import BreadcrumbBanner from "../../components/BreadcrumbBanner.tsx";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { type FlyerData, FlyerSchema } from "../../schemas/FlyerSchema.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import api from "../../service/api/axios.ts";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header.tsx";

interface ErrorType {
  img_upload?: string | null;
}
const AddFlyer = () => {
  const navigate = useNavigate();
  const [uploadError, setUploadError] = useState<ErrorType| null>(null);
  const [previewFlyer, setPreviewFlyer] = useState<File | undefined>(undefined);
  const [imgUrl, setImgUrl] = useState("");
  const userId = localStorage.getItem("userId");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FlyerData>({ resolver: zodResolver(FlyerSchema) });

  useEffect(() => {
    if (previewFlyer) {
      const url = URL.createObjectURL(previewFlyer);
      setImgUrl(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [previewFlyer]);

  const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.includes("image/")) {
      setUploadError({
        img_upload: "O arquivo precisa ser uma imagem (JPG ou PNG)",
      });
      setPreviewFlyer(undefined);
      return;
    }

    setUploadError(null);
    setPreviewFlyer(file);
  };
  const onSubmit = async (data: FlyerData) => {
    if (!previewFlyer) {
      toast.error("Você precisa selecionar uma imagem!");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", previewFlyer);

      const imgResponse = await api.post(
        `/panfletos/upload-foto-comercio/${userId}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      const flyerData = {
        ...data,
        fotoUrl: imgResponse.data.url,
      };

      await api.post("/panfletos/add", flyerData);
      toast.success("Panfleto cadastrado com sucesso!");
      navigate("/comerciantes/panfletos");
    } catch (err) {
      console.error(err);
      toast.error("Erro ao cadastrar panfleto.");
    }
  };

  const onError = (errors: any) => {
    Object.values(errors).forEach((err: any) => {
      if (err?.message) {
        toast.error(err.message);
      }
    });
  };

  return (
    <div>
      <Header/>
      <BreadcrumbBanner
        currentPage="Cadastro de Panfleto"
        typeUser="comerciantes"
      />
      <div className="font-inter flex flex-col-reverse md:flex-row items-center justify-center md:justify-evenly p-10 ">
        <div className=" flex flex-col items-center justify-center min-h-100 h-auto w-full md:w-100 md:h-120 border-1 border-dashed border-dark-orange text-dark-orange p-4">
          {previewFlyer === undefined ? (
            <>
              <FaCamera size={80} />
              <label className="font-bold text-xl">
                A imagem aparecerá aqui
              </label>
              <i>Somente JPG ou PNG</i>
            </>
          ) : (
            <img
              className="h-100 lg:h-110"
              src={imgUrl}
              alt="Preview do panfleto"
            />
          )}
        {uploadError && <p>{uploadError.toString()}</p> }
        </div>
        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          className="flex flex-col p-4"
        >
          <label className="text-lg text-dark-orange">Data de expiração</label>
          <input
            className="outline-dark-orange outline-1 text-gray-500 p-3"
            type="date"
            {...register("dataExpiracao")}
          />

          <input
            type="file"
            accept="image/*"
            className="w-full text-dark-orange file:mr-2 file:py-2 file:px-3 file:rounded-md 
       file:border-0 file:text-sm file:font-semibold 
       file:bg-light-yellow file:text-dark-orange my-4 cursor-pointer"
            {...register("fotoUrl")}
            onChange={handleImgChange}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-10 bg-dark-orange text-xl text-white rounded-2xl cursor-pointer"
          >
            {isSubmitting ? "Enviando..." : "Postar"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddFlyer;
