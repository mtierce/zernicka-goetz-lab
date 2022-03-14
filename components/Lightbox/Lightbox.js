import React from 'react';
import styles from './Lightbox.module.scss';

import ButtonIcon from '../ButtonIcon/ButtonIcon';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import NextImage from 'next/image';

const Lightbox = ({selected, deselect}) => {
    console.log(selected);
    return (
        <div className={styles.Lightbox}>
            <div className={styles.close}>
                <ButtonIcon type="close" callback={() => deselect()} />
            </div>
            <div className={styles.innerContainer}>
                <div className={styles.imageContainer}>
                    <NextImage
                        src={`${selected.image.asset.url}`}
                        width={selected.image.asset.metadata.dimensions.width}
                        height={selected.image.asset.metadata.dimensions.height}
                    />    
                </div>
                {selected.title && <h3>{selected.title}</h3>}
                {selected.description && <p>{selected.description}</p>}
            </div>
        </div>
    );
};

export default Lightbox;