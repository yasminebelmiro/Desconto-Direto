import About from "./components/About.tsx";
import DownloadApp from "./components/DownloadApp.tsx";
import Header from "../../components/Header.tsx";

import Steps from "./components/Steps.tsx";
import HeroSection from "./components/HeroSection.tsx";

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
