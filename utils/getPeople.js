import { client } from './http';

export default async function getPeople() {
    let people = await client.fetch(`*[_type == "person"][]{
        ...,
        "portrait": portrait{asset->},
        role->,
    }`);
    return people;
}