import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home.jsx";
import Uberuns from "./pages/UberUns";
import Praxis from "./pages/Praxis.jsx";

import Kontakt from "./pages/Kontakt.jsx";
import Impressum from "./pages/Impressum.jsx";
import Datenschutz from "./pages/Datenschutz.jsx";


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/uberuns" element={<Uberuns />} />
        <Route path="/praxis" element={<Praxis />} />
        
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
