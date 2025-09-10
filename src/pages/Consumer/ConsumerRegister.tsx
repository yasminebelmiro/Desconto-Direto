import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header.tsx";
import Input from "../Login/components/Input.tsx";
import { useForm } from "react-hook-form";
import {
  type ConsumerRegisterData,
  ConsumerRegisterSchema,
} from "../../schemas/ConsumerRegisterSchema.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { resgiterConsumer } from "../../service/api/authService.ts";


const ConsumerRegister = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ConsumerRegisterData>({
    resolver: zodResolver(ConsumerRegisterSchema),
  });

  const onSubmit = async (data: ConsumerRegisterData) => {
    try {
      await resgiterConsumer(data)
      toast.success("Cadastro realizado com sucesso!")
      navigate(`/consumidores/login`)
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
      <div className="flex flex-col w-full md:flex-row items-center justify-center 
      md:px-10 md:py-25 ">
        <div
          className="relative md:mr-[-35px] flex flex-col items-center justify-center
           bg-dark-yellow text-white w-full md:w-100 
        lg:w-120 h-auto md:h-120 gap-5 px-4 py-10 md:rounded-3xl "
        >
          <h1 className="font-kaisei text-3xl">Cadastro</h1>
          <form
            onSubmit={handleSubmit(onSubmit, onError)}
            className="flex flex-col items-center justify-center w-full gap-4"
          >
            <Input
              type="text"
              placeholder="Nome completo"
              error={errors.nome?.message}
              {...register("nome")}
            />

            <Input
              type="text"
              placeholder="Telefone celular"
              error={errors.telefone?.message}
              {...register("telefone")}
            />
            <Input
              type="email"
              placeholder="Email"
              error={errors.email?.message}
              {...register("email")}
            />
            <div className="flex flex-col md:flex-row items-center justify-center 
            w-full gap-4">
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

            <p className="underline hover:font-bold">Esqueci minha senha</p>
            <button
              type="submit"
              className="font-kaisei bg-dark-blue w-1/2 px-10 py-2 rounded-2xl
               hover:bg-dark-orange cursor-pointer"
            >
              Entrar
            </button>
          </form>
          <p>
            Não tenho uma conta.{" "}
            <span
              className="underline hover:font-bold"
              onClick={() => navigate("/consumidores/login")}
            >
              Cadastrar
            </span>
          </p>
        </div>
        <div className="hidden md:flex flex-col items-center justify-center
         bg-dark-blue md:w-100 lg:w-120 h-120 rounded-3xl">
          <img className="w-10" src={logo} alt="Logo DD" />
          <h1 className="font-kaisei flex flex-col text-center md:text-xl text-white">
            Desconto <span className="text-dark-yellow">Direto</span>
          </h1>
          <button
            onClick={() => navigate("/consumidores/login")}
            className="font-kaisei bg-dark-yellow hover:bg-dark-orange cursor-pointer mt-10 w-1/2 px-10 py-2 rounded-2xl text-white"
          >
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsumerRegister;
