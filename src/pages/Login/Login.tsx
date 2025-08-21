import Header from "../../components/Header.tsx";
import logo from "../../assets/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserLoginSchema, type LoginData } from "../../schemas/LoginSchema.ts";
import Input from "./components/Input.tsx";

const Login = () => {
  const location = useLocation();
   const navigate = useNavigate();
   const isMerchantArea = location.pathname.includes("area-comerciantes");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({ resolver: zodResolver(UserLoginSchema) });

  const onSubmit = (data: LoginData) => {
    console.log(data);

  };
  return (
    <div>
      <Header />
      <div className="flex flex-col w-full md:flex-row items-center justify-center md:px-10 md:py-25 ">
        <div className="hidden md:flex flex-col items-center justify-center bg-dark-blue md:w-100 lg:w-120 h-120 rounded-3xl">
          <img className="w-10" src={logo} alt="Logo DD" />
          <h1 className="font-kaisei flex flex-col text-center md:text-xl text-white">
            Desconto <span className="text-dark-yellow">Direto</span>
          </h1>
          <button
            onClick={() => {isMerchantArea ? navigate("/area-comerciantes/cadastro") : navigate("/area-consumidores/cadastro")}}
            className="font-kaisei bg-dark-yellow hover:bg-dark-orange cursor-pointer mt-10 w-1/2 px-10 py-2 rounded-2xl text-white"
          >
            Cadastrar
          </button>
        </div>
        <div className="relative md:ml-[-35px] flex flex-col items-center justify-center bg-dark-yellow text-white w-full md:w-100 lg:w-120 h-120 gap-10 px-4 py-10 md:rounded-3xl ">
          <h1 className="font-kaisei text-3xl">Login</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center justify-center w-full gap-4"
          >
            <Input type="text" placeholder="Email" {...register("email")} />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
            <Input type="text" placeholder="Senha" {...register("senha")} />
            {errors.senha && (
              <p className="text-red-600">{errors.senha?.message}</p>
            )}
            <button
              type="submit"
              className="font-kaisei bg-dark-blue w-1/2 px-10 py-2 rounded-2xl hover:bg-dark-orange cursor-pointer"
            >
              Entrar
            </button>
            <button
              onClick={() => {isMerchantArea ? navigate("/area-comerciantes/cadastro") : navigate("/area-consumidores/cadastro")}}
              className="font-kaisei md:hidden bg-dark-blue w-1/2 px-10 py-2 rounded-2xl hover:bg-dark-orange cursor-pointer"
            >
              Cadastrar
            </button>
            <p className="hover:underline hover:font-bold">
              Esqueci minha senha
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
