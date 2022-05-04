import { useState, useEffect } from "react";
import AlternatingContainer from "../../components/AlternatingContainer/AlternatingContainer";
import Layout from "../../components/Layout/Layout";
import getMenu from "../../utils/getMenu";
import getNews from "../../utils/getNews";
import NewsItem from "../../components/NewsItem/NewsItem";

const NewsItems = ({items}) => {
    return items.map( item => {
        return <NewsItem item={item} key={item._key} />
    })
}


export default function News({menuItems}) {
    const [newsItems, setNewsItems] = useState([]);
    useEffect( () => {
        getNews()
            .then( res => {
                setNewsItems(res);
            })
            .catch( err => {
                console.log(err);
            })
    }, [])
    
    return (
        <Layout menuItems={menuItems}>
            <AlternatingContainer>
                {newsItems && newsItems.length > 0 ? <NewsItems items={newsItems} /> : <></>}
            </AlternatingContainer>
        </Layout>
    )
}

export async function getStaticProps({params}) {
    const menuItems = await getMenu();
    return {
      props: { menuItems }
    }
}