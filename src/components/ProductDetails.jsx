import { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { useCart } from "../contexts/CartContext";

function ProductDetails({product, loading}) {
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        addToCart(product, quantity);
        alert("Produto adicionado ao carrinho!");
    };

    if (loading) {
        return <p>Carregando produto...</p>;
    } else {
        return (
            <div className="product-details-container">
        
                <div className="product-main-info">

                    <div className="product-image">
                        <img src={product.image} alt={product.name} />
                    </div>

                    <div className="product-info">
                        <h2 className="product-name">{product.name}</h2>
                        <p className="product-price">R$ {product.price.toFixed(2)}</p>
                        <div className="quantity-container">
                            <label htmlFor="quantity">Quantidade:</label>
                            <input
                                type="number"
                                id="quantity"
                                min="1"
                                value={quantity}
                                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                            />
                        </div>
                        <button className="add-to-cart-button" onClick={handleAddToCart}>
                            <MdAdd size={20} /> Adicionar ao Carrinho
                        </button>
                    </div>
                </div>

                <div className="product-description">
                    <h3>Detalhes do Produto</h3>
                    <p>{product.description}</p>
                </div>
            </div>
        );
    }
}

export default ProductDetails;
