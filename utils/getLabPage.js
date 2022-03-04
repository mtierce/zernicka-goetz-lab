import { client } from './http';

export default async function getPage() {
    let page = await client.fetch(`*[_type == "labPage"][0] {
            title, 
            "content": content[] {
                _type == 'labGroup' => {
                    ...,
                    "groupPhoto": groupPhoto{..., asset->}
                },
                _type == 'section' => {
                    ...,
                    "content": content[]{
                        _type == 'image' => {..., asset->{...}},
                        _type == 'text' => {...}
                    }                   
                }
                
            }
        }`);
    return page;
}