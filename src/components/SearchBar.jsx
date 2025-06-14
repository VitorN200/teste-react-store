import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

function SearchBar() {

return (
    <div className="search-bar-container">
        <form className="search-form">
            <input
                type="text"
                name="search"
                placeholder="Pesquisar produtos..."
                className="search-input"
            />
            <button type="submit" className="search-button">
                <FiSearch size={20} />
            </button>
        </form>
        <Link to="/cart">
            <button className="cart-button">
                <FiShoppingCart size={24} />
            </button>
            1
        </Link>
    </div>
    )
}

export default SearchBar