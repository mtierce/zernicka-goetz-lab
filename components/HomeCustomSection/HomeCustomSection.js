import React, {useMemo} from 'react';
import styles from './HomeCustomSection.module.scss';
import RichBlocks from '../RichBlocks/RichBlocks';
import ArrowButton from '../ArrowButton/ArrowButton';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';

const HomeCustomSection = ({content}) => {
    console.log(content);

    const maxWidth = useMemo(() => {
        return content?.headerImage?.maxWidth ? `${content.headerImage?.maxWidth}px` : `10000px`
    }, [])

    const links = useMemo(() => {
        if (content.links?.length === 0) return <></>;
        if (content.links?.length === 1) return <ArrowButton link={content.links[0].url} text={content.links[0].display} size={"large"} type={content.links[0].blank ? "external" : "internal"}/>
        return content.links.map((link, index) => {
            return <ArrowButton key={index} link={link.url} text={link.display} size={"small"} type={link.blank ? "external" : "internal"}/>
        });
    }, [content]);

    return (
        <div className={styles.HomeCustomSection}>
            {content.headerImage?.image && <div className={styles.headerImage} style={{maxWidth: maxWidth}}><ResponsiveImage img={content?.headerImage?.image}/></div>}
            <RichBlocks blocks={content.text} />
            {links && (
                <div className={styles.linkContainer}>{links}</div>
            )}
        </div>
    );
};

export default HomeCustomSection;