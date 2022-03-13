import React, {useEffect, useState, useRef} from 'react';
import styles from './Header.module.scss';
import Classnames from 'classnames/bind';
import Link from 'next/link';
import { useRouter } from 'next/router';

const cx = Classnames.bind(styles);

const Header = ({headerButton}) => {
    const router = useRouter();
    
    // hide the header & footer?
    const [hidden, setHidden] = useState(false);

    // full height of document
    const [height, _setHeight] = useState(0);
    const heightRef = useRef(height);
    const setHeight = (newHeight) => {
        heightRef.current = newHeight;
        _setHeight(newHeight);
    }

    // track scroll position
    const [scrollPos, _setScrollPos] = useState(0);
    const scrollPosRef = useRef(scrollPos);
    const setScrollPos = (position) => {
        scrollPosRef.current = position;
        _setScrollPos(position);
    }

    // add listener for scroll and get height of page on mount
    useEffect(() => {
        window.addEventListener('scroll', watchScroll);
        let body = document.body,
            html = document.documentElement;
        let height = Math.max( body.scrollHeight, body.offsetHeight, 
            html.clientHeight, html.scrollHeight, html.offsetHeight );
        setHeight(height);

        return () => {
            window.removeEventListener('scroll', watchScroll)
        }
    }, []);


    function watchScroll(event) {
        let minScroll = router.pathname == "/" ? window.innerHeight * 0.5 : 20;
        if ((heightRef.current - window.scrollY - window.innerHeight) < 20) {
            setHidden(false);
        } else if (window.scrollY > minScroll) {
            if (window.scrollY > scrollPosRef.current) {
                setHidden(true);
            } else {
                setHidden(false);
            }
        } else {
            setHidden(false);
        }

        let body = document.body,
            html = document.documentElement;
        let height = Math.max( body.scrollHeight, body.offsetHeight, 
            html.clientHeight, html.scrollHeight, html.offsetHeight );

        setHeight(height);
        setScrollPos(window.scrollY);
    }

    let headerStyles = () => cx({
        header: true,
        hide: hidden
    });

    return (
        <div className={headerStyles()}>
            <div className={styles.innerHeader}>
                <h2><Link href="/">Zernicka-Goetz Lab</Link></h2>
            </div>
            {headerButton ? <div className={styles.headerButton}>{headerButton}</div> : <></>}
        </div>
    );
};

export default Header;