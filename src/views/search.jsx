import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductSearchResults = ({ isAdmin }) => {
  const { searchTerm } = useParams(); // Obtener el término de búsqueda de la URL
  const [products, setProducts] = useState([]);

  console.log("SEARCH", products);

  useEffect(() => {
    // Hacer la petición al backend para buscar los productos por nombre
    console.log("Buscando productos con el término:", searchTerm);
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:3000/products/search?name=${searchTerm}`);

        // Verificar si la respuesta fue exitosa
        if (!response.ok) {
          throw new Error("Error en la solicitud");
        }

        const data = await response.json();
        setProducts(data); // Guardar directamente el array de productos

      } catch (error) {
        console.error('Error al buscar productos:', error);
      }
    };

    fetchProducts();
  }, [searchTerm]);

  return (
    <div className="container-fluid">
      <h2 className="my-4">Resultados de búsqueda para: {searchTerm}</h2>
      <div className="row justify-content-center">
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product, index) => (
            <div className="col-md-3" key={index}> {/* Ajusta las clases de columna */}
              <div className="card card-custom h-100">
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
            </div>
          ))
          
        ) : (
          <p>No se encontraron productos.</p>
        )}
      </div>
    </div>
  );
};

export default ProductSearchResults;
