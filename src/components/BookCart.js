import React from "react";
import { useCart } from "../context/CartContext";
import BookCard from "./BookCard";
import styles from '../styles/BookCart.module.css';

const BookCart = () => {
    const { cartItems, removeFromCart } = useCart();

    const total = cartItems
        .reduce((sum, book) => sum + parseFloat(book.price) * book.quantity, 0.0);

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
                    <p className={styles.totalPrice}>Total: ${total.toFixed(2)}</p>
                </div>
            )}
        </div>
    );
};

export default BookCart;