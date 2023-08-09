import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/BookCard.module.css";

const BookCard = ({ book, addToCart }) => {
    const handleAddToCart = () => {
        addToCart(book);
    };

    return (
        <div className={styles.bookCard}>
            <div className={styles.cardButtons}>
                <h3>{book.title}</h3>
                <p>Author: {book.authorName}</p>
                <Link to={`/books/${book.id}`} className={styles.viewDetailsBtn}>View Details</Link>
                <button onClick={handleAddToCart} className={styles.addToCartBtn}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default BookCard;