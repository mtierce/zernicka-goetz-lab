import React from 'react';
import styles from './HomeMissionSection.module.scss';
import RichBlocks from '../RichBlocks/RichBlocks';

const HomeMissionSection = ({content}) => {
    console.log(content);
    return (
        <div className={styles.HomeMissionSection}>
            <img src={"/assets/logoVertical.png"} />
            <div className={styles.mission}><RichBlocks blocks={content} /></div>
        </div>
    );
};

export default HomeMissionSection;