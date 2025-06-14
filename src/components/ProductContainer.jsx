import { MdAdd } from 'react-icons/md';
import { useEffect, useState } from 'react';
import api from '../api';

function ProductContainer() {
  
    const [products, setProducts] = useState([]);

    async function loadProducts() {
        try {
        const response = await api.get('/products');
        setProducts(response.data);
        } catch (error) {
        console.error('Erro ao carregar produtos:', error);
        }
    }

    useEffect(() => {
        loadProducts();
    }, []);

    return (
        <div className="product-container">
            {products.map(product => (
                <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.name} className="product-image" />
                    <h2 className="product-name">{product.name}</h2>
                    <p className="product-price">R$ {product.price.toFixed(2)}</p>
                    <button className="add-to-cart-button"><MdAdd size={20}/></button>
                </div>
            ))}
        </div>
  );
}

export default ProductContainer