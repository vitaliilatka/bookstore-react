import React, { useContext, Fragment } from "react";
import { Context } from "../context/Context";
import Book from "./Book";
import styles from "../styles/Books.module.css";

const Books = () => {
    const { books, clearSearch, searchedBooks, searchString } = useContext(Context);

    return (
        <div className={styles.books}>
            <h2>
                {searchString === null ? (
                    "All Books"
                ) : (
                    <Fragment>
                        {" "}
                        Searching for '{searchString}'
                        <span onClick={() => clearSearch()} className={styles.button}>
                            X
                        </span>
                    </Fragment>
                )}
            </h2>

            <div className={styles.bookList}>
                {searchedBooks.length === 0
                    ? books.map(book => {
                        const { id } = book;
                        return <Book key={id} bookDetails={book} />
                    })
                    : searchedBooks.map(book => {
                        const { id } = book;
                        return <Book key={id} bookDetails={book} />
                    })}
            </div>
        </div>
    );
};

export default Books;