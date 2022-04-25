import React, { useRef} from 'react';
import styles from './HomeResearchContent.module.scss';
import ArrowButton from '../ArrowButton/ArrowButton';
import RichBlocks from '../RichBlocks/RichBlocks';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';

const HomeResearchDirection = ({image}) => {
    return (
        <div className={styles.homeResearchDirection}>
            <div className={styles.imageContainer}><ResponsiveImage img={image.image} /></div>
            <div className={styles.textContainer}><h4 >{image.caption}</h4></div>
        </div>
    )
}

const HomeResearchContent = ({text, images}) => {
    const containerRef = useRef();

    const mapContent = () => {
        return images.map( (image) => {
            return <HomeResearchDirection key={image._key} image={image}/>
          });
    }
    
    return (
        <div className={styles.HomeResearchContent} ref={containerRef}>
            <div className={styles.text}>
                {text && <RichBlocks blocks={text} />}
            </div>
            <div className={styles.directions}>
                {images?.length > 0 ? mapContent() : <></>}
            </div>
            <ArrowButton link={"/research"} text={"Research"} type={"internal"} size={"large"}/>
        </div>
    )
};

export default HomeResearchContent;