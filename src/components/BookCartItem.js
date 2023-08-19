import React from 'react';
import styles from '../styles/BookCartItem.module.css';
import { useCart } from '../context/CartContext';

const BookCartItem = ({ book }) => {
    // const { title, authorName, price, cover, quantity } = item.book;
    const { removeFromCart } = useCart();
    const handleRemove = () => {
        removeFromCart(book.id);
    };

    return (
        <div className={styles.BookCartItemContainer}>
            <img src={book.cover} alt={book.title} />
            <div className={styles.cartItemInfo}>
                <h3 className={styles.bookTitle}>{book.title}</h3>
                <p className={styles.bookAuthor}>Author: {book.authorName}</p>
                <input type="number" value={1} onChange={() => { }} />
                <button onClick={handleRemove}>Remove</button>
                <p className={styles.bookPrice}>Price: ${book.price}</p>
                {/*Add button for changing books in cart and delete book */}
            </div>
            {/* <button onClick={() => removeFromCart()}>Remove</button> */}

        </div>
    );
};

export default BookCartItem;