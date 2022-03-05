import Layout from '../../components/Layout/Layout';
import getMenu from '../../utils/getMenu';
import getPage from '../../utils/getPage';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Container from '../../components/Container/Container';
import PageSection from '../../components/PageSection/PageSection';

export default function Page({menuItems}) {
    const [page, setPage] = useState(null);
    const router = useRouter();

    useEffect(() => {
        console.log("page state change");
        console.log(page);
    }, [page])

    // Fetch page data and push to state
    useEffect(() => {
        console.log("router query change");
        console.log(router.query.slug);
        getPage(router.query.slug)
            .then( res => {
                console.log(res);
                setPage(res);
            })
            .catch( err => {
                console.log(err);
            });
    }, [router.query.slug])

    // Map page sections
    const PageContent = () => {
        return page.content.map( section => {
            console.log(section);
            return <PageSection key={section._key} section={section} />
        })
    }

    return (
        <>
            <Head>
                <title>{page && page.title && `${page.title} :: Zernicka-Goetz Lab`}</title>
            </Head>
            <Layout menuItems={menuItems}>
                <Container>
                    {page && page.content && page.content.length > 0 ? <PageContent/> : <></>}
                </Container>
            </Layout>
        </>
    )
}

export const getStaticPaths = async () => {
    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}

export async function getStaticProps({params}) {
    console.log("getting menu");
    const menuItems = await getMenu();
    return {
      props: { menuItems }
    }
}