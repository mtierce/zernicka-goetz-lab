import React from 'react';
import styles from './Alumnus.module.scss';

const Alumnus = ({person}) => {
    return (
        <div className={`${styles.Alumnus} alumni-grid-item`}>
            {(person.firstName || person.lastName) && <h5>{person.firstName} {person.lastName}</h5>}
            {person.currentPosition && <p className="body5">{person.currentPosition}</p>}
        </div>
    );
};

export default Alumnus;