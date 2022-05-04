import React, {useState, useEffect, useRef} from 'react';
import styles from './HomePubsSection.module.scss';
import getPublications from '../../utils/getPublications';
import ArrowButton from '../ArrowButton/ArrowButton';

const FeatPubs = ({pubs}) => {
    return pubs.map( pub => {
        console.log(pub);
        return (
            <div className={`${styles.featPub} homePubs-grid-item`} key={pub._id}>
                <h6 style={{marginBottom: "0.5rem"}}>{new Date(pub.pubDate.replace(/-/g, '\/').replace(/T.+/, '')).toLocaleDateString('en', {month:"long", day: "numeric", year: "numeric"})}</h6>
                <a href={pub.link} target="_blank" rel="noopener noreferrer"><h4 className={styles.title}>{pub.title}</h4></a>
                <p className='body4'>{pub.pub}</p>
            </div>
        )
    })
}

const HomePubsSection = ({image}) => {
    const [pubs, setPubs] = useState([]);
    const containerRef = useRef();

    useEffect(() => {
        getPublications()
            .then( res => {
                setPubs(res);
            })
            .catch( err => {
                console.log(err);
            })
    }, [])

    return (
        <div className={styles.HomePubsSection} ref={containerRef}>
            <h2>Recent Publications</h2>
            {pubs.length > 1 ? (
                <div className={styles.featPubs}>
                    <FeatPubs pubs={pubs.filter(pub => pub.homePage).slice(0, 9)} />
                </div>
             ) : <></>}
            <ArrowButton link={"/publications"} text={"Publications"} type={"internal"} size={"large"}/>
        </div>
    );
};

export default HomePubsSection;