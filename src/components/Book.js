import React, { useContext } from "react";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";
import styles from "../styles/Book.module.css";

const Book = ({ bookDetails }) => {
    const { addCart } = useContext(Context);
    const {
        id, title, cover, rating, price, authorName, authorId
    } = bookDetails;

    const handleAddCart = () => {
        addCart(id);
    };

    return (
        <div>
            <div className={styles.coverImg}>
                <img src={cover} alt=""></img>
                <div className={styles.details}>
                    <div className={styles.content}>
                        <h5>
                            <Link style={{ color: "#fff" }} to={"/book/details" + id}>
                                {title}
                            </Link>
                        </h5>
                        <h6>
                            By{" "}
                            <Link style={{ color: '#fff' }} to={"/author" + authorId}>
                                {authorName}
                            </Link>
                        </h6>
                        <p>
                            <i></i> {rating}
                        </p>
                        <h4>Price: ${price}</h4>
                    </div>
                </div>
            </div>

            <div className={styles.bottom}>
                <Link className={styles.details} to={"/book/details/" + id}>
                    Details
                </Link>
                <button onClick={handleAddCart} className={styles.button}>
                    Add Cart
                </button>
            </div>
        </div>
    );
};

export default Book;