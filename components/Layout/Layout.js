import React, { ReactChild, ReactChildren, useState, useRef, useEffect } from 'react';
import styles from './Layout.module.scss';
import Header from '../Header/Header';  
import Footer from '../Footer/Footer';
import Head from 'next/head';

const Layout = ({children}) => {
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
        if ((heightRef.current - window.scrollY - window.innerHeight) < 20) {
            setHidden(false);
        } else if (window.scrollY > 20) {
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

    return (
        <>  
            <Head>
                <link rel="stylesheet" href="https://use.typekit.net/ztw7xok.css" />
            </Head>

            <Header hidden={hidden}/>

            <main className={styles.Layout}>
                {children}
            </main>

            <Footer hidden={hidden}/>
        </>
    );
};

export default Layout;