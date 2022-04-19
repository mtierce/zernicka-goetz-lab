import React, { useEffect, useState } from 'react';
import styles from './HomeNewsSection.module.scss';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import RichBlocks from '../RichBlocks/RichBlocks';
import getNews from '../../utils/getNews';
import ArrowButton from '../ArrowButton/ArrowButton';

const FirstNewsItem = ({item}) => {
    return (
        <div className={styles.FirstNewsItem}>
            {item.images && item.images.length > 0 ? <ResponsiveImage img={item.images[0]} /> : <></>}
            <h2>{item.title}</h2>
            <div className={styles.post}>
                <h5 className={styles.date}>
                    {new Date(item.date).toLocaleDateString("en", {month: "long", day: "numeric", year: "numeric"})}
                </h5>
                <div className={styles.text}>
                    <RichBlocks blocks={item.content} />
                </div>
            </div>
        </div>
    )
}

const SmallNewsItems = ({items}) => {
    return items.map( item => {
        return (
            <div key={item._id} className={styles.smallItem}>
                <h4>{item.title}</h4>
                <div className={styles.text}>
                    <RichBlocks blocks={item.content} />
                </div>
            </div>
        )
    })
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

    return (
        <div className={styles.HomeNewsSection}>
            {news && news.length > 0 ? <FirstNewsItem item={news[0]}/> : <></>}
            {news && news.length > 2 ? <div className={styles.smallItems}><SmallNewsItems items={[news[1], news[2]]} /></div> : <></>}
            <ArrowButton link={"/news"} size={"large"} text={"News"} type={"internal"}/>
        </div>
    );
};

export default HomeNewsSection;