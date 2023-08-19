import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import styles from "../styles/BookCard.module.css";

const BookCard = ({ book }) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(book);
        alert('Book has been added to cart');
    };

    return (
        <div className={styles.bookCard}>
            <img src={book.cover} alt={book.title} className={styles.bookCardImage} />
            <div className={styles.bookCardOverlay}>
                <div className={styles.bookDetails}>
                    <h3 className={styles.bookCardTitle}>{book.title}</h3>
                    <p className={styles.bookCardAuthor}>Author: {book.authorName}</p>
                    <p className={styles.bookCardPrice}>${book.price}</p>
                </div>
            </div>
            <div className={styles.bookCardButtons}>
                <Link to={`/books/${book.id}`} className={styles.bookCardButton}>
                    View Details
                </Link>
                <button onClick={handleAddToCart} className={styles.bookCardButton}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default BookCard;