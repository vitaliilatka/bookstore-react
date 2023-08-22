import React, { useContext } from "react";
import { CartContext } from "../context/Context";
import BookCartItem from "./BookCartItem";
// import BookCard from "./BookCard";
import styles from '../styles/BookCart.module.css';

const BookCart = () => {
    const { cartItems } = useContext(CartContext);

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
                        <BookCartItem key={item.id} book={item} />
                    ))}
                    <div className={styles.total}>
                        Total: ${cartItems.reduce((total, item) => total + parseFloat(item.price), 0)}
                    </div>
                    <p className={styles.totalPrice}>Total: {cartItems.length} books</p>
                </div>
            )}
        </div>
    );
};

export default BookCart;