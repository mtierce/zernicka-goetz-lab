import React, {useEffect, useState, useRef, memo} from 'react';
import styles from './Footer.module.scss';
import Classnames from 'classnames/bind';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ButtonIcon from '../ButtonIcon/ButtonIcon';

const cx = Classnames.bind(styles);

const menuItemClasses = (item, path) => {
    if (item._type == "defaultPage") {
        return cx({
            navItem: true,
            "active": `/${item.title.toLowerCase()}` === path,
        })
    } else {
        return cx({
            navItem: true,
            "active": `/page/${item.slug}` === path,
        });
    }
}

const MapMenuItems = memo(({menuItems, hideMenu, setHideMenu}) => {
    const router = useRouter();

    return menuItems.map( item => {
        if (item._type == "specialPage") {
            if (item.title == "Donate") {
                return (
                    <Link href={`/funding#donate`} key={item._key}>
                       <h4 className={menuItemClasses(item, router.asPath)}>{item.title}</h4>
                    </Link>
                )
            }
            return (
                <Link href={`/${item.title.toLowerCase()}`} key={item._key}>
                    <h4 className={menuItemClasses(item, router.asPath)}>{item.title}</h4>
                </Link>
            )
        } else if (item._type == "standardPageSection") {
            return (
                <Link href={`/page/${item.page.slug}#${item.section}`} key={item._key}>
                    <h4 className={menuItemClasses(item, router.asPath)}>{item.display}</h4>
                </Link>
            )
        } else { // item is a standard page
            return (
                <Link href={`/page/${item.slug}`} key={item._key}>
                    <h4 className={menuItemClasses(item, router.asPath)}>{item.title}</h4>
                </Link>
            )
        }
    })
});
MapMenuItems.displayName = "MapMenuItems";

const Footer = memo(({menuItems, finishedScrolling, hideMenu}) => {
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
        let minScroll = 20;
        
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
    

    let footerStyles = () => cx({
        footer: true,
        hide: hidden,
        mobileHide: hideMenu,
        noHide: router.pathname == "/" && !finishedScrolling
    });

    return (
        <>
            <div className={footerStyles()}>
                <div className={styles.innerFooter}>
                    <MapMenuItems menuItems={menuItems} />
                </div>
            </div>
        </>
    );
});

Footer.displayName = "Footer";

export default Footer;