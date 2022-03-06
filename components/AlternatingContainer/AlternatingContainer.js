import React from 'react';
import styles from './AlternatingContainer.module.scss';
import Container from '../Container/Container';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

const AlternatingContainer = ({narrow=false, children}) => {
    const alternatingStyles = cx({
        AlternatingContainer: true,
        narrow: narrow
    })
    
    return (
        <Container>
            <div className={alternatingStyles}>
                {children}
            </div>
        </Container>
    );
};

export default AlternatingContainer;