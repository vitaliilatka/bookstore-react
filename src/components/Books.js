import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Books.module.css';

const Books = () => {
    const books = [
        {
            id: 1, title: 'Book 1', author: 'Autor 1', price: 10.99, imageUrl: 'book1.jpg',
        },
        {
            id: 2, title: 'Book 2', author: 'Autor 2', price: 12.99, imageUrl: 'book2.jpg',
        },
    ];
    return (
        <div className={styles.bookList}>
            <h2>Avaliable Books</h2>
            <ul>
                {books.map((book) => (
                    <li key={book.id} className={styles.bookCard}>
                        <img
                            src={book.imageUrl}
                            alt={book.title}
                            className={styles.bookImage}
                        />
                        <h3 className={styles.bookTitle}>{book.title}</h3>
                        <p className={styles.bookAuthor}>Author: {book.author}</p>
                        <p>Price: ${book.price}</p>
                        <Link to={`/books/${book.id}`} className={styles.viewDetailsLink}>View Details</Link>
                        {/* {Add button 'Add to cart', and router for it} */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Books;