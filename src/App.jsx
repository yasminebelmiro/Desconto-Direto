import React, { useEffect } from "react";
import Footer from "./components/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";



// TODO: usar rem como medida para melhorar a responsividade

const App = () => {
  const location = useLocation();

  useEffect(() => {
    if(location.state?.scrollTo("contato")){
      const element = document.getElementById("contato")
      if(element){
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  },[location]) 
  return (
    <>
      <Outlet />
      <Footer/>
    </>
  );
};

export default App;
