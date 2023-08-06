import React from 'react';
import { useParams } from 'react-router-dom';
import styles from '../styles/BookDetails.module.css';

const booksData = [
    { id: 1, title: 'Book 1', author: 'Author 1', price: 10.99, description: 'Description of Book 1' },
    { id: 2, title: 'Book 2', author: 'Author 2', price: 12.99, description: 'Description of Book 2' },
];

const BookDetails = () => {
    const { searchTerm } = useParams(); //Get params route
    const book = booksData.find((book) => book.title.toLowerCase().includes(searchTerm.toLowerCase())); //Find a book by ID

    if (!book) {
        return <div className={styles.notFoundMessage}>Book not found</div>;
    }

    return (
        <div className={styles.bookDetailsContainer}>
            <h2 className={styles.bookTitle}>{book.title}</h2>
            <p className={styles.bookAuthor}>Author: {book.author}</p>
            <p className={styles.bookPrice}>Price: {book.price}</p>
            <p className={styles.bookDescription}>{book.description}</p>
        </div>
    );
};

export default BookDetails;