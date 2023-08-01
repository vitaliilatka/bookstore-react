import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Search.module.css';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        //Search requesting
        if (searchTerm.trim()) {
            navigate.push(`/search?${searchTerm}`);
        }
    };

    return (
        <div>
            <form className={styles.searchForm} onSubmit={handleSearch}>
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
};

export default Search;