import { useParams } from "react-router-dom";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const CatalogoDeProductos = ({ isAdmin }) => {
  const [products, setProducts] = useState({
    current_page: 0,
    products: [],
    total_pages: 0,
  });
  console.log("PRODUCTOS", products);

  const { category } = useParams();

  useEffect(() => {
    function normalizeCategory(category) {
      return category
        .normalize("NFD") // Descompone los caracteres acentuados
        .replace(/[\u0300-\u036f]/g, "") // Elimina los acentos
        .toLowerCase(); // Convierte a minúsculas
    }

    const normalizedCategory = normalizeCategory(category);

    // Luego usas normalizedCategory en tu URL

    const getProducts = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:3000/getproducts/${normalizedCategory}`
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    getProducts();
  }, [category]);

  const formatCategory = (category) => {
    return category
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/([A-Z])/g, " $1")
      .trim()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };
  const tittleCategory = formatCategory(category);

  return (
    <>
      <div className="container-fluid">
        <div className="row main-content">
          <div className="col-md-12">
            <div className="d-flex">
              <div>
                <Link to="/">
                  <h5>Volver al Inicio</h5>
                </Link>
              </div>
              {isAdmin && (
                <div className="ps-5">
                  <Link to="/agregarnuevoproducto">
                    <h5>Agregar Producto al Catálogo</h5>
                  </Link>
                </div>
              )}
            </div>
            <h1>{tittleCategory}</h1>
            <div className="d-flex flex-wrap justify-content-center">
              {products.products.map((product, index) => (
                <div
                  className="card m-2"
                  key={index}
                  style={{ height: "20rem", width: "15rem" }}
                >
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{`$${product.price}`}</h5>
                    <h6 className="card-title-name">{product.name}</h6>
                    <p className="card-text">
                      {product.offer ? product.offer : ""}
                    </p>
                    {isAdmin && (
                      <div className="admin-actions">
                        <button
                          onClick={() => editProduct(product.id)}
                          className="btn btn-sm btn-success fw-bold me-2"
                        >
                          <i className="fa-sharp fa-solid fa-pen"></i> Editar
                        </button>
                        <button
                          onClick={() => deleteProduct(product.id)}
                          className="btn btn-sm btn-danger fw-bold"
                        >
                          <i className="fa-solid fa-trash-can"></i> Borrar
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CatalogoDeProductos;
