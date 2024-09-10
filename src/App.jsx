import React, { useRef,useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./views/home";
import SignIn from "./views/signin";
import Abarrotes from "./views/abarrotes";
import CatalogoDeProductos from "./views/catalogodeproductos";
import Navbar from "./components/Navbar";
import ScrollToTopButton from "./components/ScrolltoTop";
import ProductPage from "./views/productpage";

function App() {
  const location = useLocation();
  const [isAdmin, setIsAdmin]= useState(true)

  const scrollTo = useRef(null);
  //const scrollContainerRef=useRef(null) /*rutas dinamica

  const hideNavbarRoutes = ["/signin"];

  useEffect(() => {
    // Cambia la clase del body en función de la ruta actual
    if (location.pathname === "/signin") {
      document.body.className = "signin-background";
    } else {
      document.body.className = "default-background";
    }
  }, [location.pathname]);

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && (
        <Navbar scrollTo={scrollTo} />
      )}
      <Routes>
        <Route path="/" element={<Home scrollTo={scrollTo} isAdmin={isAdmin}/>}/>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/agregarnuevoproducto" element={<ProductPage/>} />
        <Route path="/editarproducto/:id" element={<ProductPage/>} />
        <Route path="/catalogodeproductos/:category" element={<CatalogoDeProductos isAdmin={isAdmin}/>}/>
        <Route path="/abarrotes" element={<Abarrotes />} />
      </Routes>
      <ScrollToTopButton />
    </>
  );
}

export default App;
