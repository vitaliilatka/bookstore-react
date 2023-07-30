import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/cart">Cart</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;