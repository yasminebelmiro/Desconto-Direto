import { FaCamera } from "react-icons/fa";
import BreadcrumbBanner from "../../components/BreadcrumbBanner.tsx";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { type FlyerData, FlyerSchema } from "../../schemas/FlyerSchema.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import api from "../../service/api/axios.ts";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddFlyer = () => {
  const [newFlyer, setNewFlyer] = useState<string | undefined>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FlyerData>({ resolver: zodResolver(FlyerSchema) });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setNewFlyer(URL.createObjectURL(file));
    }
  };

    const onError = (errors: any) => {
      Object.values(errors).forEach((err: any) => {
        if (err?.message) {
          toast.error(err.message);
        }
      });
    };
  

const onSubmit = async (data: FlyerData) => {
  if (!selectedFile) {
    toast.error("Por favor, selecione uma imagem.");
    return;
  }
  const formData = new FormData();
  
  formData.append("dataExpiracao", data.dataExpiracao.toString());
  formData.append("fotoUrl", selectedFile);

  try {
    const response = await api.post("/panfletos/add", formData);
    toast.success("sucesso");
    navigate("/comerciantes/home")
    
  } catch (error) {
    toast.error("deu erro");
    console.log(error);
  }
};

  return (
    <div>
      <BreadcrumbBanner
        currentPage="Cadastro de Panfleto"
        typeUser ="comerciantes"
      />
      <div className="font-inter flex flex-col-reverse md:flex-row items-center justify-center md:justify-evenly p-10">
        <div className=" flex flex-col items-center justify-center min-h-100 h-auto w-full md:w-100 md:h-120 border-1 border-dashed border-dark-orange text-dark-orange  p-4">
          {newFlyer === "" ? (
            <>
              <FaCamera size={80} />
              <label className="font-bold text-xl">
                A imagem aparecerá aqui
              </label>
              <i>Somente JPG ou PNG</i>
            </>
          ) : (
            <img key={newFlyer} src={newFlyer} alt="Preview do panfleto" />
          )}
        </div>
        <form onSubmit={handleSubmit(onSubmit,onError)} className="flex flex-col p-4  ">
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
             onChange={handleImageChange}
          />
          <button
            type="submit"
            className="w-full h-10 bg-dark-orange text-xl text-white rounded-2xl cursor-pointer mt-30"
          >
            Postar
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddFlyer;
