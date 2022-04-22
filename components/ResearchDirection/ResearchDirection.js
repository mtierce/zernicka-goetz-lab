import React from 'react';
import RichBlocks from '../RichBlocks/RichBlocks';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import styles from './ResearchDirection.module.scss';
import classNames from 'classnames/bind';
import RelatedPubs from '../RelatedPubs/RelatedPubs';

let cx = classNames.bind(styles);

const ResearchDirection = ({content, even}) => {
    let researchDirectionClasses = cx({
        ResearchDirection: true,
        even: even
    });

    return (
        <div className={researchDirectionClasses}>
            <div className={styles.imageContainer}>
                {content.media && content.media.length > 0 ? <ResponsiveImage img={content.media[0]} /> : <></>}
            </div>
            <div className={styles.text}>
                {content.title && <h2>{content.title}</h2>}
                {content.content && <RichBlocks blocks={content.content} />}
                { content.relatedPubs && content.relatedPubs.length > 0 && <RelatedPubs pubs={content.relatedPubs} />}
            </div>
        </div>
    );
};

export default ResearchDirection;