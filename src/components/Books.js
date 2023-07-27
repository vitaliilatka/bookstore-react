import React from 'react';

const booksData = [
    {
        id: 1, title: 'Book 1', autor: 'Autor 1', price: 10.99
    },
    {
        id: 2, title: 'Book 2', autor: 'Autor 2', price: 12.99
    },
];

const Books = () => {
    return (
        <div>
            <h2>Books</h2>
            <ul>
                {booksData.map((book) => (
                    <li key={book.id}>
                        <h3>{book.title}</h3>
                        <p>Author: {book.autor}</p>
                        <p>Price: ${book.price}</p>
                        {/* {Add button 'Add to cart', and router for it} */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Books;