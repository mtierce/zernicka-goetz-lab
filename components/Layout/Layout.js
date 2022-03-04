import React, { ReactChild, ReactChildren, useState, useRef, useEffect, memo } from 'react';
import styles from './Layout.module.scss';
import Header from '../Header/Header';  
import Footer from '../Footer/Footer';
import Head from 'next/head';

const Layout = memo(({menuItems, children}) => {
    

    return (
        <>  
            <Header />

            <main className={styles.Layout}>
                {children}
            </main>

            <Footer menuItems={menuItems} />
        </>
    );
});

export default Layout;