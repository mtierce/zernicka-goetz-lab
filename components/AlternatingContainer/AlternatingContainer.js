import React from 'react';
import styles from './AlternatingContainer.module.scss';
import Container from '../Container/Container';

const AlternatingContainer = ({children}) => {
    return (
        <Container>
            <div className={styles.AlternatingContainer}>
                {children}
            </div>
        </Container>
    );
};

export default AlternatingContainer;