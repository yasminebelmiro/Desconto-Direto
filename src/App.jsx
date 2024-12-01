
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PublicLogin from "./pages/PublicLogin/PublicLogin";
import PublicChoiseRegister from "./pages/PublicChoiseRegister/PublicChoiseRegister";
import CostumerRegister from "./pages/CostumerRegister/CostumerRegister";
import CommerceRegister from "./pages/CommerceRegister/CommerceRegister";
import CostumerFavoriteOffer from "./Pages/CostumerFavoriteOffer/CostumerFavoriteOffer";
import CommerceProfile from "./Pages/CommerceProfile/CommerceProfile"
import CommerceHome from "./Pages/CommerceHome/CommerceHome";
import CostumerHome from "./Pages/CostumerHome/CostumerHome";
import CostumerCommerceProfile from "./Pages/CostumerCommerceProfile/CostumerCommerceProfile";
import CommerceAddFlyer from "./Pages/CommerceAddFlyer/CommerceAddFlyer";

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
        <Route path="/consumidor/perfil-comercio" element={<CostumerCommerceProfile />} />
        <Route path="/comercio/meu-perfil" element={<CommerceProfile />} />
        <Route path="/comercio/novo-panfleto" element={<CommerceAddFlyer />} />
      </Routes>
    </Router>
  );
};

export default App;
