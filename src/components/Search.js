import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Search.module.css';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = (event) => {
        event.preventDefault();
        if (searchTerm.trim()) {
            console.log('Search Term:', searchTerm)
            navigate(`/search/${(searchTerm)}`);
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
        </div>
    );
}

export default Search;