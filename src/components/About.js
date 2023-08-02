import React from "react";
import styles from '../styles/About.module.css';

const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <h2 className={styles.aboutTitle}>About Us</h2>
            <p className={styles.aboutText}>
                Welcome to our online bookstore! We offer a wide selection of books on various topics, from fiction to non-fiction. Our mission is to provide book lovers with access to a diverse collection of books from around the world.
            </p>
            <p className={styles.aboutText}>
                If you have any questions or need assistance, please feel free to contact us at {''}
                <a href="mailto:info@example.com" className={styles.aboutLink}>
                    infoexample.com
                </a>
            </p>
        </div>
    );
};

export default About;