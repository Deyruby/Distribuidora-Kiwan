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
console.log("PRODUCTOS", products.products)
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  

  const { category } = useParams();
  console.log("CATEGORY", category)

  function normalizeCategory(category) {
    return category
      .normalize("NFD") // Descompone los caracteres acentuados
      .replace(/[\u0300-\u036f]/g, "") // Elimina los acentos
      .toLowerCase(); // Convierte a minúsculas
      
  }
  const normalizedCategory = normalizeCategory(category);
 

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

  useEffect(() => {
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

  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:3000/deleteproduct/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("Producto eliminado exitosamente");
        setShowSuccessPopup(true);

        setTimeout(() => {
          setShowSuccessPopup(false);
        }, 3000);
        getProducts()
      } else {
        console.error("Error al eliminar el producto:", response.statusText);
      }
    } catch (error) {
      console.error("Hubo un problema con la solicitud:", error);
    }
  };

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
              {Array.isArray(products.products)&& products.products.map((product, index) => (
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
                        <Link to={`/editarproducto/${product.id}`} className="btn btn-sm btn-success fw-bold me-2">
                          <i className="fa-sharp fa-solid fa-pen"></i> Editar
                        </Link>
                        <button
                          onClick={() => deleteProduct(product.id)}
                          className="btn btn-sm btn-danger fw-bold"
                        >
                          <i className="fa-solid fa-trash-can"></i> Borrar
                        </button>
                        {showSuccessPopup && (
                          <div className="popup-success">
                            <p>Producto eliminado exitosamente</p>
                          </div>
                        )}
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
