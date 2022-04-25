import React, { useEffect, useMemo, useState } from 'react';
import styles from './HomeNewsSection.module.scss';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import RichBlocks from '../RichBlocks/RichBlocks';
import getNews from '../../utils/getNews';
import ArrowButton from '../ArrowButton/ArrowButton';

const NewsItem = ({item}) => {
    return (
        <div className={styles.newsItem}>
            {item.images && item.images.length > 0 ? <div className={styles.image} ><ResponsiveImage img={item.images[0]} /></div> : <div className={styles.image}></div>}
            <div className={styles.post}>
                <h4>{item.title}</h4>
                <h6 className={styles.date}>
                    {new Date(item.date).toLocaleDateString("en", {month: "long", day: "numeric", year: "numeric"})}
                </h6>
                <div className={styles.text}>
                    <RichBlocks blocks={item.content} />
                </div>
            </div>
        </div>
    )
}

const HomeNewsSection = ({}) => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        getNews()
            .then(res => {
                console.log(res);
                setNews(res);
            })
            .catch( err => {
                console.log(err);
            })
    }, []);

    const newsItems = useMemo(() => {
        return news.map(item => (
            <NewsItem key={item._id} item={item}/>
        ))
    }, [news])

    return (
        <div className={styles.HomeNewsSection}>
            <h2>Recent News</h2>
            {news && news.length > 0 && newsItems}
            <ArrowButton link={"/news"} size={"large"} text={"News"} type={"internal"}/>
        </div>
    );
};

export default HomeNewsSection;