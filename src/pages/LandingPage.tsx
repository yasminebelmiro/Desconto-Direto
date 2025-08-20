import About from "../components/About.tsx";
import DownloadApp from "../components/DownloadApp.tsx";
import Header from "../components/Header.tsx";
import HeroSection from "../components/HeroSection.tsx";
import Steps from "../components/Steps.tsx";

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
