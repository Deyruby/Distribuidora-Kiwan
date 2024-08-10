
import React, {useRef} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/home";
import Abarrotes from "./views/abarrotes";
import Helados from "./views/helados";
import Congelados from "./views/congelados";
import Lacteos from "./views/lacteos";
import Bebidas from "./views/bebidas";
import Mascotas from "./views/mascotas";
import Aseo from "./views/aseo";
import HigienePersonal from "./views/higienepersonal";
import Navbar from "./components/Navbar";
import ScrolltoTop from "./components/ScrolltoTop";



function App() {

  const scrollTo = useRef(null);
  return (
    <>
      <BrowserRouter>
      <Navbar scrollTo={scrollTo} />
        <Routes>
          <Route path="/" element={<Home  scrollTo={scrollTo}/>} />
          <Route path="/abarrotes" element={<Abarrotes />} />
          <Route path="/helados" element={<Helados />} />
          <Route path="/congelados" element={<Congelados />} />
          <Route path="/lacteos" element={<Lacteos />} />
          <Route path="/bebidas" element={<Bebidas />} />
          <Route path="/mascotas" element={<Mascotas />} />
          <Route path="/aseo" element={<Aseo />} />
          <Route path="/higienepersonal" element={<HigienePersonal />} />
        </Routes>
        <ScrolltoTop/>
      </BrowserRouter>
    </>
  );
}

export default App;
