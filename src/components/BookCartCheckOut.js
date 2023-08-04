import React from "react";

const BookCartCheckOut = () => {
    const cartItems = [
        { id: 1, title: 'Book 1', author: 'Author 1', price: 10.99 },
        { id: 2, title: 'Book 2', author: 'Author 2', price: 12.99 },
    ];

    //Calculate summ in cart
    const total = cartItems.reduce((sum, book) => sum + book.price, 0);

    const handleCheckout = () => {
        //process ordering
        alert('Your order has been placed. Thank you for shopping with us!');
    };

    return (
        <div>
            <h2>Check Out</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <ul>
                        {cartItems.map((book) => (
                            <li key={book.id}>
                                <h3>{book.title}</h3>
                                <p3>Author: {book.author}</p3>
                                <p>Price: ${book.price}</p>
                            </li>
                        ))}
                    </ul>
                    <p>Total: ${total.toFixed(2)}</p>
                    {/*Ordering Form */}
                    <form>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" required></input>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" required></input>
                        <label htmlFor="address">Address</label>
                        <textarea id="address" rows="4" required />
                        <button type="button" onClick={handleCheckout}>Place Order</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default BookCartCheckOut;