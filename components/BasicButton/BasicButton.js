import React from 'react';
import styles from './BasicButton.module.scss';

const BasicButton = ({callback, children}) => {
    return (
        <button onClick={callback} className={styles.BasicButton}>
            {children}
        </button>
    )
};

export default BasicButton;