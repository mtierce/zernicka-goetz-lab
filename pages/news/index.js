import AlternatingContainer from "../../components/AlternatingContainer/AlternatingContainer";
import Layout from "../../components/Layout/Layout";
import getMenu from "../../utils/getMenu";

export default function News({menuItems}) {
    return (
        <Layout menuItems={menuItems}>
            <AlternatingContainer>
                NEWS
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