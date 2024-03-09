import { fetchAPI } from '@/app/utils/fetch-api';
import Post from '@/app/views/book';
import type { Metadata } from 'next';

async function getPostBySlug(slug: string) {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const path = `/books`;
    const urlParamsObject = {
        filters: { slug },
        populate: {
            cover: { fields: ['url'] },
            authorsBio: { populate: '*' },
            category: { fields: ['name'] },
            blocks: {
                populate: {
                    '__component': '*',
                    'files': '*',
                    'file': '*',
                    'url': '*',
                    'body': '*',
                    'title': '*',
                    'author': '*',
                }
            },
        },
    };
    const options = { headers: { Authorization: `Bearer ${token}` } };
    const response = await fetchAPI(path, urlParamsObject, options);
    return response;
}

async function getMetaData(slug: string) {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const path = `/articles`;
    const urlParamsObject = {
        filters: { slug },
        populate: { seo: { populate: '*' } },
    };
    const options = { headers: { Authorization: `Bearer ${token}` } };
    const response = await fetchAPI(path, urlParamsObject, options);
    return response.data;
}

export default async function PostRoute({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const data = await getPostBySlug(slug);
    if (data.data.length === 0) return <h2>no book found</h2>;
    return <Post data={data.data[0]} />;
}

export async function generateStaticParams() {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const path = `/books`;
    const options = { headers: { Authorization: `Bearer ${token}` } };
    const articleResponse = await fetchAPI(
        path,
        {
            populate: ['category'],
        },
        options
    );

    return articleResponse.data.map(
        (article: {
            attributes: {
                slug: string;
                category: {
                    slug: string;
                };
            };
        }) => ({ slug: article.attributes.slug, category: article.attributes.slug })
    );
}
