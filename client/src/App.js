import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Leistungen from "./pages/Leistungen";
import Praxis from "./pages/Praxis";
import Preise from "./pages/Preise";
import Kontakt from "./pages/Kontakt";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import Referenzen from "./pages/Referenzen";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leistungen" element={<Leistungen />} />
        <Route path="/praxis" element={<Praxis />} />
        <Route path="/preise" element={<Preise />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/referenzen" element={<Referenzen />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
