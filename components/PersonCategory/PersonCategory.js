import React from 'react';
import styles from './PersonCategory.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

const PersonCategory = ({categoryName, singleColumn = false, children}) => {
    const categoryStyles = cx({
        PersonCategory: true,
        singleColumn: singleColumn
    })

    return (
        <div className={categoryStyles}>
            <h2>{categoryName}</h2>
            <div className={styles.peopleContainer}>
                {children}
            </div>
        </div>
    );
};

export default PersonCategory;