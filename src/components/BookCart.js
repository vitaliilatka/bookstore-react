import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import BookCard from "./BookCard";
import styles from '../styles/BookCart.module.css';

const BookCart = () => {
    const { cartItems, removeFromCart } = useCart();
    const [quantities, setQuantities] = useState([]);

    const handleQuantityChange = (id, quantity) => {
        setQuantities((prevQuantities) => ({ ...prevQuantities, [id]: quantity }));
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, book) => {
            const quantity = quantities[book.id] || 1;
            return total + book.price * quantity;
        }, 0);
    };

    // const total = cartItems
    //     .reduce((sum, book) => sum + parseFloat(book.price) * book.quantity, 0.0);

    return (
        <div className={styles.bookCartContainer}>
            <h2>Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    {cartItems.map((book) => (
                        <BookCard key={book.id} book={book} onRemoveFromCart={() => removeFromCart(book.id)} />
                    ))}
                    <input
                        type="number"
                        value={quantities[book.id] || 1}
                        onChange={(e) => handleQuantityChange(book.id, e.target.value)}
                        min="1"
                    />
                    <button onClick={() => removeFromCart(book.id)}>Remove</button>
                    <p className={styles.totalPrice}>Total: ${calculateTotal().toFixed(2)} books</p>
                </div>
            )}
        </div>
    );
};

export default BookCart;