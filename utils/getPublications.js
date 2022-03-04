import { client } from './http';

export default async function getPublications() {
    let pubs = await client.fetch(`*[_type == "publication"][]{
        ...
    } | order(pubDate desc)`);
    return pubs;
}