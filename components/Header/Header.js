import React, {useEffect, useState, useRef} from 'react';
import styles from './Header.module.scss';
import Classnames from 'classnames/bind';
import Link from 'next/link';

const cx = Classnames.bind(styles);

const Header = ({hidden}) => {

    let headerStyles = () => cx({
        header: true,
        hide: hidden
    });

    return (
        <div className={headerStyles()}>
            <div className={styles.innerHeader}>
                <h1><Link href="/">SPEEDBOAT</Link></h1>
            </div>
        </div>
    );
};

export default Header;