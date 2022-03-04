import React from 'react';
import styles from './PublicationGroup.module.scss';
import Masonry from 'react-masonry-component';

// COMPONENTS
import Publication from '../Publication/Publication';

const PublicationGroup = ({pubGroup}) => {
    const masonryOptions = {
        transitionDuration: 1000,
        columnWidth: 1
    };

    return (
        <div className={styles.PublicationGroup}>
            <h1 className={styles.year}>{pubGroup[0].pubDate.slice(0, 4)}</h1>
            <Masonry 
                className={styles.masonry}
                options={masonryOptions}
            >
                {pubGroup.map( pub => <Publication pub={pub} key={pub._id} />)}
            </Masonry>
        </div>
    );
};

export default PublicationGroup;
