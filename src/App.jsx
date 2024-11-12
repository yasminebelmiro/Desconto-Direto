import Login from "./Pages/Login/Login"
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import RegisterChoise from "./Pages/RegisterChoise/RegisterChoise";

const App = () => {
  return (
      <Router>
          <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/tipo-cadastro" element={<RegisterChoise />} />
     
          </Routes>
      </Router>
  );
};

export default App;
