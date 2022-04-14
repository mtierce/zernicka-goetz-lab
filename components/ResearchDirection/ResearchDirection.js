import React from 'react';
import RichBlocks from '../RichBlocks/RichBlocks';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import styles from './ResearchDirection.module.scss';
import classNames from 'classnames/bind';

import Masonry from 'react-masonry-component';

let cx = classNames.bind(styles);

const RelPub = ({pub}) => {
    console.log(pub);
    return (
        <div className={`${styles.relatedPub} relPub-grid-item`}>
            <p className="body5">
               {pub.authors}. <a href={pub.link} target="_blank" rel="noopener noreferrer">{pub.title}</a>. <em>{pub.pub}</em>. DOI: {pub.doi}.
            </p>
        </div>
    )
}

const masonryOptions = {
    transitionDuration: 0,
    itemSelector: '.relPub-grid-item',
    columnWidth: '.relPub-grid-sizer',
    gutter: 18
};

const RelatedPubs = ({pubs}) => {
    return (
        <div className={styles.relatedPubs}>
            <h5>Selected Publications</h5>
            <Masonry className={styles.pubList} options={masonryOptions}>
                <div className="relPub-grid-sizer"></div>
                {pubs.map( pub => <RelPub pub={pub} key={pub._key}/>)}
            </Masonry>
        </div>
    )
}

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