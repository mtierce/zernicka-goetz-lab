// REACT
import { useCallback, useEffect, useState } from 'react';

// NEXT JS
import Head from 'next/head'

// UTILITIES
import getMenu from '../../utils/getMenu';
import getArt from '../../utils/getArt';

// COMPONENTS
import Layout from '../../components/Layout/Layout';
import ArtImageList from '../../components/ArtImageList/ArtImageList';
import Lightbox from '../../components/Lightbox/Lightbox';
import Container from '../../components/Container/Container';

// ----------------------------------------
// ----------------------------------------

export default function Art({menuItems}) {
    const [art, setArt] = useState([]);
    const [selected, setSelected] = useState(null);
    
    const deselect = useCallback(() => setSelected(null), []);
    const select = useCallback((art) => setSelected(art), []);

    useEffect(() => {
        getArt()
            .then( res => {
                setArt(res);
            })
            .catch( err => {
                console.log(err);
            })
    }, [])

  return (
    <>
      <Head>
        <title>Art of the Science :: Zernicka-Goetz Lab</title>
        <meta name="description" content="The Art of the Science" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Layout menuItems={menuItems}>
            {selected && <Lightbox selected={selected} deselect={deselect}/>}
            <Container>
              <div>
                <h1>The Art of the Science</h1>
                <h5>“Science is vastly more stimulating to the imagination than the classics.”</h5>
                <p className="body3">J. B. S. Haldane</p>
              </div>
              <ArtImageList art={art} select={select} />
            </Container>
        </Layout>
    </>
  )
}

export async function getStaticProps({params}) {
  const menuItems = await getMenu();
  return {
    props: { menuItems }
  }
}