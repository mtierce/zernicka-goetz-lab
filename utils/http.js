import sanityClient from '@sanity/client';

export const urls = {
    api: ""
}

export const client = sanityClient({
    projectId: 'm3w3wkm5',
    dataset: 'production',
    token: '',
    useCdn: true,
    apiVersion: '2021-08-31'
});

export const projectId = 'm3w3wkm5';
export const dataset = 'production'