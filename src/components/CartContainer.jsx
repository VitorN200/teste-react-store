import { MdDelete } from 'react-icons/md';
import { useCart } from "../contexts/CartContext";

import '../styles/CartContainer.css';

function CartContainer() {

    const { cart, removeFromCart, clearCart } = useCart();

    function handleBuy() {
        alert("Compra realizada com sucesso!");
        clearCart();
    }

    return (
        <div className="cart-container">

            {cart.map(product => (
                <div key={product.id} className="cart-card">
                    <img src={product.image} alt={product.name} className="cart-image" />
                    <div className="cart-info">
                        <h2 className="cart-name">{product.name}</h2>
                        <p className="cart-quantity">Quantidade: {product.quantity}</p>
                        <p className="cart-total">
                            Total: R$ {(product.price * product.quantity).toFixed(2)}
                        </p>
                        <button 
                            onClick={() => removeFromCart(product.id)} 
                            className="remove-from-cart-button">
                            <MdDelete size={20}/>
                        </button>
                    </div>
                </div>
            ))}

            <div className="cart-summary">
                {cart.length === 0 ? (
                    <h2>Seu carrinho está vazio</h2>
                    ) : (
                    <>
                        <h2 className="summary-title">Resumo do Pedido</h2>
                        <p className="summary-total">
                        Total: R$ {cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}
                        </p>
                        <button className="clear-cart-button" onClick={handleBuy}>
                        Limpar Carrinho
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

export default CartContainer;
