import React from 'react';
import styles from './PublicationList.module.scss';

// COMPONENTS
import PublicationGroup from '../PublicationGroup/PublicationGroup';
import Container from '../Container/Container';

const PublicationList = ({pubs}) => {
    return (
        <>
            {pubs.map( groupByYear => <PublicationGroup key={groupByYear[0]._id} pubGroup={groupByYear}/>)}
        </>
    );
};

export default PublicationList;