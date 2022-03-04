import React from 'react';
import styles from './Publication.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Publication = ({pub}) => {
    const pubClasses = cx({
        Publication: true,
        featured: pub.featured ? pub.featured : false
    });
    if (pub.featured) {
        return (
            <div className={pubClasses}>
                <h2 className={styles.title}>{pub.title}</h2>
                <p className={`${styles.authors} body4`}>{pub.authors}</p>
            </div>
        ); 
    } else {
        return (
            <div className={pubClasses}>
                <h3 className={styles.title}>{pub.title}</h3>
                <p className={`${styles.authors} body5`}>{pub.authors}</p>
            </div>
        );
    }
};

export default Publication;