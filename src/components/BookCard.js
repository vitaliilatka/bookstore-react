import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/BookCard.module.css";

const BookCard = ({ book, addToCart }) => {
    const handleAddToCart = () => {
        addToCart(book);
    };

    return (
        <div className={styles.bookCard}>
            <img src={book.cover} alt={book.title} />
            <div className={styles.bookDetails}>
                <h3>{book.title}</h3>
                <p>Author: {book.authorName}</p>
                <p>${book.price}</p>
            </div>
            <Link to={`/books/${book.id}`} className={styles.viewDetailsBtn}>View Details</Link>
            <button onClick={handleAddToCart} className={styles.bookCardButton}>
                Add to Cart
            </button>
        </div>
    );
};

export default BookCard;