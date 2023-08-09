import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const addToCart = (book) => {
        setCartItems([...cartItems, book]);
    };

    const removeFromCart = (bookId) => {
        setCartItems(cartItems.filter((item) => item.id !== bookId));
    };
    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};


