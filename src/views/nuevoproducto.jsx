import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

const NuevoProducto = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [offer, setOffer] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", name);
    formData.append("price", price);
    formData.append("offer", offer);
    formData.append("category", category);
    formData.append("image", image);

    try {
      const response = await fetch("http://127.0.0.1:3000/uploadproduct", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Error al agregar el producto.");
      }

      const result = await response.json();
      console.log("Producto agregado:", result);

      setName("");
      setPrice("");
      setOffer("");
      setCategory("");
      setImage(null);

      setShowSuccessPopup(true);

      setTimeout(() => {
        setShowSuccessPopup(false);
      }, 3000);
    } catch (error) {
      console.error("Hubo un problema con la solicitud:", error);
    }
  };

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
              <form onSubmit={handleSubmit}>
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
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
                    value={offer}
                    onChange={(e) => setOffer(e.target.value)}
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
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="">Seleccione una categoría</option>
                    <option value="abarrotes">Abarrotes</option>
                    <option value="lacteos">Lácteos</option>
                    <option value="congelados">Congelados</option>
                    <option value="bebidas">Bebidas</option>
                    <option value="helados">Helados</option>
                    <option value="galletasyconfites">
                      Galletas y Confites
                    </option>
                    <option value="aseo">Aseo</option>
                    <option value="higienepersonal">Higiene Personal</option>
                    <option value="mascotas">Mascotas</option>
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
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Agregar Producto
                  </button>
                </div>
              </form>
              {showSuccessPopup && (
                <div className="popup-success">
                  <p>Producto agregado exitosamente</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NuevoProducto;
