import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import styles from "../styles/Book.module.css";

const Book = ({ bookDetails }) => {
    const { id, title, authorName, price, cover } = bookDetails;
    const [isHovered, setIsHovered] = useState(false);
    const { addCart } = useContext(Context);

    const handleAddToCart = () => {
        addCart(bookDetails.id);
    }

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className={styles.book}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Link to={`/books/${id}`}>
                <img
                    src={cover}
                    alt={title}
                    className={`${styles.cover} ${isHovered ? styles.hovered : ""}`}
                />
            </Link>
            {isHovered && (
                <div className={styles.details}>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.author}>By {authorName}</p>
                    <p className={styles.price}>Price: ${price}</p>
                    <div className={styles.buttons}>
                        <Link to={`/books/${id}`} className={styles.viewDetails}>
                            View Details
                        </Link>
                        <button className={styles.addToCart} onClick={handleAddToCart}>Add to Cart</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Book;







// import React, { useContext } from "react";
// import { Context } from "../context/Context";
// import { Link } from "react-router-dom";
// import styles from "../styles/Book.module.css";

// const Book = ({ bookDetails }) => {
//     const { addCart } = useContext(Context);
//     const {
//         id, title, cover, rating, price, authorName, authorId
//     } = bookDetails;

//     const handleAddCart = () => {
//         addCart(id);
//     };

//     return (
//         <div>
//             <div className={styles.coverImg}>
//                 <img src={cover} alt=""></img>
//                 <div className={styles.details}>
//                     <div className={styles.content}>
//                         <h5>
//                             <Link style={{ color: "#fff" }} to={"/book/details" + id}>
//                                 {title}
//                             </Link>
//                         </h5>
//                         <h6>
//                             By{" "}
//                             <Link style={{ color: '#fff' }} to={"/author" + authorId}>
//                                 {authorName}
//                             </Link>
//                         </h6>
//                         <p>
//                             <i></i> {rating}
//                         </p>
//                         <h4>Price: ${price}</h4>
//                     </div>
//                 </div>
//             </div>

//             <div className={styles.bottom}>
//                 <Link className={styles.details} to={"/book/details/" + id}>
//                     Details
//                 </Link>
//                 <button onClick={handleAddCart} className={styles.button}>
//                     Add Cart
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Book;