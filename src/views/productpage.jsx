import React from 'react';
import { useParams } from 'react-router-dom';
import ProductForm from  '../components/productForm'; // El componente de formulario

const ProductPage = () => {
    const { id } = useParams(); // Obtén el ID del producto desde la URL

    return (
        <div>
            <h1>{id ? 'Editar Producto' : 'Agregar Producto'}</h1>
            <ProductForm productId={id} />
        </div>
    );
};

export default ProductPage;
