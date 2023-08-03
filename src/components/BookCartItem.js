import React from 'react';

const BookCartItem = ({ book }) => {
    const { title, author, price } = book;

    return (
        <div>
            <h3>{title}</h3>
            <p>Author: {author}</p>
            <p>Price: ${price.toFixed(2)}</p>
            {/*Add button for changing books in cart and delete book */}
        </div>
    );
};

export default BookCartItem;