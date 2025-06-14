import { MdAdd } from 'react-icons/md';
import { useCart } from "../contexts/CartContext";
import { Link } from 'react-router-dom';

import '../styles/ProductsContainer.css';


function ProductsContainer({products}) {

    const { addToCart } = useCart();

    function handleAddToCart(e, product) {
        e.preventDefault()
        addToCart(product);
    }

    return (
        <div className="product-list-container">
            {products.map(product => (
                <Link key={product.id} to={`/product/${product.id}`} className="product-list-link">
                    <div key={product.id} className="product-list-card">
                        <img src={product.image} alt={product.name} className="product-list-image" />
                        <h2 className="product-list-name">{product.name}</h2>
                        <p className="product-list-price">R$ {product.price.toFixed(2)}</p>
                        <button onClick={(e) => handleAddToCart(e, product)} className="product-list-add-to-cart-button"><MdAdd size={20}/></button>
                    </div>
                </Link>   
            ))}
        </div>
  );
}

export default ProductsContainer;