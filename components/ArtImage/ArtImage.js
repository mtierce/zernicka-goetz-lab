import React from 'react';
import styles from './ArtImage.module.scss';

import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';

const ArtImage = ({art, select}) => {
    return (
        <div className={`${styles.ArtImage} art-grid-item`} onClick={() => select(art)}>
            <ResponsiveImage img={art.image} />
        </div>
    );
};

export default ArtImage;