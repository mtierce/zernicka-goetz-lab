import { client } from './http';

export default async function getResearch() { 
    let research = await client.fetch(`*[_type == "researchPage"][0] {
        ...,
        content[] {
            _type == "research" => {
                ...,
                relatedPubs[]->,
                media[] {
                    ..., 
                    asset->
                }
            },
            _type != "research" => {...}
        }
    }`)
    return research;
}