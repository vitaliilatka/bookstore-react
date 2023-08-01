import React from "react";
import { Link } from "react-router-dom";
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div>
                <Link className={styles.navLink} to="/">
                    Home
                </Link>
                <Link className={styles.navLink} to="/about">
                    About
                </Link>
                <Link className={styles.navLink} to="/cart">
                    Cart
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;