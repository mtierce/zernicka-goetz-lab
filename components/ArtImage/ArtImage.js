import React from 'react';
import styles from './ArtImage.module.scss';

import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';

const ArtImage = ({art, select}) => {
    return (
        <div className={styles.ArtImage} onClick={() => select(art)}>
            <ResponsiveImage img={art.image} />
        </div>
    );
};

export default ArtImage;