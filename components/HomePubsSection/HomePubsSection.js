import React, {useState, useEffect, useRef} from 'react';
import styles from './HomePubsSection.module.scss';
import getPublications from '../../utils/getPublications';
import ArrowButton from '../ArrowButton/ArrowButton';

const FirstPub = ({pub}) => {
    return (
        <div className={styles.FirstPub}>
            <h4 style={{marginBottom: "1rem"}}>{new Date(pub.pubDate).toLocaleDateString('en-us', {month:"long", day: "numeric", year: "numeric"})}</h4>
            <a href={pub.link} target="_blank" rel="noopener noreferrer"><h2 className={styles.title}>{pub.title}</h2></a>
            <p className="body1">{pub.pub}</p>
        </div>
    )
}

const FeatPubs = ({pubs}) => {
    return pubs.map( pub => {
        return (
            <div className={`${styles.featPub} homePubs-grid-item`} key={pub._id}>
                <h6 style={{marginBottom: "0.5rem"}}>{new Date(pub.pubDate).toLocaleDateString('en-us', {month:"long", day: "numeric", year: "numeric"})}</h6>
                <a href={pub.link} target="_blank" rel="noopener noreferrer"><h4 className={styles.title}>{pub.title}</h4></a>
                <p className='body4'>{pub.pub}</p>
            </div>
        )
    })
}

const masonryOptions = {
    transitionDuration: 0,
    itemSelector: '.homePubs-grid-item',
    columnWidth: '.homePubs-grid-sizer',
    gutter: 18
};

const HomePubsSection = ({image}) => {
    const [pubs, setPubs] = useState([]);
    const containerRef = useRef();

    useEffect(() => {
        getPublications()
            .then( res => {
                console.log(res);
                setPubs(res);
            })
            .catch( err => {
                console.log(err);
            })
    }, [])

    return (
        <div className={styles.HomePubsSection} ref={containerRef}>
            {image && <img style={{height: `${containerRef.current ? containerRef.current.offsetHeight : 0}px`}} className={styles.sideImage} src={image.asset.url} />}
            {pubs.length > 0 ? <FirstPub pub={pubs[0]} /> : <></>}
            {pubs.length > 1 ? (
                <div className={styles.featPubs}>
                    <FeatPubs pubs={pubs.slice(1, 5)} />
                </div>
             ) : <></>}
            <ArrowButton link={"/publications"} text={"Publications"} type={"internal"} size={"large"}/>
        </div>
    );
};

export default HomePubsSection;