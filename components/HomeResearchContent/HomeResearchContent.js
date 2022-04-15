import React, {useState, useEffect, useRef} from 'react';
import styles from './HomeResearchContent.module.scss';
import ArrowButton from '../ArrowButton/ArrowButton';
import ResearchPageSection from '../ResearchPageSection/ResearchPageSection';
import getResearch from '../../utils/getResearch';
import RichBlocks from '../RichBlocks/RichBlocks';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';

const HomeResearchDirection = ({image}) => {
    return (
        <div className={`${styles.homeResearchDirection} homeResearch-grid-item`}>
            <ResponsiveImage img={image.image} />
            <h4 >{image.caption}</h4>
        </div>
    )
}

const ResearchHeader = ({content}) => {
    return (
        <ResearchPageSection content={content}/>
    )
}

const HomeResearchContent = ({image, text, images}) => {
    const [research, setResearch] = useState(null);
    const containerRef = useRef();

    useEffect( () => {
        getResearch()
            .then( res => {
                setResearch(res);
            })
            .catch( err => {
                console.log(err);
            })
    }, []);

    const mapContent = () => {
        return images.map( (image) => {
            return <HomeResearchDirection key={image._key} image={image}/>
          });
    }
    
    return (
        <div className={styles.HomeResearchContent} ref={containerRef}>
            {/* {image && <img style={{height: `${containerRef.current ? containerRef.current.offsetHeight : 0}px`}} className={styles.sideImage} src={image.asset.url} />} */}
            {/* { research && research.content && research.content[0] && research.content[0]._type == "section" && <ResearchHeader content={research.content[0]}/>} */}
            <div className={styles.text}>
                {text && <RichBlocks blocks={text} />}
            </div>
            <div className={styles.directions}>
                {research && research.content && research.content.length > 0 ? mapContent() : <></>}
            </div>
            <ArrowButton link={"/research"} text={"Research"} type={"internal"} size={"large"}/>
            
        </div>
    )
};

export default HomeResearchContent;