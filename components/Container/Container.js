import React, {useMemo} from 'react';
import styles from './Container.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Container = ({noSpaceBetween = false, children}) => {
    const containerClasses = useMemo(() => {
        return cx({
            Container:true,
            noSpaceBetween: noSpaceBetween
        })
    }, [noSpaceBetween])

    return (
        <div className={containerClasses}>
            <div className={styles.innerContainer}>
                {children}
            </div>
        </div>
    );
};

export default Container;