import { useParams } from "react-router-dom";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const CatalogoDeProductos = () => {
  const [products, setProducts] = useState({current_page:0, products:[], total_pages:0});
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
        <div className="main-content">
          <div className="tittle">
            <Link to="/">
              <h5 className="inicio">Volver al Inicio</h5>
            </Link>
            <h1>{tittleCategory}</h1>
          </div>
          {products.products.map((product) => (
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CatalogoDeProductos;
