import React, {useRef, useState} from 'react';
import { useSearchFilter } from '../../contexts/searchFilterContext';
import styles from './SearchBar.module.scss';
import BasicButton from '../BasicButton/BasicButton';

const SearchBar = ({hideFilter}) => {
    const searchBox = useRef();
    const [searchText, setSearchText] = useState('');
    const {search, filter} = useSearchFilter();

    const searchEnter = () => {
        hideFilter();
        filter.clear();
        search.clear();
        console.log(`Before: \nsearch terms: ${search.terms.join(", ")}\nsearch word: ${searchText}`);

        if (searchText !== "" ) {
            search.set([searchText]);
        } else if (searchText == "") search.clear();

        console.log(`After: \nsearch terms: ${search.terms.join(", ")}\nsearch word: ${searchText}`);
    }
    
    return (
        <div className={styles.SearchBar}>
            <form onSubmit={(event) => {event.preventDefault(); searchEnter()}}>
                <input
                    ref={searchBox}    
                    type="text"
                    onChange={(event) => setSearchText(event.target.value)}
                    placeholder="Search"
                    value={searchText}
                />
                <BasicButton call><h5>Submit</h5></BasicButton>
            </form>
        </div>
    );
};

export default SearchBar;