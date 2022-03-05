import { client } from './http';

export default async function getRoles() {
    let roles = await client.fetch(`*[_type == "role"][]{...} | order(order asc)`);
    return roles;
}