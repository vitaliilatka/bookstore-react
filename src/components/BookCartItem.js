import React, { useContext, useState } from 'react';
import styles from '../styles/BookCartItem.module.css';
import { Context } from '../context/Context';

const BookCartItem = ({ book }) => {
    // const { title, authorName, price, cover, quantity } = item.book;
    const { removeCart, updateQuantity } = useContext(Context);
    const [quantity, setQuantity] = useState(book.quantity);

    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value);
        setQuantity(newQuantity);
        updateQuantity(book.id, newQuantity);
    };

    const handleRemove = () => {
        removeCart(book.id);
    };

    return (
        <div className={styles.BookCartItemContainer}>
            <img src={book.cover} alt={book.title} />
            <div className={styles.cartItemInfo}>
                <h3 className={styles.bookTitle}>{book.title}</h3>
                <p className={styles.bookAuthor}>Author: {book.authorName}</p>
                <input
                    type="number"
                    value={quantity}
                    onChange={handleQuantityChange}
                    min={1}
                    max={10}
                />
                <button onClick={handleRemove}>Remove</button>
                <p className={styles.bookPrice}>Price: ${book.price}</p>
                {/*Add button for changing books in cart and delete book */}
            </div>
        </div>
    );
};

export default BookCartItem;