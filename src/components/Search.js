import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import BookDetails from './BookDetails';
import styles from '../styles/Search.module.css';

const Search = ({ books }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate();

    // const filteredBooks = books.filter(
    //     (book) =>
    //         book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //         book.author.toLowerCase().includes(searchTerm.toLowerCase())
    // );

    const handleSearch = (event) => {
        event.preventDefault();
        if (searchTerm.trim()) {
            console.log('Search Term:', searchTerm)
            navigate(`/search/${(searchTerm)}`);
            const results = books.filter(
                (book) =>
                    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    book.author.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setSearchResults(results);
            setSearchTerm('');
        }
    };

    return (
        <div className={styles.searchContainer}>
            <form className={styles.searchForm} onSubmit={handleSearch} method="GET">
                <input
                    type="text"
                    placeholder="Search books..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={styles.searchInput}
                />
                <button type="submit" className={styles.searchButton}>Search</button>
            </form>
            {searchResults.length > 0 && (
                <div>
                    <h3>Search Results: </h3>
                    <BookDetails books={searchResults} />
                </div>
                // <ul>
                //     {searchResults.map((book) => (
                //         <li key={book.id}>
                //             <h3>{book.title}</h3>
                //             <p>Author: {book.author}</p>
                //             <p>Price: ${book.price}</p>
                //         </li>
                //     ))}
                // </ul>
            )}
        </div>
    );
}

export default Search;