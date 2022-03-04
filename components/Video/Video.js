import React from 'react';
import styles from './Video.module.scss';

const Video = ({vid}) => {
    const renderVid = () => {
        if (vid.loop) {
            return <video autoPlay muted loop playsInline><source src={vid.asset.url} type="video/mp4"/></video>
        } else {
            return (
                <video controls>
                    <source src={vid.asset.url}
                            type="video/mp4"/>
                </video>
            );
        }
    }

    return (
        <div className={styles.video}>
            {renderVid()}
        </div>
    )
};

export default Video;