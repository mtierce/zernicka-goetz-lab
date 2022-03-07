import Link from 'next/link';
import React from 'react';
import styles from './ArrowButton.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

const LinkComponent = ({link, type="external", children, size="small"}) => {
    const linkStyles = cx({
        ArrowButton: true,
        large: size=="large"
    })

    if (type == "external") {
        return <a className={linkStyles} href={link} target="_blank" rel="noopener noreferrer">{children}</a>
    } else if (type == "internal") {
        return <a className={linkStyles} href={link}>{children}</a>
    } else if (type == "email") {
        return <a className={linkStyles} href={`mailto:${link}`}>{size == "small" ? <h6>Email →</h6> : <h2>Email →</h2>}</a>
    } else {
        return
    }
}

const ArrowButton = ({text, link, type="external", size="small"}) => {
    return (
        <LinkComponent link={link} size={size} type={type}>
            {size == "small" ? <h6>{text} →</h6> : <h2>{text} →</h2>}
        </LinkComponent>
    )
};

export default ArrowButton;