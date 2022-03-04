import React, {useEffect, useRef, useState} from 'react';
import styles from './ResponsiveImage.module.scss';
import NextImage from 'next/image';

const ResponsiveImage = ({img}) => {
    const ref = useRef(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (ref) {
            setWidth(getWidth(ref.current.offsetWidth));
        }
        window.addEventListener('resize', handleResize);
        return () => {window.removeEventListener('resize', handleResize)}
    }, []);

    const handleResize = () => {
        setWidth(getWidth(ref.current.offsetWidth));
    }

    const getWidth = (width) => {
        return 250 * (Math.floor(width / 250) + 1);
    }

    return (
        <div className={styles.imageContainer} ref={ref} key={img._key}>
            {width > 0 &&
                <NextImage
                    src={`${img.asset.url}?w=${width}`}
                    width={width}
                    height={width / img.asset.metadata.dimensions.aspectRatio}
                    blurDataURL={img.asset.metadata.lqip}
                    placeholder="blur"
                />
            }
        </div>
    );
};

export default ResponsiveImage;