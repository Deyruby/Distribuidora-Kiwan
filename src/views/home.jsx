import "../styles/home.css";
import { Link } from "react-router-dom";

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

const Home = () => {
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
                    {productsFirstPage.map((element) => {
                      return (
                        <div
                          className="card d-flex align-items-center rounded m-3"
                          style={{
                            width: "300px",
                            height: "300px",
                          }}
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
                  <div
                    className="d-flex justify-content-center"
                    style={{ height: "350px" }}
                  >
                    <h1
                      style={{
                        fontStyle: "italic",
                        marginBottom:"300px",
                        
                      }}
                    >
                      {type}
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
      </div>
    </>
  );
};

export default Home;
