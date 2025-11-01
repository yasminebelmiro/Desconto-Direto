import { Outlet } from "react-router-dom";
import Footer from "./components/Footer.tsx";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <Outlet /> 
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
