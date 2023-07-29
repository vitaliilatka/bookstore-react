import React from 'react';

const BookCartItem = ({ book }) => {
    return (
        <div>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Price: ${book.price}</p>
            {/*Add button for changing books in cart and delete book */}
        </div>
    );
};

export default BookCartItem;