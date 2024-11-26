
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PublicLogin from "./pages/PublicLogin/PublicLogin";
import PublicChoiseRegister from "./pages/PublicChoiseRegister/PublicChoiseRegister";
import CostumerRegister from "./pages/CostumerRegister/CostumerRegister";
import CommerceRegister from "./pages/CommerceRegister/CommerceRegister";
import CostumerFavoriteOffer from "./pages/CostumerFavoriteOffer/CostumerFavoriteOffer";
import CommerceHome from "./pages/CommerceHome/CommerceHome";
import CommerceProfile from "./pages/CommerceProfile/CommerceProfile";
import CostumerHome from "./Pages/CostumerHome/CostumerHome";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<PublicLogin />} />
        <Route path="/tipo-cadastro" element={<PublicChoiseRegister />} />
        <Route path="/consumidor/cadastro" element={<CostumerRegister />} />
        <Route path="/comercio/casdastro" element={<CommerceRegister />} />
        <Route path="/consumidor/home" element={<CostumerHome />} />
        <Route path="/comercio/home" element={<CommerceHome />} />
        <Route path="/consumidor/ofertas-favoritas" element={<CostumerFavoriteOffer />} />
        <Route path="/consumidor/perfil-comercio" element={<CommerceProfile />} />
      </Routes>
    </Router>
  );
};

export default App;
