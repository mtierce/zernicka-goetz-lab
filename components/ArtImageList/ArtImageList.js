import React from 'react';
import styles from './ArtImageList.module.scss';

import Masonry from 'react-masonry-component';

import ArtImage from '../ArtImage/ArtImage';

const masonryOptions = {
    transitionDuration: 0,
    itemSelector: '.art-grid-item',
    columnWidth: '.art-grid-sizer',
    gutter: 18
}

const ArtImageList = ({art, select}) => {
    

    return (
        <div className={styles.ArtImageList}>
            <Masonry
                className={styles.masonry}
                options={masonryOptions}
            >
                <div className="art-grid-sizer"></div>
                { art && art.length > 0 && art.map( art => {
                    return <ArtImage 
                        key={art._key} 
                        art={art} 
                        select={select}
                    />
                })}
            </Masonry>
        </div>
    );
};

export default ArtImageList;