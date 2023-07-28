import React from 'react';
import { useParams } from 'react-router-dom';

const booksData = [
    { id: 1, title: 'Book 1', author: 'Author 1', price: 10.99, description: 'Description of Book 1' },
    { id: 2, title: 'Book 2', author: 'Author 2', price: 12.99, description: 'Description of Book 2' },
];

const BookDetails = () => {
    const { id } = useParams(); //Get params route
    const book = booksData.find((book) => book.id === parseInt(id)); //Find a book by ID

    if (!book) {
        return <div>Book not found</div>;
    }

    return (
        <div>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Price: {book.price}</p>
            <p>{book.description}</p>
        </div>
    );
};

export default BookDetails;