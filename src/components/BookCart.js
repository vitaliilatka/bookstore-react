import React, { useContext } from "react";
import { Context } from "../context/Context";
import BookCartItem from "./BookCartItem";
// import BookCard from "./BookCard";
import styles from '../styles/BookCart.module.css';

const BookCart = () => {
    const { carts } = useContext(Context);

    const calculateTotal = () => {
        return carts.reduce((total, cartItem) => {
            return total + cartItem.book.price + cartItem.quantity;
        }, 0);
    };

    return (
        <div className={styles.bookCartContainer}>
            <h2>Cart</h2>
            {carts.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div className={styles.cartItems}>
                    {carts.map((cartItem) => (
                        <BookCartItem key={cartItem.book.id} book={cartItem.book} />
                    ))}
                    <div className={styles.total}>
                        <p>Total: ${calculateTotal()}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookCart;