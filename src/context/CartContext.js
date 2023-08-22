import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (book) => {
        setCartItems([...cartItems, { book, quantity: 1 }]);
    };

    const removeFromCart = (bookId) => {
        const updatedCart = cartItems.cartItems.filter((item => item.book.id !== bookId));
        setCartItems(updatedCart);
    };

    const updateQuantity = (bookId, newQuantity) => {
        const updatedCart = cartItems.map(item => {
            if (item.book.id === bookId) {
                return { ...item, quantity: newQuantity };
            }
            return item;
        });
        setCartItems(updatedCart);
    };

    // const contextValue = {
    //     cartItems,
    //     addToCart,
    //     removeFromCart,
    //     updateQuantity,
    // }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};


