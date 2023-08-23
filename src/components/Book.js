import React, { useContext } from "react";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";

const Book = ({ bookDetails }) => {
    const { addCart } = useContext(Context);
    const {
        id, title, cover, rating, price, authorName
    } = bookDetails;

    const handleAddCart = () => {
        addCart(id);
    };

    return (
        <div>
            <div className={styles.cover - img}>
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
                            <Link >
                                {authorName}
                            </Link>
                        </h6>
                    </div>

                </div>
            </div>
        </div>
    )
}