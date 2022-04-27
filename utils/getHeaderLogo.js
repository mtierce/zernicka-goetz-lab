import { client } from './http';

export default async function getHeaderImage() {
    let headerImage = await client.fetch(`*[_type == "homePage"][0]{
        horizontalLogo {
            ...,
            asset->
        }
    }`);
    return headerImage;
}