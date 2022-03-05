import Link from 'next/link';
import React from 'react';
import styles from './ArrowButton.module.scss';

const ArrowButton = ({text, link, type="external", size="small"}) => {
    if (type == "external") {
        return <a className={styles.ArrowButton} href={link} target="_blank" rel="noopener noreferrer"><h6>{text} →</h6></a>
    } else if (type == "internal") {
        return <a className={styles.ArrowButton} href={link}><h6>{text} →</h6></a>
    } else if (type == "email") {
        return <a className={styles.ArrowButton} href={`mailto:${link}`}><h6>Email →</h6></a>
    } else {
        return
    }
};

export default ArrowButton;