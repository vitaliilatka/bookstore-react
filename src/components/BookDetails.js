import React from 'react';
import { useParams } from 'react-router-dom';
import booksData from '../data/books.json';
import styles from '../styles/BookDetails.module.css';

const BookDetails = () => {
    const { id } = useParams(); //Get params route
    const book = booksData.find((book) => book.id === id); //Find a book by ID

    // if (!book) {
    //     return <div className={styles.notFoundMessage}>Book not found</div>;
    // }

    return (
        <div className={styles.bookDetailsContainer}>
            <div className={styles.bookImage}>
                <img src={book.cover} alt={book.title} />
            </div>
            <div className={styles.bookInfo}>
                <h2 className={styles.bookTitle}>{book.title}</h2>
                <p className={styles.bookAuthor}>Author: {book.authorName}</p>
                <p className={styles.bookDescription}>{book.description}</p>
                <p>Rating: {book.rating}</p>
                <p className={styles.bookPrice}>Price: {book.price}</p>
            </div>
        </div>
    );
};

export default BookDetails;