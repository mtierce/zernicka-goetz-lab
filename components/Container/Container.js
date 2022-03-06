import React from 'react';
import styles from './Container.module.scss';

const Container = ({children}) => {
    return (
        <div className={styles.Container}>
            <div className={styles.innerContainer}>
                {children}
            </div>
        </div>
    );
};

export default Container;