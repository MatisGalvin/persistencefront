import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Adherent from "./pages/Adherent";
import Auteur from "./pages/Auteur";
import Categorie from "./pages/Categorie";
import Emprunt from "./pages/Emprunt";
import Livre from "./pages/Livre";
import AddBook from "./features/livre/AddBook";
import AddCategorie from "./features/categorie/AddCategorie";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter> 
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/adherents" element={<Adherent />} />
        <Route path="/auteur" element={<Auteur />} />
        <Route path="/categorie" element={<Categorie />} />
        <Route path="/categorie/new" element={<AddCategorie />} />
        <Route path="/emprunt" element={<Emprunt />} />
        <Route path="/livre" element={<Livre />} />
        <Route path="/livre/new" element={<AddBook />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
