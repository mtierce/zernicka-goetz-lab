import React from 'react';
import styles from './LabGroup.module.scss';

// COMPONENTS
import Person from '../Person/Person';
import PersonCategory from '../PersonCategory/PersonCategory';
import Alumni from '../Alumni/Alumni';
import Alumnus from '../Alumnus/Alumnus';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';

const LabGroup = ({group, people, roles}) => {
    const getPeopleByCategory = (role) => {
        return people.filter( person => person.role && person.role.display == role.display && !person.alumni)
    }

    const mapCategories = (roles) => {
        return roles.map( role => {
            let peopleCategory = getPeopleByCategory(role);
            if (peopleCategory.length > 0) {
                return (
                <PersonCategory categoryName={role.display} key={role._id}>
                    {peopleCategory.map( person => <Person person={person} key={person._id} /> )}
                </PersonCategory>
                )
            }

        })
    }

    return (
        <div className={styles.LabGroup}>
            <div className={styles.groupMeta}>
                <h1>{group.title}</h1>
                <p className="body1">{group.description}</p>
                <ResponsiveImage img={group.groupPhoto} />
            </div>
            {mapCategories(roles)}
        </div>
    );
};

export default LabGroup;