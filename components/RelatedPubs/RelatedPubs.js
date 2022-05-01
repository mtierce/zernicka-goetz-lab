import React from 'react';
import styles from './RelatedPubs.module.scss';
import Masonry from 'react-masonry-component';

const RelPub = ({pub}) => {
    return (
        <div className={`${styles.relatedPub} relPub-grid-item`}>
            <p className="body5">
               {pub.authors}. <a href={pub.link} target="_blank" rel="noopener noreferrer">{pub.title}</a>. <em>{pub.pub}</em>. {new Date(pub.pubDate).toLocaleDateString('en', {year: "numeric"})}.
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

const RelatedPubs = ({pubs, title = "Selected Publications", onPage = false}) => {
    return (
        <div className={styles.relatedPubs}>
            {onPage ? <h3 className={styles.title}>{title}</h3> : <h5 className={styles.title}>{title}</h5>}
            <Masonry className={styles.pubList} options={masonryOptions}>
                <div className="relPub-grid-sizer"></div>
                {pubs.map( pub => <RelPub pub={pub} key={pub._key}/>)}
            </Masonry>
        </div>
    )
};

export default RelatedPubs;