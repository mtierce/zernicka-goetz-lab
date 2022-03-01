import React, {useEffect, useState} from 'react';
import styles from './Footer.module.scss';
import Classnames from 'classnames/bind';
import sanityClient from '@sanity/client'
import Link from 'next/link';
import { useRouter } from 'next/router';

const cx = Classnames.bind(styles);

const Footer = ({hidden}) => {

    let footerStyles = () => cx({
        footer: true,
        hide: hidden
    });

    return (
        <div className={footerStyles()}>
            <div className={styles.innerFooter}>
                <h4>FOOTER</h4>
            </div>
        </div>
    );
};

export default Footer;