import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Adherent from "./pages/Adherent";
import Auteur from "./pages/Auteur";
import Categorie from "./pages/Categorie";
import Emprunt from "./pages/Emprunt";
import NavBar from "./components/NavBar/NavBar";
import Livre from "./pages/Livre";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/adherents" element={<Adherent />} />
        <Route path="/auteur" element={<Auteur />} />
        <Route path="/categorie" element={<Categorie />} />
        <Route path="/emprunt" element={<Emprunt />} />
        <Route path="/livre" element={<Livre />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
