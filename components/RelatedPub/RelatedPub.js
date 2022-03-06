import React from 'react';
import styles from './RelatedPub.module.scss';

const RelatedPub = ({pub}) => {
    return (
        <p className={styles.RelatedPub}>
            {pub.authors}. {pub.title}. {pub.pub}; {pub.doi}.
        </p>
    );
};

export default RelatedPub;