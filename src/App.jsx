import Login from "./Pages/Login/Login"
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
      <Router>
          <Routes>
              <Route path="/login" element={<Login />} />
          </Routes>
      </Router>
  );
};

export default App;
