import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
//import "../styles/contacto.css";
import Carousel from "../components/Carousel";
import MyMap from "../components/Ubicacion";

const Home = ({ scrollTo, isAdmin}) => {
  const ubicacion = useRef(null);
  const horario = useRef(null);
  const contacto = useRef(null);

  const scrollToSection = (section) => {
    switch (section) {
      case "ubicacion":
        ubicacion.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "horario":
        horario.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "contacto":
        contacto.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (scrollTo) {
      scrollTo.current = scrollToSection;
    }
  }, [scrollTo]);

  return (
    <>
      <div className="container-fluid pt-5">
      {isAdmin && (
                <div className="agregarproducto">
                  <Link to="/agregarnuevoproducto">
                    <h5>Agregar Producto al Catálogo</h5>
                  </Link>
                </div>
              )}
        <Carousel  isAdmin={isAdmin}/>
        <section ref={ubicacion}>
          <h2 className=" pt-5 fst-italic">Ubicación</h2>
          <div className="ubicacion border-top pt-5 d-flex justify-content-center">
            <MyMap />
          </div>
        </section>
        <section ref={horario}>
          <h2 className="pt-5 fst-italic">Horario</h2>
          <div className="horario d-flex justify-content-center">
            <div className="border-top pt-3" style={{ width: "1250px" }}>
              <h3>Lunes a Sábado:</h3>
              <h3>9:30 am a 20:00 Horas</h3>
              <h3>Domingo:</h3>
              <h3>
                <h3>10:00 am a 17:00 Horas</h3>
              </h3>
            </div>
          </div>
        </section>
        <section ref={contacto}>
          <h2 className="fst-italic pt-4">Contacto</h2>
          <div className="contacto d-flex justify-content-center">
            <div className="border-top" style={{ width: "1250px" }}>
              <h3>
                Email:
                <a
                  href="mailto: distribuidorakiwan@gmail.com"
                  className="emailcontacto"
                >
                  <i
                    className="fa-solid fa-envelope ps-2 pe-2"
                    style={{ color: "#0a0a0a", paddingTop: "30px" }}
                  ></i>
                  distribuidorakiwan@gmail.com
                  <span className="tooltiptextemailcontacto">
                    Enviar Correo!
                  </span>
                </a>
              </h3>
              <h3>
                Teléfono:
                <a href="tel:+56959454869" className="iconcontacto">
                  <i
                    className="fa-solid fa-phone ps-2 "
                    style={{ color: "#00040a" }}
                  ></i>
                  +56959454869
                  <span className="tooltiptextcontacto">Llamar!</span>
                </a>
              </h3>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
