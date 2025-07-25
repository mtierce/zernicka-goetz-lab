import React from 'react';
import ArrowButton from '../ArrowButton/ArrowButton';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import styles from './HomeBookSection.module.scss';

const HomeBookSection = ({section}) => {
    return (
        <div className={styles.HomeBookSection}>
            <div className={styles.bookHalf}>
                <h3>Read <em>The Dance of Life</em></h3>
                <div className={styles.content}>
                    {section.image && <ResponsiveImage img={section.image} />}
                    <div className={styles.text}>
                        <p className="body4">The Dance of Life will take you inside the incredible world of life just as it begins. It reveals the wonder of the earliest and most profound moments of early life; how we become human. Through Magda’s trailblazing research as a professor at Cambridge, you’ll learn how early life starts to take shape and discover the true beauty of life’s beginnings.</p>
                        <h6>– Penguin Random House</h6>
                    </div>
                </div>
                <div className={styles.buttons}>
                    
                    <ArrowButton link={"https://www.amazon.co.uk/Dance-Life-Symmetry-Cells-Become/dp/0753552922"} text={"Amazon UK"} />
                    <ArrowButton link={"https://amazon.com/Dance-Life-Science-Single-Becomes/dp/1541699068"} text={"Amazon US"} />
                </div>
            </div>
            <div className={styles.twitterHalf}>
                <h3>
                    Follow Magda
                </h3>
                <ArrowButton link={"https://twitter.com/zernickagoetz?lang=en"} text={"Twitter @ZernickaGoetz"} leftAlign={true} />
            </div>
        </div>
    );
};

export default HomeBookSection;