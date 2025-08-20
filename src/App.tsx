import { Outlet } from "react-router-dom";
import Footer from "./components/Footer.tsx";

const App = () => {
  return (
    <>
      <Outlet /> 
      <Footer />
    </>
  );
};

export default App;
