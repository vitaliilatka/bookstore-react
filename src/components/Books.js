import React, { useContext } from "react";
import { Context } from "../context/Context";
import BookCard from "./BookCard";
import styles from "../styles/Books.module.css";

const Books = () => {
    const { searchedBooks, searchString } = useContext(Context);

    return (
        <div className={styles.books}>
            <h2>BookList</h2>
            {searchedBooks.length > 0 ? (
                <p>Search Results for: {searchString}</p>
            ) : null}
            <div className={styles.bookList}>
                {searchedBooks.length === 0 ? searchedBooks.map(book => (
                    <BookCard key={book.id} book={book} />
                )) : null}
            </div>
        </div>
    );
};

export default Books;