import React from "react";
import { Link } from "react-router-dom";
import logo from "../../src/assets/logo.jpg";
//import "../styles/home.css";

const Navbar = ({ scrollTo }) => {
  const whatsappUrl = `https://wa.me/${"56959454869"}?text=${encodeURIComponent(
    "Hola, me gustaría más información."
  )}`;
  const facebookUrl = `https://www.facebook.com/profile.php?id=100093007008249&mibextid=LQQJ4d`;
  const instagramUrl = `https://www.instagram.com/distribuidorakiwan?igsh=ZTg3bnZnajhyZ3B3&utm_source=qr`;
  const tiktokUrl = `https://www.tiktok.com/@distribuidorakiwan?_t=8nycqVW2kc9&_r=1`;

  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  const handleScroll = (section) => {
    if (scrollTo.current) {
      scrollTo.current(section);
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img src={logo} className="logo img-fluid" />
        <div className="container-fluid">
          <a
            className=" ms-3 navbar-brand"
            onClick={() => handleScroll("ubicacion")}
          >
            Ubicación
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link active"
                  aria-current="page"
                  onClick={() => handleScroll("horario")}
                >
                  Horario
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  onClick={() => handleScroll("contacto")}
                >
                  Contacto
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Catálogo de Productos
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to="catalogodeproductos/abarrotes" className="dropdown-item">
                      Abarrotes
                    </Link>
                  </li>
                  <li>
                    <Link to="/catalogodeproductos/lácteos" className="dropdown-item">
                      Lácteos
                    </Link>
                  </li>
                  <li>
                    <Link to="/catalogodeproductos/congelados" className="dropdown-item">
                      Congelados
                    </Link>
                  </li>
                  <li>
                    <Link to="/catalogodeproductos/bebidas" className="dropdown-item">
                      Bebidas
                    </Link>
                  </li>
                  <li>
                    <Link to="/catalogodeproductos/helados" className="dropdown-item">
                      Helados
                    </Link>
                  </li>
                  <li>
                    <Link to="/catalogodeproductos/aseo" className="dropdown-item">
                      Aseo
                    </Link>
                  </li>
                  <li>
                    <Link to="/catalogodeproductos/galletas&&confites" className="dropdown-item">
                      Galletas y Confites
                    </Link>
                  </li>
                  <li>
                    <Link to="/catalogodeproductos/higienePersonal" className="dropdown-item">
                      Higiene Personal
                    </Link>
                  </li>
                  <li>
                    <Link to="/catalogodeproductos/mascotas" className="dropdown-item">
                      Mascotas
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex ms-3">
              <input
                className="form-control me-2"
                type="search"
                style={{ width: "250px" }}
                placeholder="Buscar"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Buscar
              </button>
            </form>
          </div>
          <div className="icons">
            <div className="icon">
              <i
                className="fa-brands fa-square-whatsapp"
                onClick={() => handleClick(whatsappUrl)}
                style={{ color: "#28e302", fontSize: "35px" }}
              ></i>
              <span className="tooltiptext">Escribir al Whatsapp</span>
            </div>
            <div className="icon">
              <i
                className="fa-brands fa-square-facebook ms-3"
                onClick={() => handleClick(facebookUrl)}
                style={{ color: "#141cff", fontSize: "35px" }}
              ></i>
              <span className="tooltiptext">Seguir en Facebook!</span>
            </div>
            <div className="icon">
              <i
                className="fa-brands fa-instagram ms-3"
                onClick={() => handleClick(instagramUrl)}
                style={{ color: "#b61cca", fontSize: "35px" }}
              ></i>
              <span className="tooltiptext">Seguir en Instagram!</span>
            </div>
            <div className="icon">
              <i
                className="fa-brands fa-tiktok ms-3 pt-1"
                onClick={() => handleClick(tiktokUrl)}
                style={{ color: "black", fontSize: "29px" }}
              ></i>
              <span className="tooltiptext">Seguir en TikTok!</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
