import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/home"
import Horario from "./views/horario"
import Contacto from "./views/contacto";
import Ubicacion from "./views/ubicacion";
import Abarrotes from "./views/abarrotes";
import Helados from "./views/helados";
import Congelados from "./views/congelados";
import Lacteos from "./views/lacteos";
import Bebidas from "./views/bebidas";
import Mascotas from "./views/mascotas";
import Aseo from "./views/aseo";
import HigienePersonal from "./views/higienepersonal";

function App() {
  

  return (
    <>
    <BrowserRouter>
  <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/horario" element={<Horario/>}/>
   <Route path="/contacto" element={<Contacto/>}/>
   <Route path="/ubicacion" element={<Ubicacion/>}/>
   <Route path="/abarrotes" element={<Abarrotes/>}/>
   <Route path="/helados" element={<Helados/>}/>
   <Route path="/congelados" element={<Congelados/>}/>
   <Route path="/lacteos" element={<Lacteos/>}/>
   <Route path="/bebidas" element={<Bebidas/>}/>
   <Route path="/mascotas" element={<Mascotas/>}/>
   <Route path="/aseo" element={<Aseo/>}/>
   <Route path="/higienepersonal" element={<HigienePersonal/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
   