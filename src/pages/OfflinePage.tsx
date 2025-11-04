
const OfflinePage = () => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="font-kaisei bg-dark-blue w-full h-screen flex flex-col justify-center items-center text-white gap-6">
     

      <h1 className="text-dark-yellow font-bold text-3xl flex">
        Falha de conexão
      </h1>
      <p className="text-xl">
        Não foi possível estabelecer conexão com o servidor. Verifique a
        internet
      </p>
      <button
        className="bg-white font-bold text-dark-yellow py-5 px-10 rounded-2xl cursor-pointer"
        onClick={handleReload}
      >
        Recarregar
      </button>
    </div>
  );
};

export default OfflinePage;
