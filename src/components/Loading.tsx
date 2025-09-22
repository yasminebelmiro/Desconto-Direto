import logo from "../assets/logo.png";
const Loading = () => {
  return (
    <div className="flex bg-dark-blue rounded-2xl w-auto  items-center justify-center p-5 gap-5 text-white m-10" >
      <img className="w-10  animate-spin" src={logo} alt="Spiner logo" />
      <p className="font-kaisei font-bold">Carregando...</p>
    </div>
  );
};

export default Loading;
