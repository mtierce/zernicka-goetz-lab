import React, { useMemo } from 'react';
import styles from './PublicationList.module.scss';

// COMPONENTS
import PublicationGroup from '../PublicationGroup/PublicationGroup';
import Container from '../Container/Container';

// CONTEXTS
import { useSearchFilter } from '../../contexts/searchFilterContext';

// UTILS
import { matchFilter, matchSearch, getFilter, chunkPubsByYear } from './PublicationListUtilities';

const SearchResultsMeta = ({show, numPubs, numFilteredPubs}) => {
    const {search, filter} = useSearchFilter();

    if (!show) return <></>;

    return (
        <div>
            <h3>{numFilteredPubs} out of {numPubs} publications matched {search.terms.length > 0 ? `your search for “${search.terms[0]}”` : `the category of ${filter.terms[0]}`}.</h3>
            <p className={styles.clearFilter} onClick={() => {search.clear(); filter.clear();}}> Clear your {search.terms.length > 0 ? 'search' : 'selection'}</p>
        </div>
    )
}

const PublicationList = ({pubs}) => {
    const {search, filter} = useSearchFilter();

    const publicationFilter = useMemo(() => {
        return getFilter(search, filter);
    }, [search, filter]);

    const filteredPubs = useMemo(() => {
        return pubs.filter(publicationFilter);
    })

    const pubsByYear = useMemo(() => {
        return chunkPubsByYear(filteredPubs);
    }, [filteredPubs]);

    return (
        <>
            <SearchResultsMeta 
                show={search.terms.length != 0 || filter.terms.length != 0}
                numPubs={pubs.length}
                numFilteredPubs={filteredPubs.length}
            />
            {pubsByYear.map( groupByYear => <PublicationGroup key={groupByYear[0]._id} pubGroup={groupByYear}/>)}
        </>
    );
};

export default PublicationList;