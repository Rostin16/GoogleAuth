import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthPage from "./Components/Auth_page"; 
import Home from "./Components/HomePage"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />} /> 
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
