import React, {memo} from 'react';
import styles from './PageSection.module.scss';
import RichBlocks from '../RichBlocks/RichBlocks';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import Video from '../Video/Video';

const Media = memo(({items}) => {
    return (
        <div className={styles.media}>
            {items.map( item => {
                if (item._type == "image") {
                    return <ResponsiveImage img={item} key={item._key}/>
                } else if (item._type == "video") {
                    return <Video vid={item} key={item._key} />
                }
            })}
        </div>
    )
});

Media.displayName = "Media";

const Text = memo(({title = "", text}) => {
    return (
        <div className={styles.text}>
            {title ? <h1>{title}</h1> : <></>}
            <RichBlocks blocks={text} />
        </div>
    )
});

Text.displayName = "Text";

const PageSection = ({section}) => {
    return (
        <div className={styles.PageSection}>
            {section && section.media && section.media.length > 0 ? <Media items={section.media}/> : <></>}
            {section && section.text ? <Text title={section.title} text={section.text}/> : <></>}
        </div>
    );
};

export default PageSection;