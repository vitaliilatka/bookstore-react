import React from "react";
import { Link } from 'react-router-dom';
import BookCartItem from "./BookCartItem";
import styles from '../styles/BookCart.module.css';

const BookCart = () => {
    //Let we create demo data of order
    const cartItems = [
        { id: 1, title: 'Book 1', author: 'Author 1', price: 10.99, quantity: 2, imageUrl: 'book1.jpg' },
        { id: 2, title: 'Book 2', author: 'Author 2', price: 12.99, quantity: 1, imageUrl: 'book2.jpg' },
    ];

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