import { client } from "./http";

export default async function getFileUrl(id) {
    let file = await client.fetch(`*[type == "file" && _id == "${id}"]{
        ...
    }`);
    return file;
}