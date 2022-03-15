import React from 'react';
import styles from './Tags.module.scss';
import {useSearchFilter} from '../../contexts/searchFilterContext';

const Tag = ({tag, toggle}) => {
    return (
        <li
            onClick={() => toggle(tag)}
            className={styles.tag}
        ><h6>{tag}</h6></li>
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
            <h4>Filter Terms</h4>
            <div className={styles.tagList}>
                {tags.map(tag => <Tag tag={tag} key={tag} toggle={toggleTag}/>)}
            </div>
        </div>
    );
};

export default Tags;