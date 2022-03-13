import React from 'react';
import styles from './Tags.module.scss';
import {useSearchFilter} from '../../contexts/searchFilterContext';

const Tag = ({tag, toggle}) => {
    return (
        <li
            onClick={() => toggle(tag)}
            className={styles.tag}
        ><h3>{tag}</h3></li>
    )
}

const Tags = ({tags, hideFilter}) => {
    const {search, filter} = useSearchFilter();

    const toggleTag = (tag) => {
        if (filter.terms.some(term => term === tag)) {
            hideFilter()
        } else {
            hideFilter();
            filter.set([tag]);
        }
    }

    return (
        <div className={styles.Tags}>
            {tags.map(tag => <Tag tag={tag} key={tag} toggle={toggleTag}/>)}
        </div>
    );
};

export default Tags;