import React from "react";
import { useParams } from "react-router-dom";
import booksData from '../data/books.json';
import BookCard from "./BookCard";
import styles from '../styles/SearchResults.module.css';

const SearchResults = () => {
    const { searchTerm } = useParams();

    const results = booksData.filter(
        (book) =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.authorName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={styles.resultsContainer}>
            <h2>SearchResults</h2>
            <div>
                {results.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </div>
    );
};

export default SearchResults;