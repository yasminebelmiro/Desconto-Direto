import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  const role = localStorage.getItem("role");
  const navigate = useNavigate();
  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <div className="font-kaisei bg-dark-blue w-full h-screen flex flex-col justify-center items-center text-white gap-6">
          <h1 className="text-dark-yellow font-bold text-5xl flex">
            404 | Página Não Encontrada
          </h1>
          <p className="text-2xl">A rota que você tentou acessar não existe.</p>
          {role === "consumer" ? (
            <button
              className="bg-white font-bold text-dark-yellow py-5 px-10 rounded-2xl cursor-pointer"
              onClick={() => navigate("/consumidores/home")}
            >
              Voltar ao início
            </button>
          ) : role === "merchant" ? (
            <button
              className="bg-white font-bold text-dark-yellow py-5 px-10 rounded-2xl cursor-pointer"
              onClick={() => navigate("/comerciantes/home")}
            >
              Voltar ao início
            </button>
          ) : (
            <button
              className="bg-white font-bold text-dark-yellow py-5 px-10 rounded-2xl cursor-pointer"
              onClick={() => navigate("/")}
            >
              Voltar ao início
            </button>
          )}
        </div>
      );
    }
  }
};

export default ErrorPage;
