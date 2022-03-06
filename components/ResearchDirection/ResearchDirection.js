import React from 'react';
import RichBlocks from '../RichBlocks/RichBlocks';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import styles from './ResearchDirection.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

const ResearchDirection = ({content, even, narrow}) => {
    let researchDirectionClasses = cx({
        ResearchDirection: true,
        even: even,
        narrow: narrow
    });

    return (
        <div className={researchDirectionClasses}>
            <div className={styles.imageContainer}>
                {content.media && content.media.length > 0 ? <ResponsiveImage img={content.media[0]} /> : <></>}
            </div>
            <div className={styles.text}>
                {narrow ? <h4>{content.title}</h4> : <h2>{content.title}</h2>}
                {narrow ? <p>{content.brief}</p> : <RichBlocks blocks={content.content} />}
            </div>
        </div>
    );
};

export default ResearchDirection;