import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Carousel = ({isAdmin}) => {
  const [productsCarrousel, setProductsCarrousel] = useState({
    products: [],
  });
//const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  useEffect(() => {
    
    const carrouselProductos = async () => {
      try {
        const response = await fetch("http://127.0.0.1:3000/products-carrusel");
        const data = await response.json();
        setProductsCarrousel(data);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };

    
    carrouselProductos();
  }, []);

  return (
    <>
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
              <div style={{ position: "absolute" }}></div>
              <div
                className="d-flex align-items-center mt-2"
                style={{ marginLeft: "180px" }}
              >
                {Array.isArray(productsCarrousel.products) &&
                  productsCarrousel.products.map((element, index) => {
                    return (
                      <div
                        className="card d-flex align-items-center rounded m-3"
                        style={{
                          width: "300px",
                          height: "330px",
                        }}
                        key={index}
                      >
                        <img
                          src={element.image}
                          className="card-img-top"
                          alt="..."
                          style={{
                            width: "200px",
                            height: "200px",
                            objectFit: "contain",
                          }}
                        />
                        <div className="card-body">
                          <h5 className="card-title">{`$${element.price}`}</h5>
                          <h6 className="card-title-name">{element.name}</h6>
                          <p className="card-text">
                            {element.offer ? element.offer : ""}
                          </p>
                          {isAdmin && (
                            <div className="admin-actions">
                              <Link
                                to={`/editarproducto/${element.id}`}
                                className="btn btn-sm btn-success fw-bold me-2"
                              >
                                <i className="fa-sharp fa-solid fa-pen"></i>{" "}
                                Editar
                              </Link>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
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
    </>
  );
};

export default Carousel;
