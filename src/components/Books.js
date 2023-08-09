import React from 'react';
import { useCartContext } from '../context/CartContext';
// import booksData from '../data/books.json';
import styles from '../styles/Books.module.css';
import BookCard from './BookCard';

const Books = ({ books }) => {
    const { addToCart } = useCartContext();

    return (
        <div className={styles.booksContainer}>
            <h2>Avaliable Books</h2>
            {/* <Search books={books} /> */}
            <div className={styles.booksList}>
                {books.map((book) => (
                    <BookCard key={book.id} book={book} addToCart={addToCart} className={styles.bookCard} />
                ))}
            </div>
        </div>
    );
};

export default Books;