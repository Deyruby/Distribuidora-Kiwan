import React, { useRef, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./views/home";
import SignIn from "./views/signin";
import Abarrotes from "./views/abarrotes";
import CatalogoDeProductos from "./views/catalogodeproductos";
import Navbar from "./components/Navbar";
import ScrollToTopButton from "./components/ScrolltoTop";

function App() {
  const location = useLocation();

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
        <Route path="/" element={<Home scrollTo={scrollTo} />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/catalogodeproductos/:category" element={<CatalogoDeProductos/>}/>
        <Route path="/abarrotes" element={<Abarrotes />} />
      </Routes>
      <ScrollToTopButton />
    </>
  );
}

export default App;
