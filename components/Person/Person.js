import React from 'react';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import styles from './Person.module.scss';
import ArrowButton from '../ArrowButton/ArrowButton';

const Links = ({links}) => {
    console.log(links);
    return links.map(link => {
        return link.type == "email" ? (
            <p className="body5"><a key={link._key} href={`mailto:${link.url}`}>{link.url}</a></p>
        ) : (
            <p className="body5"><a key={link._key} href={link.url} target="_blank" rel='noopener noreferrer'>{link.displayText}</a></p>
        )
    })
}

const Person = ({person}) => {
    return (
        <div className={styles.Person}>
            <div className={styles.portrait}>
                {person.portrait && (
                    <ResponsiveImage img={person.portrait} />
                )}
            </div>
            <div className={styles.text}>
                <h4>{person.firstName} {person.lastName}</h4>
                {person.job && person.job != "" ? <h6 className={styles.job}>{person.job}</h6> : <></>}
                {person.bio && person.bio != "" ? <p className="body4">{person.bio}</p> : <> </>}
                {person.links && person.links.length > 0 ? <Links links={person.links} /> : <></>}
            </div>
        </div>
    );
};

export default Person;