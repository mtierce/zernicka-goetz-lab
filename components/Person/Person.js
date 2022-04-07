import React from 'react';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import styles from './Person.module.scss';
import ArrowButton from '../ArrowButton/ArrowButton';

const Links = ({links}) => {
    console.log(links);
    return links.map(link => {
        return <ArrowButton key={link._key} link={link.url} type={link.type == "email" ? "email" : "external"} leftAlign={true} text={link.display ? link.display : ""} />
    })
}

const Person = ({person}) => {
    return (
        <div className={styles.Person}>
            <div className={styles.portrait}>
                <ResponsiveImage img={person.portrait} />
            </div>
            <div className={styles.text}>
                <h4>{person.firstName} {person.lastName}</h4>
                {person.job && person.job != "" ? <p className="body4">{person.job}</p> : <></>}
                {person.bio && person.bio != "" ? <p className="body4">{person.bio}</p> : <> </>}
                {person.links && person.links.length > 0 ? <Links links={person.links} /> : <></>}
            </div>
        </div>
    );
};

export default Person;