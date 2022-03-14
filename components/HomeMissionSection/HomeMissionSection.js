import React from 'react';
import styles from './HomeMissionSection.module.scss';
import NextImage from 'next/image';

const HomeMissionSection = ({content}) => {
    return (
        <div className={styles.HomeMissionSection}>
            <img src={"/assets/logoVertical.png"} />
            <h3>{content}</h3>
        </div>
    );
};

export default HomeMissionSection;