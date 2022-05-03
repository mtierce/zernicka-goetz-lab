import React from 'react';
import styles from './NewsItem.module.scss';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import RichBlocks from '../RichBlocks/RichBlocks';

const NewsItem = ({item}) => {
    return (
        <div className={styles.NewsItem}>
            {item.images && item.images.length > 0 ? <ResponsiveImage img={item.images[0]} /> : <></>}
            <h3>{item.title}</h3>
            <div className={styles.post}>
                <h4 className={styles.date}>
                    {new Date(item.date).toLocaleDateString("en", {month: "long", day: "numeric", year: "numeric"})}
                </h4>
                <div className={styles.text}>
                    <RichBlocks blocks={item.content} />
                </div>
            </div>
        </div>
    );
};

export default NewsItem;