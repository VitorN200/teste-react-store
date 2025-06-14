import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useState } from "react";

import "../styles/SearchBar.css";

function SearchBar({loadProducts}) {

    const [search, setSearch] = useState("");
    const { cart } = useCart();

    async function handleSearch(e) {
        e.preventDefault();
        loadProducts(search);
    }

return (
    <div className="search-bar-container">
        <form className="search-form" onSubmit={handleSearch}>
            <input
                type="text"
                name="search"
                placeholder="Pesquisar produtos..."
                className="search-input"
                onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" className="search-button">
                <FiSearch size={20} />
            </button>
        </form>
        <Link to="/cart">
            <div className="cart-icon-container">
                <button className="cart-button">
                    <FiShoppingCart size={40} />
                </button>
                <span className="cart-badge">{cart.length}</span>
            </div>
        </Link>
    </div>
)
}

export default SearchBar;