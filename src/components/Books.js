import React from 'react';
import { useCart } from '../context/CartContext';
// import booksData from '../data/books.json';
import styles from '../styles/Books.module.css';
import BookCard from './BookCard';
// import Search from './Search';

const Books = ({ books }) => {
    const { addToCart } = useCart();

    return (
        <div className={styles.booksContainer}>

            <h2>Avaliable Books</h2>
            {/* <Search books={books} /> */}
            <div className={styles.booksList}>
                {books.map((book) => (
                    <BookCard key={book.id} book={book} addToCart={() => addToCart(book)} className={styles.bookCard} />
                ))}
            </div>
        </div>
    );
};

export default Books;