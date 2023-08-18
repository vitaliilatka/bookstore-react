import React from "react";
import { useCart } from "../context/CartContext";
import BookCartItem from "./BookCartItem";
// import BookCard from "./BookCard";
import styles from '../styles/BookCart.module.css';

const BookCart = () => {
    const { cartItems } = useCart();

    // const total = cartItems
    //     .reduce((sum, book) => sum + parseFloat(book.price) * book.quantity, 0.0);

    return (
        <div className={styles.bookCartContainer}>
            <h2>Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div className={styles.cartItems}>
                    {cartItems.map((item) => (
                        <BookCartItem key={item.book.id} item={item} />
                    ))}
                    <p className={styles.totalPrice}>Total: books</p>
                </div>
            )}
        </div>
    );
};

export default BookCart;