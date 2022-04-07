import React from 'react';
import styles from './Alumni.module.scss';
import Masonry from 'react-masonry-component';

const Alumni = ({children}) => {
    const masonryOptions = {
        transitionDuration: 0,
        itemSelector: '.alumni-grid-item',
        columnWidth: '.alumni-grid-sizer',
        gutter: 18
    };
    return (
        <Masonry className={styles.Alumni} options={masonryOptions}>
            <div className="alumni-grid-sizer"></div>
            {children}
        </Masonry>
    );
};

export default Alumni;