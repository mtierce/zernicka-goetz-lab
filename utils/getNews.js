import { client } from './http';

export default async function getNews() {
    let news = await client.fetch(`*[_type == "newsItem"][]{
        ...,
        images[] {
            ...,
            asset->
        }
    }`);
    return news;
}