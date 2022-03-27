import React, {useState, useEffect} from 'react';
import styles from './HomePubsSection.module.scss';
import getPublications from '../../utils/getPublications';
import Masonry from 'react-masonry-component';
import ArrowButton from '../ArrowButton/ArrowButton';

const FirstPub = ({pub}) => {
    return (
        <div className={styles.FirstPub}>
            <h2>{pub.title}</h2>
            <h4>{pub.pub}</h4>
        </div>
    )
}

const FeatPubs = ({pubs}) => {
    return pubs.map( pub => {
        return (
            <div className={`${styles.featPub} homePubs-grid-item`} key={pub._id}>
                <h4>{pub.title}</h4>
                <p className='body5'>{pub.pub}</p>
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

const HomePubsSection = ({}) => {
    const [pubs, setPubs] = useState([]);

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
        <div className={styles.HomePubsSection}>
            {pubs.length > 0 ? <FirstPub pub={pubs[0]} /> : <></>}
            {pubs.length > 1 ? (
                <Masonry className={styles.featPubs} options={masonryOptions}>
                    <div className='homePubs-grid-sizer'></div>
                    <FeatPubs pubs={pubs.slice(1, 5)} />
                </Masonry>
             ) : <></>}
            <ArrowButton link={"/publications"} text={"Publications"} type={"internal"} size={"large"}/>
        </div>
    );
};

export default HomePubsSection;