import React from 'react';
import styles from '../styles/BookCartItem.module.css';

const BookCartItem = ({ book }) => {

    return (
        <div className={styles.BookCartItemContainer}>
            <h3 className={styles.bookTitle}>{book.title}</h3>
            <p className={styles.bookAuthor}>Author: {book.author}</p>
            <p className={styles.bookPrice}>Price: ${book.price.toFixed(2)}</p>
            {/*Add button for changing books in cart and delete book */}
        </div>
    );
};

export default BookCartItem;