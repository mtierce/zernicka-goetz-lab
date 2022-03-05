import React from 'react';
import styles from './PersonCategory.module.scss';

const PersonCategory = ({categoryName, children}) => {
    return (
        <div className={styles.PersonCategory}>
            <h2>{categoryName}</h2>
            <div className={styles.peopleContainer}>
                {children}
            </div>
        </div>
    );
};

export default PersonCategory;