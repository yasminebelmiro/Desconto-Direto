import { Outlet } from "react-router-dom";
import Footer from "./components/Footer.tsx";
import { ToastContainer } from "react-toastify";
import { useNetWorkStatus } from "./hooks/useNetworkStatus.ts";
import OfflinePage from "./pages/OfflinePage.tsx";

const App = () => {
  const isOnline = useNetWorkStatus();


  return (
    <>
      {!isOnline ? (
        <OfflinePage />
      ) : (
        <>
          <Outlet />
          <Footer />
          <ToastContainer />
        </>
      )}
    </>
  );
};

export default App;
