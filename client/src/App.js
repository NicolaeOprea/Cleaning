import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer";
import ScrollRestoration from "./components/ScrollRestoration";
import Home from "./pages/Home.jsx";
import UberUns from "./pages/UberUns";

import Kontakt from "./pages/Kontakt.jsx";
import Impressum from "./pages/Impresum.jsx";
import Datenschutz from "./pages/Datenschutz.jsx";


export default function App() {
  return (
    <BrowserRouter>
      <ScrollRestoration />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/uberuns" element={<UberUns />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
