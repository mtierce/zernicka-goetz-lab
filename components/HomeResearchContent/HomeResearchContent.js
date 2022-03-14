import React, {useState, useEffect} from 'react';
import styles from './HomeResearchContent.module.scss';
import ArrowButton from '../ArrowButton/ArrowButton';
import ResearchPageSection from '../ResearchPageSection/ResearchPageSection';
import getResearch from '../../utils/getResearch';
import Masonry from 'react-masonry-component';

const HomeResearchDirection = ({content}) => {
    return (
        <div className={styles.homeResearchDirection}>
            <h4>{content.title}</h4>
            <p className='body5'>{content.brief}</p>
        </div>
    )
}

const ResearchHeader = ({content}) => {
    return (
        <ResearchPageSection content={content}/>
    )
}

const HomeResearchContent = () => {
    const [research, setResearch] = useState(null);
    useEffect( () => {
        getResearch()
            .then( res => {
                setResearch(res);
            })
            .catch( err => {
                console.log(err);
            })
    }, []);

    let count = 0;

    const mapContent = () => {
        return research.content.map( (section, index) => {
            if (section._type == "research" && section.homePage) {
                return <HomeResearchDirection key={section._key} content={section}/>
            } else {
                return 
            }
          });
    }
    
    return (
        <div className={styles.HomeResearchContent}>
            { research && research.content && research.content[0] && research.content[0]._type == "section" && <ResearchHeader content={research.content[0]}/>}
            <Masonry className={styles.directions}>
                {research && research.content && research.content.length > 0 ? mapContent() : <></>}
            </Masonry>
            <ArrowButton link={"/research"} text={"Research"} type={"internal"} size={"large"}/>
        </div>
    )
};

export default HomeResearchContent;