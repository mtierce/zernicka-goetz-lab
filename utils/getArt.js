import { client } from './http';

export default async function getArt() {
    let art = await client.fetch(`*[_type == "artImages"][]{
        ...,
        image{..., asset->}
    }`);
    return art;
}