import React from 'react';
import styles from '../styles/BookCartItem.module.css';

const BookCartItem = ({ item }) => {
    const { book, quantity } = item;
    const bookId = item.book.id;

    return (
        <div className={styles.BookCartItemContainer}>
            <div className={styles.cartItemImage}>
                <img src={book.cover} alt={book.title} />
            </div>
            <div className={styles.cartItemInfo}>
                <h3 className={styles.bookTitle}>{book.title}</h3>
                <p className={styles.bookAuthor}>Author: {book.authorName}</p>
                <p>Quantity: {quantity}</p>
                <p className={styles.bookPrice}>Price: ${book.price.toFixed(2)}</p>
                {/*Add button for changing books in cart and delete book */}
            </div>


        </div>
    );
};

export default BookCartItem;