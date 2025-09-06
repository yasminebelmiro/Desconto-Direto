import { useLocation, useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  return (
    <div className="font-kaisei bg-dark-blue w-full h-screen flex flex-col justify-center items-center text-white gap-6">
      <h1 className="text-dark-yellow font-bold text-5xl flex">404</h1>
      <p className="text-2xl">Página não encontrada</p>
      {role === "consumer" ? (
        <button className="bg-white font-bold text-dark-yellow py-5 px-10 rounded-2xl cursor-pointer" onClick={() => navigate("/consumidores/home")}>
          Voltar ao início
        </button>
      ) : (
        <button className="bg-white font-bold text-dark-yellow py-5 px-10 rounded-2xl cursor-pointer" onClick={() => navigate("/comercios/home")}>
          Voltar ao início
        </button>
      )}
    </div>
  );
};

export default NotFoundPage;
