import React, {useMemo} from 'react';
import styles from './HomeCustomSection.module.scss';
import RichBlocks from '../RichBlocks/RichBlocks';
import ArrowButton from '../ArrowButton/ArrowButton';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';

const HomeCustomSection = ({content}) => {
    console.log(content);

    const maxWidth = useMemo(() => {
        return content.headerImage.maxWidth ? `${content.headerImage.maxWidth}px` : `10000px`
    }, [])

    return (
        <div className={styles.HomeCustomSection}>
            {content.headerImage.image && <div className={styles.headerImage} style={{maxWidth: maxWidth}}><ResponsiveImage img={content.headerImage.image}/></div>}
            <RichBlocks blocks={content.text} />
            <ArrowButton link={content.link.url} text={content.link.display} size={"large"} type={"internal"}/>
        </div>
    );
};

export default HomeCustomSection;