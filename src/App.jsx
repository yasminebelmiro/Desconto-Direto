import Login from "./Pages/Login/Login"
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import RegisterChoise from "./Pages/RegisterChoise/RegisterChoise";
import RegisterConsumer from "./Pages/RegisterConsumer/RegisterConsumer";
import RegisterMarket from "./Pages/RegisterMarket/RegisterMarket";
import HomeConsumer from "./Pages/HomeConsumer/HomeConsumer";

const App = () => {
  return (
      <Router>
          <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/tipo-cadastro" element={<RegisterChoise />} />
              <Route path="/cadastro-consumidor" element={<RegisterConsumer />} />
              <Route path="/casdastro-comercio" element={<RegisterMarket/>} />
              <Route path="/home-consumidor" element={<HomeConsumer/>} />
              
          </Routes>
      </Router>
  );
};

export default App;
