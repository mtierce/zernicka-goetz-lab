import React from 'react';
import styles from './HomeMissionSection.module.scss';
import RichBlocks from '../RichBlocks/RichBlocks';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';

const HomeMissionSection = ({content, image}) => {
    return (
        <div className={styles.HomeMissionSection}>
            {image && <div className={styles.verticalLogo}><ResponsiveImage img={image} /></div>}
            <div className={styles.mission}><RichBlocks blocks={content} /></div>
        </div>
    );
};

export default HomeMissionSection;