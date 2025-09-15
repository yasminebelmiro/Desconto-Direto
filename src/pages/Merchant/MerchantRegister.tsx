import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header.tsx";
import { MerchantCategorys } from "../../enum/MerchantCategorys.ts";
import { useForm } from "react-hook-form";
import {
  type MerchantData,
  MerchantSchema,
} from "../../schemas/MerchantRegisterSchema.ts";

import Input from "../Login/components/Input.tsx";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { registerMerchant } from "../../service/api/authService.ts";

const MerchantRegister = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MerchantData>({
    resolver: zodResolver(MerchantSchema),
  });

   const onSubmit = async (data: MerchantData) => {
      try {
        await registerMerchant(data)
        toast.success("Cadastro realizado com sucesso!")
        navigate(`/comerciantes/login`)
      } catch (error) {
   
       console.log(error);
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
      <Header />
      <div
        className="flex flex-col w-full md:flex-row items-center justify-center 
      md:px-10 md:py-25 "
      >
        <div
          className="relative md:mr-[-35px] flex flex-col items-center justify-center
           bg-dark-yellow text-white w-full md:w-100 
        lg:w-120 h-auto md:h-120 gap-5 px-4 py-10 md:rounded-3xl "
        >
          <h1 className="font-kaisei text-3xl">Cadastro</h1>
          <form onSubmit={handleSubmit(onSubmit, onError)} className="flex flex-col items-center justify-center w-full gap-4">
            <Input
              type="text"
              placeholder="Nome da empresa"
              error={errors.nome?.message}
              {...register("nome")}
            />
            <select
              className={` bg-white text-dark-yellow placeholder:text-dark-yellow 
          w-full h-10 px-10 md:px-5 rounded-lg outline-none ${
            errors.categoria ? "border-2 border-red-500 text-red-500" : ""
          }`}
              {...register("categoria")}
            >
              {Object.values(MerchantCategorys).map((category: string) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <Input
            type="string"
            placeholder="Telefone"
            error={errors.telefone?.message}
            />
            <Input
              type="email"
              placeholder="Email"
              error={errors.email?.message}
              {...register("email")}
            />
            <div
              className="flex flex-col md:flex-row items-center justify-center 
            w-full gap-4"
            >
              <Input
                type="password"
                placeholder="Senha"
                error={errors.senha?.message}
                {...register("senha")}
              />
              <Input
                type="password"
                placeholder="Confirmar senha"
                error={errors.confirmarSenha?.message}
                {...register("confirmarSenha")}
              />
            </div>
            <button
              type="submit"
              className="font-kaisei bg-dark-blue w-1/2 px-10 py-2 rounded-2xl
               hover:bg-dark-orange cursor-pointer"
            >
              Entrar
            </button>
          </form>
        </div>
        <div
          className="hidden md:flex flex-col items-center justify-center
         bg-dark-blue md:w-100 lg:w-120 h-120 rounded-3xl"
        >
          <img className="w-10" src={logo} alt="Logo DD" />
          <h1 className="font-kaisei flex flex-col text-center md:text-xl text-white">
            Desconto <span className="text-dark-yellow">Direto</span>
          </h1>
          <button
            onClick={() => navigate("/comerciantes/login")}
            className="font-kaisei bg-dark-yellow hover:bg-dark-orange cursor-pointer mt-10 w-1/2 px-10 py-2 rounded-2xl text-white"
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default MerchantRegister;
