import Container from "../../components/Container/Container";
import Layout from "../../components/Layout/Layout";
import getMenu from "../../utils/getMenu";

export default function Research({menuItems}) {
    return (
        <Layout menuItems={menuItems}>
            <Container>
                RESEARCH
            </Container>
        </Layout>
    )
}

export async function getStaticProps({params}) {
    const menuItems = await getMenu();
    return {
      props: { menuItems }
    }
}