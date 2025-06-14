import "../styles/Header.css";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../contexts/CartContext";

function CartIcon() {

    const { cart } = useCart();
    function cartNumber() {
        if(cart.length < 10) return cart.length;
        else return "9+";
    }

    return (
        <div className="cart-icon-container">
            <button className="cart-button">
                <FiShoppingCart size={40} />
            </button>
            <span className="cart-badge">{cartNumber()}</span>
        </div>
    )
}

export default CartIcon;
   