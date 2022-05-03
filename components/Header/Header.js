import React, {useEffect, useState, useRef} from 'react';
import styles from './Header.module.scss';
import Classnames from 'classnames/bind';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import getHeaderImage from '../../utils/getHeaderLogo';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';

const cx = Classnames.bind(styles);

const Header = ({finishedScrolling, hideMenu, setHideMenu}) => {
    const router = useRouter();
    const [headerLogo, setHeaderLogo] = useState();

    useEffect(() => {
        getHeaderImage()
            .then(res => {
                console.log(res);
                setHeaderLogo(res.horizontalLogo);
            })
            .catch(err => console.log(err));
    }, [])
    
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
        let minScroll= 20;

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
        hide: hidden,
        noHide: (router.pathname == "/" && !finishedScrolling) || !hideMenu
    });

    return (
        <div className={headerStyles()}>
            <div className={styles.innerHeader}>
                <Link href="/"><a>
                <div className={styles.logoContainer}>
                    {headerLogo && <img className={styles.logo} src={headerLogo.asset.url} />}
                </div>
                </a></Link>
            </div>
            <div className={styles.menuButton}>
                <ButtonIcon 
                    type={hideMenu ? "hamburger" : "close"}
                    callback={() => setHideMenu(!hideMenu)}
                />
            </div>
        </div>
    );
};

export default Header;