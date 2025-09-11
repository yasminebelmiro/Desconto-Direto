import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header.tsx";
import { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store.ts";
import { toast } from "react-toastify";
import BasicStep from "./components/BasicStep.tsx";
import DetailsStep from "./components/DetailsStep.tsx";

const MerchantRegister = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const formData = useSelector((state: RootState) => state.merchant);

  const handleSubmit = () => {
    toast.success("Cadastro concluído!");
    console.log(JSON.stringify(formData))
    setStep(1);
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
        lg:w-120 h-auto md:h-140 gap-5 px-4 py-10 md:rounded-3xl "
        >
          <h1 className="font-kaisei text-3xl">Cadastro</h1>
          {step === 1 && <BasicStep onNext={() => setStep(2)} />}
            {step === 2 && <DetailsStep onNext={() => setStep(3)} />}
              {step === 3 && <DetailsStep onNext={() => setStep(1)} onSubmit={handleSubmit} />}
        </div>
        <div
          className="hidden md:flex flex-col items-center justify-center
         bg-dark-blue md:w-100 lg:w-120 h-140 rounded-3xl"
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
