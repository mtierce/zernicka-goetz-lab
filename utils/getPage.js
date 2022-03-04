import { client } from './http';

export default async function getPage(slug) {
    let page = await client.fetch(`*[_type == "page" && slug.current == "${slug}"][0]{
            "slug": slug.current, 
            title, 
            "content": content[] {
                ...,
                title,
                "media": media[] {
                    _type == "image" => {
                        ...,
                        asset->{...}
                    },
                    _type == "video" => {
                        ...,
                        "asset": file.asset->{...}
                    },
                    _type == "map" => {
                        ...
                    }
                }
            }
        }`);
    return page;
}