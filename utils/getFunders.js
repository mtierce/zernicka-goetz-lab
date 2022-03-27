import { client } from './http';

export default async function getFunders() {
    let funders = await client.fetch(`*[_type == "funders"][]{
        ...,
        image{..., asset->}
    }`);
    return funders;
}