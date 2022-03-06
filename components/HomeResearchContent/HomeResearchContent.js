import React, {useState, useEffect} from 'react';
import styles from './HomeResearchContent.module.scss';
import ArrowButton from '../ArrowButton/ArrowButton';
import ResearchPageSection from '../ResearchPageSection/ResearchPageSection';
import ResearchDirection from '../ResearchDirection/ResearchDirection';
import getResearch from '../../utils/getResearch';

const HomeResearchContent = ({content}) => {
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
                count++;
                return <ResearchDirection key={section._key} content={section} even={count % 2 == 0} narrow={true}/>
            } else if (section._type == "section" && index == 0) {
                count ++;
                return <ResearchPageSection key={section._key} content={section} narrow={true}/>
            }
          });
    }
    
    return (
        <div className={styles.HomeResearchContent}>
            {research && research.content && research.content.length > 0 ? mapContent() : <></>}
            <ArrowButton link={"/research"} text={"Research"} size={"large"}/>
        </div>
    )
};

export default HomeResearchContent;