import React from 'react';
import styles from './RelatedPubs.module.scss';
import RelatedPub from '../RelatedPub/RelatedPub';

const RelatedPubs = ({researchContent}) => {
    const pubs = () => {
        return researchContent.map( researchSection => {
            if (researchSection._type == "research" && researchSection.relatedPubs && researchSection.relatedPubs.length > 0) {
                return (
                    <div key={researchSection._key}>
                        <h4>{researchSection.title}</h4>
                        {researchSection.relatedPubs.map( pub => <RelatedPub key={pub._id} pub={pub} />)}
                    </div>
                )
            } else {
                return
            }
        })
    }

    return (
        <div className={styles.relatedPubs}>
            {pubs()}
        </div>
    )
}

export default RelatedPubs;