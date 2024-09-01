import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";




const NuevoProducto = () => {
  return (
    <>
      <div className="container-form">
        <div className="row justify-content-center">
          <div className="col-md-12">
          <div className="volverAinicio">
            <Link to="/">
            <h5>Volver al Inicio</h5>
            </Link>
            </div> 
            <div className="card-form p-4 shadow-sm">
              <h2 className="text-center mb-4">Agregar Nuevo Producto</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="productName" className="form-label">
                    Nombre del Producto
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="productName"
                    placeholder="Nombre del Producto"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="productPrice" className="form-label">
                    Precio del Producto
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="productPrice"
                    placeholder="Precio del Producto"
                    required
                    step="0.01"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="productOffer" className="form-label">
                    Oferta (Opcional)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="productOffer"
                    placeholder="Oferta del Producto"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="productCategory" className="form-label">
                    Categoría del Producto
                  </label>
                  <select
                    id="productCategory"
                    className="form-select"
                    required
                  >
                    <option value="">Seleccione una categoría</option>
                    <option value="category1">Abarrotes</option>
                    <option value="category2">Lácteos</option>
                    <option value="category3">Congelados</option>
                    <option value="category4">Bebidas</option>
                    <option value="category5">Helados</option>
                    <option value="category6">Galletas y Confites</option>
                    <option value="category7">Aseo</option>
                    <option value="category8">Higiene Personal</option>
                    <option value="category9">Mascotas</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="productImage" className="form-label">
                    Subir Foto
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="productImage"
                    accept="image/*"
                    required
                  />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Agregar Producto
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NuevoProducto;

