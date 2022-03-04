import React from 'react';
import styles from './LabGroup.module.scss';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';

const LabGroup = ({group, people}) => {
    return (
        <div className={styles.LabGroup}>
            <h1>{group.title}</h1>
            <h4>{group.description}</h4>
            <ResponsiveImage img={group.groupPhoto} />
        </div>
    );
};

export default LabGroup;