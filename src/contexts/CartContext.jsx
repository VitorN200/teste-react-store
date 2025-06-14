import { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product, quantity = 1) => {
        
        setCart(prevCart => {
            const productExists = prevCart.find(item => item.id === product.id);
            if (productExists) {
                return prevCart.map(item => 
                    item.id === product.id 
                        ? { ...item, quantity: item.quantity + quantity } 
                        : item
                );
            } else {
                return [...prevCart, { ...product, quantity }];
            }
        });

        alert(`${product.name} adicionado ao carrinho!`);
    };

    const removeFromCart = (id) => {
        setCart(prev => prev.filter(item => item.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}
