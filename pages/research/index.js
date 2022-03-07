import { useState, useEffect } from "react";
import AlternatingContainer from '../../components/AlternatingContainer/AlternatingContainer';
import Layout from "../../components/Layout/Layout";
import getMenu from "../../utils/getMenu";
import getResearch from "../../utils/getResearch";
import ResearchDirection from "../../components/ResearchDirection/ResearchDirection";
import ResearchPageSection from '../../components/ResearchPageSection/ResearchPageSection';
import Container from "../../components/Container/Container";
import RelatedPubs from "../../components/RelatedPubs/RelatedPubs";

const ResearchContent = ({content}) => {
    let count = 0;
    return content.map( section => {
        if (section._type == "research") {
            count++;
            return <ResearchDirection key={section._key} content={section} even={count % 2 == 0}/>
        } else if (section._type == "section") {
            count += 2;
            return [<ResearchPageSection key={section._key} content={section} />, <div key={`${section._key}space`} className={StyleSheet.space}></div>]
        }
    });
}

const RelatedPubsContainer = ({researchContent}) => {
    return (
        <Container>
            <h3>Related Publications</h3>
            <RelatedPubs researchContent={researchContent} />
        </Container>
    )
}


export default function Research({menuItems}) {
    const [research, setResearch] = useState(null);
    useEffect( () => {
        getResearch()
            .then( res => {
                console.log(res);
                setResearch(res);
            })
            .catch( err => {
                console.log(err);
            })
    }, [])

    return (
        <Layout menuItems={menuItems}>
            <AlternatingContainer>
                {research && research.content && research.content.length > 0 ? <ResearchContent content={research.content} /> : <></>}
            </AlternatingContainer>
            {research && research.content && research.content.some( section => section._type == "research" && section.relatedPubs && section.relatedPubs.length > 0) ? <RelatedPubsContainer researchContent={research.content}/> : <></>}
        </Layout>
    )
}

export async function getStaticProps({params}) {
    const menuItems = await getMenu();
    return {
      props: { menuItems }
    }
}