import React from 'react';
import ArrowButton from '../ArrowButton/ArrowButton';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import styles from './HomeBookSection.module.scss';
import bookImage from '../../public/assets/danceOfLife.jpg';
import Image from 'next/image';

const HomeBookSection = ({}) => {
    return (
        <div className={styles.HomeBookSection}>
            <h2>Read <em>The Dance of Life</em></h2>
            <div className={styles.content}>
                <Image src={bookImage} className={styles.book}/>
                <div className={styles.text}>
                    <p>The Dance of Life will take you inside the incredible world of life just as it begins. It reveals the wonder of the earliest and most profound moments of early life; how we become human. Through Magda’s trailblazing research as a professor at Cambridge, you’ll learn how early life starts to take shape and discover the true beauty of life’s beginnings.</p>
                    <p>– Penguin Random House</p>
                </div>
            </div>
            <div className={styles.buttons}>
                <ArrowButton link={"https://www.barnesandnoble.com/w/the-dance-of-life-magdalena-zernicka-goetz/1130777524"} text={"Barnes & Noble"} />
                <ArrowButton link={"https://amazon.com/Dance-Life-Science-Single-Becomes/dp/1541699068"} text={"Amazon"} />
            </div>
        </div>
    );
};

export default HomeBookSection;