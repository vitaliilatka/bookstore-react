import React, { useContext } from "react";
import { Context } from "../context/Context";
import { Link, useParams } from "react-router-dom";
import styles from "../styles/BookCard.module.css";

const Book = () => {
    const { id } = useParams();
    const { books, addCart } = useContext(Context);
    const book = books.find(item => item.id === parseInt(id));

    if (!book) {
        return <div>book not found</div>;
    }

    const handleAddToCart = () => {
        addCart(book.id);
        alert('Book has been added to the cart');
    };

    return (
        <div className={styles.bookCard}>
            <img src={book.cover} alt={book.title} className={styles.bookCardImage} />
            <div className={styles.bookCardOverlay}>
                <div className={styles.bookDetails}>
                    <h3 className={styles.bookCardTitle}>{book.title}</h3>
                    <p className={styles.bookCardAuthor}>Author: {book.authorName}</p>
                    <p className={styles.bookCardPrice}>${book.price}</p>
                    <p> Rating: {book.rating} stars</p>
                    <p>{book.description}</p>
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

export default Book;