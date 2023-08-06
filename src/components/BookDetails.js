import React from 'react';
import { useParams } from 'react-router-dom';
import booksData from '../data/books.json';
import styles from '../styles/BookDetails.module.css';

const BookDetails = () => {
    const { id } = useParams(); //Get params route
    const book = booksData.find((book) => book.id === Number(id)); //Find a book by ID

    if (!book) {
        return <div className={styles.notFoundMessage}>Book not found</div>;
    }

    return (
        <div className={styles.bookDetailsContainer}>
            <h2 className={styles.bookTitle}>{book.title}</h2>
            <p className={styles.bookAuthor}>Author: {book.authorName}</p>
            <p className={styles.bookPrice}>Price: {book.price}</p>
            <p className={styles.bookDescription}>{book.description}</p>
        </div>
    );
};

export default BookDetails;