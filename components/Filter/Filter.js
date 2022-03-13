import React, { useEffect, useState } from 'react';
import styles from './Filter.module.scss';

import Tags from '../Tags/Tags';
import SearchBar from '../SearchBar/SearchBar';
import Container from '../Container/Container';

const Filter = ({open, setFilterOpen, tags}) => {
    const [shouldRender, setRender] = useState(open);

    useEffect(() => {
        if (open) setRender(true);
    }, [open]);

    const onAnimationEnd = () => {
        if (!open) setRender(false);
    }

    if (!shouldRender) return <></>
    return (
        <div className={styles.Filter}
            style={{ animation: `${open ? "fadeIn" : "fadeOut"} 1s` }}
            onAnimationEnd={onAnimationEnd}
        >   
            <Container>
                <SearchBar hideFilter={() => setFilterOpen(false)}/>
                <Tags tags={tags} hideFilter={() => setFilterOpen(false)} />
            </Container>
        </div>
    );
};

export default Filter;