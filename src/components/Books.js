import React from 'react';
import { Link } from 'react-router-dom';
import booksData from '../data/books.json';
import styles from '../styles/Books.module.css';

const Books = () => {
    return (
        <div className={styles.booksContainer}>
            <h2>Avaliable Books</h2>
            {/* <Search books={books} /> */}
            <div className={styles.booksList}>
                {booksData.map((book) => (
                    <div key={book.id} className={styles.bookCard}>
                        <img
                            src={book.imageUrl}
                            alt={book.title}
                            className={styles.bookImage}
                        />
                        <h3 className={styles.bookTitle}>{book.title}</h3>
                        <p className={styles.bookAuthor}>Author: {book.authorName}</p>
                        <p>Price: ${book.price}</p>
                        <Link to={`/books/${book.id}`} className={styles.viewDetailsLink}>View Details</Link>
                        {/* {Add button 'Add to cart', and router for it} */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Books;