import { createContext, useContext, useState } from "react";

const SearchFilterContext = createContext();

const SearchFilterProvider = ({children}) => {
    const [searchTerms, setSearchTerms] = useState([]);
    
    const addSearchTerm = (term) => {
        setSearchTerms(searchTerms.concat([term]));
    }
    const removeSearchTerm = (termIndex) => {
        let newTerms = [...searchTerms];
        newTerms.splice(termIndex, 1);
        setSearchTerms(newTerms)
    }
    const clearSearchTerms = () => {
        setSearchTerms([]);
    }

    const [filterTerms, setFilterTerms] = useState([]);
    const addFilterTerm = (term) => {
        setFilterTerms(filterTerms.concat([term]));
    }
    const removeFilterTerm = (termIndex) => {
        let newTerms = [...filterTerms];
        newTerms.splice(termIndex, 1);
        setFilterTerms(newTerms)
    }
    const clearFilterTerms = () => {
        setFilterTerms([]);
    }


    const value = {
        search: {terms: searchTerms, add: addSearchTerm, removeTerm: removeSearchTerm, clear: clearSearchTerms, set: setSearchTerms},
        filter: {terms: filterTerms, add: addFilterTerm, removeTerm: removeFilterTerm, clear: clearFilterTerms, set: setFilterTerms},
        }
    return (
        <SearchFilterContext.Provider value={value} >
            {children}
        </SearchFilterContext.Provider>
    )
}

const useSearchFilter = () => {
    const context = useContext(SearchFilterContext);
    if (context === undefined) {
        throw new Error('useSearchFilter must be used with the proper provider')
    }

    return context;
}

export {SearchFilterProvider, useSearchFilter}