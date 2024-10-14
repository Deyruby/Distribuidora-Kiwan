import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Carousel = ({ isAdmin }) => {
  const [productsCarrousel, setProductsCarrousel] = useState({
    products: [],
  });
  console.log("VOY A VER EL CARRUSEL", productsCarrousel.products);
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
    {Array.isArray(productsCarrousel.products) && productsCarrousel.products.length > 0 && (
      productsCarrousel.products.reduce((acc, _, index) => {
        const slideIndex = Math.floor(index / 2); // Agrupar de 2 en 2
        if (!acc.includes(slideIndex)) acc.push(slideIndex);
        return acc;
      }, []).map((slideIndex) => (
        <button
          key={slideIndex}
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={slideIndex}
          className={slideIndex === 0 ? "active" : ""}
          aria-current={slideIndex === 0 ? "true" : ""}
          aria-label={`Slide ${slideIndex + 1}`}
        ></button>
      ))
    )}
  </div>

  <div className="carousel-inner">
    {Array.isArray(productsCarrousel.products) &&
      productsCarrousel.products.reduce((acc, product, index) => {
        const slideIndex = Math.floor(index / 2); // Cambiar 2 por la cantidad de productos por slide
        if (!acc[slideIndex]) acc[slideIndex] = [];
        acc[slideIndex].push(product);
        return acc;
      }, []).map((slide, slideIndex) => (
        <div
          className={`carousel-item ${slideIndex === 0 ? "active" : ""}`}
          key={slideIndex}
          style={{ height: "350px" }}
        >
          <div className="d-flex justify-content-center" style={{ height: "350px" }}>
            {slide.map((element, index) => (
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
                  alt={element.name}
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
                    {element.offer ? `Oferta $${element.offer}` : ""}
                  </p>
                  {isAdmin && (
                    <div className="admin-actions">
                      <Link
                        to={`/editarproducto/${element.id}`}
                        className="btn btn-sm btn-success fw-bold me-2"
                      >
                        <i className="fa-sharp fa-solid fa-pen"></i> Editar
                      </Link>
                    </div>
                  )}
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
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </>
  )
}

export default Carousel;
