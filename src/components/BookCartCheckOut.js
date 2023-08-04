import React from "react";
import styles from '../styles/BookCartCheckOut.module.css';

const BookCartCheckOut = () => {
    const cartItems = [
        { id: 1, title: 'Book 1', author: 'Author 1', price: 10.99 },
        { id: 2, title: 'Book 2', author: 'Author 2', price: 12.99 },
    ];

    //Calculate summ in cart
    const total = cartItems.reduce((sum, book) => sum + book.price, 0);

    const handleCheckout = () => {
        //process ordering
        alert('Your order has been placed. Thank you for shopping with us!');
    };

    return (
        <div className={styles.handleCheckoutContainer}>
            <h2 className={styles.checkOutTitle}>Check Out</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <ul className={styles.CartItemsList}>
                        {cartItems.map((book) => (
                            <li key={book.id} className={styles.cartItem}>
                                <h3 className={styles.cartItemTitle}>{book.title}</h3>
                                <p className={styles.cartItemAuthor}>Author: {book.author}</p>
                                <p className={styles.cartItemPrice}>Price: ${book.price}</p>
                            </li>
                        ))}
                    </ul>
                    <p className={styles.totalPrice}>Total: ${total.toFixed(2)}</p>
                    {/*Ordering Form */}
                    <form>
                        <label className={styles.formLabel} htmlFor="name">Name:</label>
                        <input className={styles.formInput} type="text" id="name" required></input>
                        <label className={styles.formLabel} htmlFor="email">Email:</label>
                        <input className={styles.formInput} label type="email" id="email" required></input>
                        <label className={styles.formLabel} htmlFor="address">Address</label>
                        <textarea className={styles.formTextArea} id="address" rows="4" required />
                        <button className={styles.checkOutButton} type="button" onClick={handleCheckout}>Place Order</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default BookCartCheckOut;