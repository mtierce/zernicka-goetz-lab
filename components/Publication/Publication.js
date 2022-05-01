import React from 'react';
import styles from './Publication.module.scss';
import classNames from 'classnames/bind';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';

const cx = classNames.bind(styles);

const Publication = ({pub}) => {
    const pubClasses = cx({
        Publication: true,
        featured: pub.featured,
        "pub-grid-item-featured": pub.featured, 
        "pub-grid-item": true
    });
    if (pub.featured) {
        return (
            <div className={pubClasses}>
                <a href={pub.link} target="_blank" rel="noopener noreferrer"><h2 className={styles.title}>{pub.title}</h2></a>
                { pub.image?.asset ? (
                    <div className={styles.featWithImage}>
                        <ResponsiveImage img={pub.image} />
                        <div>
                            <p className={`${styles.authors} body4`}>{pub.authors}</p>
                            <p className={`${styles.authors} body4`}><em>{pub.pub}</em>. DOI: {pub.doi}</p>    
                        </div>
                    </div>
                ) : (
                    <>
                    <p className={`${styles.authors} body4`}>{pub.authors}</p>
                    <p className={`${styles.authors} body4`}><em>{pub.pub}</em>. DOI: {pub.doi}</p>    
                    </>
                )}
            </div>
        ); 
    } else {
        return (
            <div className={pubClasses}>
                {pub.image?.asset && <ResponsiveImage img={pub.image} />}
                <a href={pub.link} target="_blank" rel="noopener noreferrer"><h4 className={styles.title}>{pub.title}</h4></a>
                <p className={`${styles.authors} body5`}>{pub.authors}</p>
                <p className={`${styles.authors} body5`}><em>{pub.pub}</em>. DOI: {pub.doi}</p>
            </div>
        );
    }
};

export default Publication;