import Header from "../../components/Header.tsx";
import About from "./Components/About.tsx";
import DownloadApp from "./Components/DownloadApp.tsx";
import HeroSection from "./Components/HeroSection.tsx";
import Steps from "./Components/Steps.tsx";


const LandingPage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
    
      <Steps />
   
        <About />
      
     
      <DownloadApp />
    </div>
  );
};

export default LandingPage;
