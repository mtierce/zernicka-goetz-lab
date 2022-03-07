import React from 'react';
import styles from './HomeCustomSection.module.scss';
import RichBlocks from '../RichBlocks/RichBlocks';
import ArrowButton from '../ArrowButton/ArrowButton';

const HomeCustomSection = ({content}) => {
    return (
        <div className={styles.HomeCustomSection}>
            <RichBlocks blocks={content.text} />
            <ArrowButton link={content.link.url} text={content.link.display} size={"large"} type={"internal"}/>
        </div>
    );
};

export default HomeCustomSection;