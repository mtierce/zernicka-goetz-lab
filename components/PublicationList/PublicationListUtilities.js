export const matchSearch = (term, publication) => {
    // return true if title, authors, or abstract includes term string
    return (publication.title && publication.title.toLowerCase().includes(term.toLowerCase())) || (publication.authors && publication.authors.toLowerCase().includes(term.toLowerCase()));
}

export const matchFilter = (term, publication) => {
    // return true if publication tag includes tag term
    if (!("tags" in publication)) return false;
    return (publication.tags && publication.tags.some(tag => tag.tag === term));
}

export const getFilter = (search, filter) => {    
    // return true if there are no search terms or filter terms
    if (search.terms.length == 0 && filter.terms.length == 0) return (pub) => true;
    // return true if pub has any matches on search term or any filter
    return (publication) => {
        return search.terms.some(term => matchSearch(term, publication)) || filter.terms.some(term => matchFilter(term, publication));
    }
}

export const chunkPubsByYear = (pubs) => {
    let prevYear = null;
    return pubs.reduce( (prev, curr) => {
        // if current pub date is a new year
        let year = new Date(curr.pubDate).toLocaleDateString('en', {year: "numeric"});

        if ( prev.length == 0 || year != prevYear ) {
            prev.push([curr]);
        } else {
            prev[prev.length - 1].push(curr);
        }

        prevYear = year;
        return prev;
    }, [])
}