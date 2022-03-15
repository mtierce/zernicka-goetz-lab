import React from 'react';
import styles from './Lightbox.module.scss';

import ButtonIcon from '../ButtonIcon/ButtonIcon';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import NextImage from 'next/image';

const Lightbox = ({selected, deselect}) => {
    console.log(selected);
    return (
        <div className={styles.Lightbox}>
            <div className={styles.imageContainer}>
                <NextImage
                    src={`${selected.image.asset.url}`}
                    width={selected.image.asset.metadata.dimensions.width}
                    height={selected.image.asset.metadata.dimensions.height}
                />    
            </div>
            <div className={styles.meta}>
                {selected.title && <h6>{selected.title}</h6>}
                {selected.description && <p className="body5">{selected.description}</p>}
                <div className={styles.close}><ButtonIcon type="close" callback={() => deselect()} /></div>
            </div>
        </div>
    );
};

export default Lightbox;