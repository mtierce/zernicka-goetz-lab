import React from 'react';
import styles from './Alumni.module.scss';
import Masonry from 'react-masonry-component';

const Alumni = ({children}) => {
    return (
        <Masonry className={styles.Alumni}>
            {children}
        </Masonry>
    );
};

export default Alumni;