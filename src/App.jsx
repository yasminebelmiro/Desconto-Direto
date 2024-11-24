import Login from "./Pages/Login/Login"
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import RegisterChoise from "./Pages/RegisterChoise/RegisterChoise";
import RegisterConsumer from "./Pages/RegisterConsumer/RegisterConsumer";
import RegisterMarket from "./Pages/RegisterMarket/RegisterMarket";
import HomeConsumer from "./Pages/HomeConsumer/HomeConsumer";
import HomeMaket from "./Pages/HomeMaket/HomeMarket";
import FavoriteOffer from "./Pages/FavoriteOffer/FavoriteOffer";
import ProfileMarket from "./Pages/ProfileMarket/ProfileMarket";

const App = () => {
  return (
    
      <Router>
          <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/tipo-cadastro" element={<RegisterChoise />} />
              <Route path="/cadastro-consumidor" element={<RegisterConsumer />} />
              <Route path="/casdastro-comercio" element={<RegisterMarket/>} />
              <Route path="/home-consumidor" element={<HomeConsumer/>} />
              <Route path="/home-comercio" element={<HomeMaket/>} />
              <Route path="/ofertas-favoritas" element ={<FavoriteOffer/>} />
              <Route path="/profile" element={<ProfileMarket />} />
          </Routes>
      </Router>
  );
};

export default App;
