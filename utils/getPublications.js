import { client } from './http';

export default async function getPublications() {
    let pubs = await client.fetch(`*[_type == "publication"][]{
        ...,
        image {
            ...,
            asset->
        },
        tags[]->
    } | order(pubDate desc)`);
    return pubs;
}