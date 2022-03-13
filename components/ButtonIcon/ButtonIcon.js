import React from 'react';
import styles from './ButtonIcon.module.scss';
import FilterIcon from '../../public/assets/search.svg';
import CloseIcon from '../../public/assets/close.svg'
import {useMemo} from 'react';

const ButtonIcon = ({callback, type="close"}) => {
    const getIcon = useMemo(() => {
        if (type == "close") {
            return <CloseIcon />
        } else if (type == "filter") {
            return <FilterIcon />
        } else {
            return <></>
        }
    }, [type])

    return (
        <div className={styles.ButtonIcon} onClick={callback}>
            {getIcon}
        </div>
    );
};

export default ButtonIcon;