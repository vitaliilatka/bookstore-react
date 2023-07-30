import React from 'react';
import { Link } from 'react-router-dom';

const Books = () => {
    const books = [
        {
            id: 1, title: 'Book 1', autor: 'Autor 1', price: 10.99
        },
        {
            id: 2, title: 'Book 2', autor: 'Autor 2', price: 12.99
        },
    ];
    return (
        <div>
            <h2>Avaliable Books</h2>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        <h3>{book.title}</h3>
                        <p>Author: {book.autor}</p>
                        <p>Price: ${book.price}</p>
                        <Link to={`/books/${book.id}`}>View Details</Link>
                        {/* {Add button 'Add to cart', and router for it} */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Books;