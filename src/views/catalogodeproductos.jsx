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

 
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const { category } = useParams();

  // Normaliza la categoría eliminando acentos y convirtiéndola a minúsculas
  const normalizeCategory = (category) =>
    category
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

  const normalizedCategory = normalizeCategory(category);

  
// Obtiene los productos desde la API
const getProducts = async (page = 1) => {
  try {
    const response = await fetch(
      `http://127.0.0.1:3000/getproducts/${normalizedCategory}?page=${page}`
    );
    const data = await response.json();
    // Actualiza el estado con los datos recibidos y la página actual
    setProducts((prevState) => ({
      ...data,
      current_page: page, // Aseguramos que la página se actualice
    }));
  } catch (error) {
    console.log("Error fetching products:", error.message);
  }
};


  useEffect(() => {
    getProducts(1);
  }, [category]);

  // Formatea la categoría para mostrarla con mayúscula inicial en cada palabra
  const formatCategory = (category) =>
    category
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
      .trim()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");

  const titleCategory = formatCategory(category);

  const token = localStorage.getItem("token");

  // Elimina un producto de la API
  const deleteProduct = async (id) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:3000/deleteproduct/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        setShowSuccessPopup(true);
        setTimeout(() => {
          setShowSuccessPopup(false);
        }, 3000);
        getProducts(products.current_page);
      } else {
        console.error("Error al eliminar el producto:", response.statusText);
      }
    } catch (error) {
      console.error("Error en la solicitud de eliminación:", error);
    }
  };

  // Cambia a la página deseada
  const paginate = (page) => {
    getProducts(page);
  };

  return (
    <div className="container-fluid">
      <div className="row main-content">
        <div className="col-md-12">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <Link to="/">
              <h5>Volver al Inicio</h5>
            </Link>
            {isAdmin && (
              <Link to="/agregarnuevoproducto">
                <h5>Agregar Producto al Catálogo</h5>
              </Link>
            )}
          </div>
          <h1>{titleCategory}</h1>
          <div className="d-flex flex-wrap justify-content-center">
            {Array.isArray(products.products) && products.products.length > 0 ? (
              products.products.map((product) => {
                return (
                  <div
                    className="card m-2"
                    key={product.id}
                    style={{ height: "21rem", width: "15rem" }}
                  >
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt={product.name}
                    />
                    <div className="card-body d-flex flex-column justify-content-between">
                      <h5 className="card-title">{`$${product.price}`}</h5>
                      <h6 className="card-title-name">{product.name}</h6>
                      <p className="card-text">
                        {product.offer ? `Oferta $${product.offer}` : ""}
                      </p>
                      {isAdmin && (
                        <div className="admin-actions d-flex justify-content-center mt-auto">
                          <Link
                            to={`/editarproducto/${product.id}`}
                            className="btn btn-sm btn-success fw-bold me-2"
                          >
                            <i className="fa-sharp fa-solid fa-pen"></i> Editar
                          </Link>
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
                );
              })
            ) : (
              <p>No hay productos disponibles para esta categoría.</p>
            )}
            {showSuccessPopup && (
              <div className="popup-success">
                <p>Producto eliminado exitosamente</p>
              </div>
            )}
          </div>
          {/* Controles de paginación */}
          <nav
            aria-label="Page navigation"
            className="d-flex justify-content-center my-4"
          >
            <ul className="pagination">
              {Array.from({ length: products.total_pages }, (_, index) => (
                <li
                  className={`page-item ${
                    index + 1 === products.current_page ? "active" : ""
                  }`}
                  key={index}
                >
                  <button
                    className="page-link"
                    onClick={() => paginate(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default CatalogoDeProductos;
