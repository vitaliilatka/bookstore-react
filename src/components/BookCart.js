import React from "react";
import { Link } from 'react-router-dom';

const BookCart = () => {
    //Let we create demo data of order
    const cartItems = [
        { id: 1, title: 'Book 1', author: 'Author 1', price: 10.99 },
        { id: 2, title: 'Book 2', author: 'Author 2', price: 12.99, },
    ];

    const total = cartItems.reduce((sum, book) => sum + book.price, 0);

    return (
        <div>
            <h2>Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {cartItems.map((book) => (
                        <li key={book.id}>
                            <h3>{book.title}</h3>
                            <p>Author: {book.author}</p>
                            <p>Price: ${book.price}</p>
                        </li>
                    ))}
                    <li>
                        <strong>Total: ${total.toFixed}</strong>
                    </li>
                </ul>
            )}
            <Link to="/">Back to Home</Link>
            {/*Here is to do button "Order" and EventListener*/}
        </div>
    );
};

export default BookCart;