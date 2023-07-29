import React from "react";
import { Link } from 'react-router-dom';
import BookCartItem from "./BookCartItem";

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
                <div>
                    {cartItems.map((book) => (
                        <BookCartItem key={book.id} book={book} /> //Use component BookCartItem for Each book in cart
                    ))}
                    <p>
                        <strong>Total: ${total.toFixed(2)}</strong>
                    </p>
                </div>
            )}
            <Link to="/">Back to Home</Link>
            {/*Here is to do button "Order" and EventListener*/}
        </div>
    );
};

export default BookCart;