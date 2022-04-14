import { client } from './http';

export default async function getHome() {
    let home = await client.fetch(`*[_type == "homePage"][0]{
        ...,
        researchImages[] {
            ...,
            image {
                ...,
                asset->
            }
        },
        content[] {
            ...,
            image {
                ...,
                asset->
            }
        }
    }`);
    return home;
}