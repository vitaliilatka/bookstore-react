import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    const { carts } = useContext(Context);

    // Calculate the total number of unique books in the cart
    const totalUniqueBooks = carts.reduce((total, cartItem) => {
        return total + 1; // Assuming each cartItem corresponds to a unique book
    }, 0);

    return (
        <nav className={styles.navbar}>
            <Link className={styles.navLink} to="/">
                Home
            </Link>
            <Link className={styles.navLink} to="/about">
                About
            </Link>
            <Link className={styles.cartLink} to="/cart">
                <span className={styles.cartText}>Cart </span>
                {totalUniqueBooks > 0 && (
                    <span className={styles.cartCount}>({totalUniqueBooks})</span>
                )}
            </Link>
        </nav>
    );
};

export default Navbar;