import { MdAdd } from 'react-icons/md';
import { useCart } from "../contexts/CartContext";
import { Link } from 'react-router-dom';


function ProductsContainer({products}) {

    const { addToCart } = useCart();

    function handleAddToCart(e, product) {
        e.preventDefault()
        addToCart(product);
    }

    return (
        <div className="product-container">
            {products.map(product => (
                <Link key={product.id} to={`/product/${product.id}`} className="product-link">
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <h2 className="product-name">{product.name}</h2>
                        <p className="product-price">R$ {product.price.toFixed(2)}</p>
                        <button onClick={(e) => handleAddToCart(e, product)} className="add-to-cart-button"><MdAdd size={20}/></button>
                    </div>
                </Link>   
            ))}
        </div>
  );
}

export default ProductsContainer