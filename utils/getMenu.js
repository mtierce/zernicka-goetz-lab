import { client } from './http';

export default async function getMenu() {
    let menu = await client.fetch(`*[_type == "menu"][0]{
        links[] {
            _type == "specialPage" => {
                title, _key, _type
            },
            _type == "standardPage" => @-> {_type, title, "_key": _id, 'slug': slug.current},
            _type == "standardPageSection" => {
                _type, 
                page->{'slug': slug.current}, 
                section,
                display
            }
        }
    }`);
    return menu.links;
}