import React from 'react';
import styles from './ArtImageList.module.scss';

import Masonry from 'react-masonry-component';

import ArtImage from '../ArtImage/ArtImage';

const masonryOptions = {
    transitionDuration: 1000,
    columnWidth: 1
}

const ArtImageList = ({art, select}) => {
    

    return (
        <div className={styles.ArtImageList}>
            <Masonry
                className={styles.masonry}
                options={masonryOptions}
            >
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