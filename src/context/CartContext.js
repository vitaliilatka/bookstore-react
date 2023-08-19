import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const addToCart = (book) => {
        setCartItems((prevItems) => [...prevItems, book]);
    };

    const removeFromCart = (bookId) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== bookId));
    };

    // const updateQuantity = (bookId, newQuantity) => {

    // };

    // const contextValue = {
    //     cartItems,
    //     addToCart,
    //     removeFromCart,
    //     updateQuantity,
    // }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};


