import React, { useRef, useEffect } from "react";
import "../styles/home.css";
import "../styles/contacto.css";
import { Link } from "react-router-dom";
import MyMap from "../components/Ubicacion";

const productsFirstPage = [
  {
    url: "http://localhost:5173/src/assets/abarrotes/milo 1kg.webp",
    price: "$7.000",
    description: "Milo 1Kg",
  },
  {
    url: "http://localhost:5173/src/assets/abarrotes/nescafe 170gr.jpg",
    price: "$4.200",
    description: "Café Nescafé Tradición 170gr",
  },
];

const products = [
  {
    url: "http://localhost:5173/src/assets/aseo/papel-noble-22m.webp",
    price: "$12.000",
    description: "Papel Higiénico Noble 60 Rollos",
    title: "Todo lo que necesitas para el Aseo!",
    type: "Aseo",
  },
  {
    url: "http://localhost:5173/src/assets/aseo/papel swan 24 rollos.jpg",
    price: "$5.990",
    description: "Papel Higiénico Swan, 24 Rollos",
    type: "Aseo",
  },
  {
    url: "http://localhost:5173/src/assets/bebidas/jugos watts cajita naranja.png",
    price: "$6.700",
    description: "Jugos Watts, Caja 30 unidades",
    title: "Jugos de Colación!",
    type: "Bebidas",
  },
];

const groupedProducts = products.reduce((acc, product) => {
  if (!acc[product.type]) {
    acc[product.type] = [];
  }
  acc[product.type].push(product);
  return acc;
}, {});

console.log("GROUPEDPRODUCTS", groupedProducts);

const Home = ({ scrollTo }) => {
  const ubicacion= useRef(null);
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
      <div className="container-fluid">
        <div className="main-content">
          <div
            id="carouselExampleCaptions"
            className="carousel slide rounded"
            data-bs-ride="carousel"
            style={{ height: "400px", background: "rgb(187, 1, 1)" }}
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" style={{ height: "350px" }}>
                <div className="d-flex " style={{ height: "350px" }}>
                  <div style={{ position: "absolute" }}>
                    <h1
                      style={{
                        position: "relative",
                        fontStyle: "italic",
                        left: "7px",
                      }}
                    >
                      Ofertas Imperdibles!
                    </h1>
                    <h5
                      style={{
                        paddingTop: "20px",
                        position: "relative",
                        fontStyle: "oblique",
                        color: "yellow",
                        textShadow:
                          "-1px -1px 0 rgb(36, 36, 110), 1px -1px 0 rgb(36, 36, 110), -1px 1px 0 rgb(36, 36, 110), 1px 1px 0 rgb(36, 36, 110), -2px -2px 0 rgb(36, 36, 110), 2px -2px 0 rgb(36, 36, 110), -2px 2px 0 rgb(36, 36, 110), 2px 2px 0 rgb(36, 36, 110)",
                      }}
                    >
                      Todo lo que buscas en un sólo lugar!!
                    </h5>
                  </div>
                  <div
                    className="d-flex align-items-center mt-2"
                    style={{ marginLeft: "180px" }}
                  >
                    <Link to="/abarrotes">
                      <button
                        type="button"
                        className="fw-bold fs-5 text-danger rounded"
                        style={{
                          height: "35px",
                          width: "200px",
                          backgroundColor: "white",
                        }}
                      >
                        Ver Abarrotes
                      </button>
                    </Link>
                    {productsFirstPage.map((element, index) => {
                      return (
                        <div
                          className="card d-flex align-items-center rounded m-3"
                          style={{
                            width: "300px",
                            height: "300px",
                          }}
                          key={index}
                        >
                          <img
                            src={element.url}
                            className="card-img-top"
                            alt="..."
                            style={{
                              width: "200px",
                              height: "200px",
                              objectFit: "contain",
                            }}
                          />
                          <div className="card-body">
                            <h3
                              className="card-title text-danger fw-bold rounded"
                              style={{ backgroundColor: "#ecf00f" }}
                            >
                              {element.price}
                            </h3>
                            <p className="card-text text-dark fw-bold mb-5">
                              {element.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              {Object.keys(groupedProducts).map((type) => (
                <div className="carousel-item" key={type}>
                  <div className="d-flex" style={{ height: "350px" }}>
                    <h1
                      style={{
                        fontStyle: "italic",
                        marginBottom: "300px",
                      }}
                    >
                      {groupedProducts[type][0].title}
                    </h1>
                    {groupedProducts[type].map((element, index) => (
                      <div
                        className="card d-flex align-items-center rounded m-3"
                        style={{ width: "300px", height: "300px" }}
                        key={index}
                      >
                        <img
                          src={element.url}
                          className="card-img-top"
                          alt="..."
                          style={{
                            width: "200px",
                            height: "200px",
                            objectFit: "contain",
                          }}
                        />
                        <div className="card-body">
                          <h3
                            className="card-title text-danger fw-bold rounded"
                            style={{ backgroundColor: "#ecf00f" }}
                          >
                            {element.price}
                          </h3>
                          <p className="card-text text-dark fw-bold mb-5">
                            {element.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
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
