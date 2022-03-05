import React from 'react';
import styles from './LabGroup.module.scss';

// COMPONENTS
import Person from '../Person/Person';
import PersonCategory from '../PersonCategory/PersonCategory';
import Alumni from '../Alumni/Alumni';
import Alumnus from '../Alumnus/Alumnus';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';

const LabGroup = ({group, people, roles}) => {
    const mapAlumni = () => {
        return (
          <Alumni>
            {people.filter(person => person.alumni).map( person => {
              return (
                <Alumnus person={person} key={person._id} />
              )
            })}
          </Alumni>
        )
    }

    const getPeopleByCategory = (role) => {
        return people.filter( person => person.role.display == role.display && !person.alumni)
    }

    const getAlumni = () => {
        return people.filter( person => person.alumni);
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
                <h4>{group.description}</h4>
            </div>
            <ResponsiveImage img={group.groupPhoto} />
            {mapCategories(roles)}
            {getAlumni().length > 0 && mapAlumni(getAlumni())}
        </div>
    );
};

export default LabGroup;