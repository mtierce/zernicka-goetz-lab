import React from 'react';
import styles from './ResearchPageSection.module.scss';
import RichBlocks from '../RichBlocks/RichBlocks';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

const ResearchPageSection = ({content, narrow}) => {
    
    const sectionClasses = cx({
        ResearchPageSection: true,
        narrow: narrow
    });
    
    return (
        <div className={styles.ResearchPageSection}>
            <RichBlocks blocks={content.text} noH1={narrow} />
        </div>
    );
};

export default ResearchPageSection;