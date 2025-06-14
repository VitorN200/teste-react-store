import { MdAdd } from 'react-icons/md';
import { useCart } from "../contexts/CartContext";


function ProductContainer({products}) {

    const { addToCart } = useCart();

    return (
        <div className="product-container">
            {products.map(product => (
                <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.name} className="product-image" />
                    <h2 className="product-name">{product.name}</h2>
                    <p className="product-price">R$ {product.price.toFixed(2)}</p>
                    <button onClick={() => addToCart(product)} className="add-to-cart-button"><MdAdd size={20}/></button>
                </div>
            ))}
        </div>
  );
}

export default ProductContainer