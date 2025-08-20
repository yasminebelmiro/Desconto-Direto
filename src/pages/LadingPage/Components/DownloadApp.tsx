import app from "../../../assets/DownloadApp/App.png";
import apple from "../../../assets/DownloadApp/btn-app.png";
import google from "../../../assets/DownloadApp/btn-google.png";

const DownloadApp = () => {
  return (
    <div className="py-10 px-10 flex flex-col md:flex-row items-center justify-center gap-10">
      <div className="relative md:w-100 flex justify-center items-center gap-10">
        <img className="z-1 w-30 lg:w-50" src={app} alt="Imagem do App" />
        <div className="absolute w-60 lg:w-90  h-60 lg:h-90 rounded-full bg-dark-yellow"></div>
      </div>
      <div className="flex flex-col items-center gap-10 lg:w-140">
        <h2 className="font-kaisei text-3xl text-dark-blue font-bold">
          Baixe nosso APP!
        </h2>
        <p className="text-center text-lg lg:text-xl text-gray-600 font-inter">
          Publique panfletos e promoções no app e alcance clientes da sua
          região.
        </p>
        <div className="flex gap-5">
          <button
            style={{
              backgroundImage: `url(${google})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
            className="w-42 h-12 rounded cursor-pointer"
          ></button>
          <button
            style={{
              backgroundImage: `url(${apple})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
            className="w-42 h-12 rounded cursor-pointer"
          ></button>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
