import { FaCamera } from "react-icons/fa";
import BreadcrumbBanner from "../../components/BreadcrumbBanner.tsx";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { type FlyerData, FlyerSchema } from "../../schemas/FlyerSchema.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import api from "../../service/api/axios.ts";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddFlyer = () => {
  const navigate = useNavigate();
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [previewFlyer, setPreviewFlyer] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FlyerData>({ resolver: zodResolver(FlyerSchema) });

  const onError = (errors: any) => {
    Object.values(errors).forEach((err: any) => {
      if (err?.message) {
        toast.error(err.message);
      }
    });
  };

  const fotoFileList = watch("fotoUrl");

  useEffect(() => {
    let file: File | undefined;
    if (fotoFileList instanceof FileList && fotoFileList.length > 0) {
      file = fotoFileList[0];
    } else if (Array.isArray(fotoFileList) && fotoFileList.length > 0) {
      file = fotoFileList[0];
    } else if (fotoFileList instanceof File) {
      file = fotoFileList;
    }

    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreviewFlyer(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    } else {
      setPreviewFlyer(null);
    }
  }, [fotoFileList]);

  //TODO: voltar aqui dps de entender a api

  const onSubmit = async (data: FlyerData) => {
    setUploadError(null);
    try {
      const response = await api.post("/panfletos/add", {
        dataExpiracao: data.dataExpiracao,
      });
      const flyerId = response.data.id;

      const formData = new FormData();

      let file: File | undefined;
      if (data.fotoUrl instanceof FileList && data.fotoUrl.length > 0) {
        file = data.fotoUrl[0];
      } else if (Array.isArray(data.fotoUrl) && data.fotoUrl.length > 0) {
        file = data.fotoUrl[0];
      } else if (data.fotoUrl instanceof File) {
        file = data.fotoUrl;
      }

      if (file) {
        formData.append("fotoUrl", file); // só chega aqui se realmente existir
      }

      formData.append("id", flyerId);

      await api.post(`/panfletos/upload-foto-comercio/${flyerId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Panfleto criado com foto com sucesso!");
      navigate("/comerciantes/home");
    } catch (error: any) {
      setUploadError(
        error.response?.data?.message || error.message || "Erro desconhecido"
      );
      console.error(error); 
      
    }
  };

  return (
    <div>
      <BreadcrumbBanner
        currentPage="Cadastro de Panfleto"
        typeUser="comerciantes"
      />
      <div className="font-inter flex flex-col-reverse md:flex-row items-center justify-center md:justify-evenly p-10">
        <div className=" flex flex-col items-center justify-center min-h-100 h-auto w-full md:w-100 md:h-120 border-1 border-dashed border-dark-orange text-dark-orange  p-4">
          {previewFlyer === null ? (
            <>
              <FaCamera size={80} />
              <label className="font-bold text-xl">
                A imagem aparecerá aqui
              </label>
              <i>Somente JPG ou PNG</i>
            </>
          ) : (
            <img
              key={previewFlyer ?? undefined}
              src={previewFlyer ?? undefined}
              alt="Preview do panfleto"
            />
          )}
        </div>
        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          className="flex flex-col p-4  "
        >
          <label className="text-lg text-dark-orange">Data de expriração</label>

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
             file:bg-light-yellow file:text-dark-orange my-4 cursor-pointer
           "
            {...register("fotoUrl")}
          />
          {uploadError && <p style={{ color: "red" }}>{uploadError}</p>}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-10 bg-dark-orange text-xl text-white rounded-2xl cursor-pointer mt-30"
          >
            {isSubmitting ? "Enviando..." : "Postar"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddFlyer;
