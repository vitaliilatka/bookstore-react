import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
    return (
        <div>
            <h3>{book.title}</h3>
            <p>Author: {book.authorName}</p>
            <Link to={`/books/${book.id}`}>View Details</Link>
        </div>
    );
};

export default BookCard;