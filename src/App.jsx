import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/home"
import Horario from "./views/horario"
import Contacto from "./views/contacto";

function App() {
  

  return (
    <>
    <BrowserRouter>
  <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/horario" element={<Horario/>}/>
   <Route path="/contacto" element={<Contacto/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
   