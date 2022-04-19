import { client } from './http';

export default async function getSlugById(id) {
    let page = await client.fetch(`*[_type == "page" && _id == "${id}"]{
            ...
        }`);
    return page;
}