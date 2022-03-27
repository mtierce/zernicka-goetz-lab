import React from 'react';
import styles from './PublicationGroup.module.scss';
import Masonry from 'react-masonry-component';

// COMPONENTS
import Publication from '../Publication/Publication';

const PublicationGroup = ({pubGroup}) => {
    const masonryOptions = {
        transitionDuration: 0,
        itemSelector: '.pub-grid-item',
        columnWidth: '.pub-grid-sizer',
        gutter: 18
    };

    return (
        <div className={styles.PublicationGroup}>
            <h1 className={styles.year}>{pubGroup[0].pubDate.slice(0, 4)}</h1>
            <Masonry 
                className={styles.masonry}
                options={masonryOptions}
            >
                <div className="pub-grid-sizer"></div>
                {pubGroup.map( pub => <Publication pub={pub} gridItem={styles.gridItem} key={pub._id} />)}
            </Masonry>
        </div>
    );
};

export default PublicationGroup;
