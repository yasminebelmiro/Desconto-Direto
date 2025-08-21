import logo from "../../../assets/logo.png";
import { useNavigate } from "react-router-dom";

import Header from "../../../components/Header.tsx";
import Input from "../../Login/components/Input.tsx";
import { useForm } from "react-hook-form";
import {
  type ConsumerRegisterData,
  ConsumerRegisterSchema,
} from "../../../schemas/ConsumerRegisterSchema.tsx";
import { zodResolver } from "@hookform/resolvers/zod";

const ConsumerRegister = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ConsumerRegisterData>({
    resolver: zodResolver(ConsumerRegisterSchema),
  });

  const onSubmit = (data: ConsumerRegisterData) => {
    console.log(data);
  };

  return (
    <div>
      <Header />
      <div className="relative flex flex-col w-full md:flex-row items-center justify-center md:px-10 md:py-25 ">
        <div className=" md:mr-[-35px] z-1 flex flex-col items-center justify-center bg-dark-yellow text-white w-full md:w-100 lg:w-120 h-auto md:h-170 gap-10 px-4 py-10 md:rounded-3xl ">
          <h1 className="font-kaisei text-3xl">Cadastro</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center justify-center w-full gap-2"
          >
            <Input
              type="text"
              placeholder="Nome Completo"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-red-600">{errors.name?.message} </p>
            )}

            <Input
              type="text"
              placeholder="Telefone celular"
              {...register("cellphone")}
            />
            {errors.cellphone && (
              <p className="text-red-600">{errors.cellphone?.message} </p>
            )}

            <Input type="email" placeholder="Email" {...register("email")} />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message} </p>
            )}

            <Input
              type="password"
              placeholder="Senha"
              {...register("password")}
            />

            {errors.password && (
              <p className="text-red-600">{errors.password?.message} </p>
            )}

            <Input
              type="password"
              placeholder="Confirmar senha"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className="text-red-600">{errors.confirmPassword?.message} </p>
            )}

            <button
              type="submit"
              className="font-kaisei bg-dark-blue w-1/2 px-10 py-2 rounded-2xl hover:bg-dark-orange cursor-pointer"
            >
              Cadastrar
            </button>
            <button
              onClick={() => navigate("/area-consumidores/login")}
              className="font-kaisei md:hidden bg-dark-blue w-1/2 px-10 py-2 rounded-2xl hover:bg-dark-orange cursor-pointer"
            >
              Entrar
            </button>
            <p className="hover:underline hover:font-bold">
              Esqueci minha senha
            </p>
          </form>
        </div>
        <div className=" hidden md:flex flex-col items-center justify-center bg-dark-blue md:w-100 lg:w-120 h-170 rounded-3xl">
          <img className="w-10" src={logo} alt="Logo DD" />
          <h1 className="font-kaisei flex flex-col text-center md:text-xl text-white">
            Desconto <span className="text-dark-yellow">Direto</span>
          </h1>
          <button
            onClick={() => navigate("/area-consumidores/login")}
            className="font-kaisei bg-dark-yellow hover:bg-dark-orange cursor-pointer mt-10 w-1/2 px-10 py-2 rounded-2xl text-white"
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsumerRegister;
