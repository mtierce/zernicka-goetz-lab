import React, {useMemo} from 'react';
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

    const pubYearToShow = useMemo(() => {
        let year = pubGroup[0].pubDate.slice(0, 4);
        console.log(year);
        if (Number(year) > 1998) return year;
        else return '1991–1998';
    }, [])

    return (
        <div className={styles.PublicationGroup}>
            <h1 className={styles.year}>{pubYearToShow}</h1>
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
