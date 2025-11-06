import Header from "../../components/Header.tsx";
import logo from "../../assets/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserLoginSchema, type LoginData } from "../../schemas/LoginSchema.ts";
import Input from "./components/Input.tsx";
import { toast, ToastContainer } from "react-toastify";
import { login } from "../../service/authService.ts";
import { onError } from "../../utils/handleError.ts";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isMerchantArea = location.pathname.includes("comerciantes");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({ resolver: zodResolver(UserLoginSchema) });

  const endpoint = isMerchantArea ? "/comercios/all" : "/clientes/all";

  const onSubmit = async (data: LoginData) => {
    try {
      const response = await login(data.email, data.senha, endpoint);
      if (response.role === "merchant") {
        navigate("/comerciantes/home");
      } else {
        navigate("/consumidores/home");
      }
    } catch (error) {
      console.error(error);
      toast.error(
        "Cadastro não encontrado. Certifique de estar na área correta!"
      );
    }
  };


  return (
    <div>
      <Header />
      <div className="flex flex-col w-full md:flex-row items-center justify-center 
      md:px-10 md:h-screen lg:h-auto md:py-8 xl:py-25 bg-light-blue">
        <div className="hidden md:flex flex-col items-center justify-center bg-dark-blue md:w-100 lg:w-120 h-100 lg:h-120 rounded-3xl">
          <img className="w-10" src={logo} alt="Logo DD" />
          <h1 className="font-kaisei flex flex-col text-center md:text-xl text-white">
            Desconto <span className="text-dark-yellow">Direto</span>
          </h1>
          <button
            onClick={() => {
              isMerchantArea
                ? navigate("/comerciantes/cadastrar")
                : navigate("/consumidores/cadastrar");
            }}
            className="font-kaisei bg-dark-yellow hover:bg-dark-orange cursor-pointer mt-10 w-1/2 px-10 py-2 rounded-2xl text-white"
          >
            Cadastrar
          </button>
        </div>
        <div
          className="relative md:ml-[-35px] flex flex-col items-center justify-center bg-dark-yellow text-white w-full md:w-100 
        lg:w-120 h-screen md:h-100 lg:h-120 gap-5 px-4 py-10 md:rounded-3xl "
        >
          <h1 className="font-kaisei text-3xl">Login</h1>
          <form
            onSubmit={handleSubmit(onSubmit, onError)}
            className="flex flex-col items-center justify-center w-full gap-4"
          >
            <Input
              type="email"
              placeholder="Email"
              error={errors.email?.message}
              {...register("email")}
            />

            <Input
              type="password"
              placeholder="Senha"
              error={errors.senha?.message}
              {...register("senha")}
            />

            <p className="underline hover:font-bold">Esqueci minha senha</p>
            <button
              type="submit"
              className="font-kaisei bg-dark-blue w-1/2 px-10 py-2 rounded-2xl hover:bg-dark-orange cursor-pointer"
            >
              Entrar
            </button>
          </form>
          <p className="md:hidden">
            Não tenho uma conta.{" "}
            <span
              className="underline hover:font-bold"
              onClick={() => {
                isMerchantArea
                  ? navigate("/comerciantes/cadastrar")
                  : navigate("/consumidores/cadastrar");
              }}
            >
              Cadastrar
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
