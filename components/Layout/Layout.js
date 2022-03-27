import React, { ReactChild, ReactChildren, useState, useRef, useEffect, memo } from 'react';
import styles from './Layout.module.scss';
import Header from '../Header/Header';  
import Footer from '../Footer/Footer';
import Head from 'next/head';

const Layout = memo(({menuItems, children, finishedScrolling}) => {
    const [hideMenu, setHideMenu] = useState(true);

    return (
        <>  
            <Header finishedScrolling={finishedScrolling} hideMenu={hideMenu} setHideMenu={setHideMenu}/>

            <main className={styles.Layout}>
                {children}
            </main>
 
            <Footer menuItems={menuItems} finishedScrolling={finishedScrolling} hideMenu={hideMenu}/>
        </>
    );
});

Layout.displayName = "Layout";

export default Layout;