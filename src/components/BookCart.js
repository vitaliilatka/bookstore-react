import React from "react";
import { Link } from 'react-router-dom';
import BookCartItem from "./BookCartItem";
import styles from '../styles/BookCart.module.css';

const BookCart = ({ cartItems }) => {
    //Let we create demo data of order

    const total = cartItems.reduce((sum, book) => sum + book.price * book.quantity, 0);

    return (
        <div className={styles.bookCartContainer}>
            <h2>Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    {cartItems.map((book) => (
                        <BookCartItem key={book.id} book={book} />
                    ))}
                    <p className={styles.totalPrice}>Total: ${total.toFixed(2)}</p>
                </div>
            )}
            <Link to="/" className={styles.backToHomeLink}>Back to Home</Link>
            {/*Here is to do button "Order" and EventListener*/}
        </div>
    );
};

export default BookCart;