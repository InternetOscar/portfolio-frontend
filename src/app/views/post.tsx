import { formatDate, formatYear, getStrapiMedia } from '@/app/utils/api-helpers';
import { postRenderer } from '@/app/utils/post-renderer';
import Image from 'next/image';

interface Article {
    id: number;
    attributes: {
        title: string;
        description: string;
        slug: string;
        cover: {
            data: {
                attributes: {
                    url: string;
                };
            };
        };
        authorsBio: {
            data: {
                attributes: {
                    name: string;
                    avatar: {
                        data: {
                            attributes: {
                                url: string;
                            };
                        };
                    };
                };
            };
        };
        blocks: any[];
        publishedAt: string;
    };
}

export default function Post({ data }: { data: Article }) {
    const { title, description, publishedAt, cover, authorsBio } = data.attributes;
    // const author = authorsBio.data?.attributes;
    const imageUrl = getStrapiMedia(cover.data?.attributes.url);
    // const authorImgUrl = getStrapiMedia(authorsBio.data?.attributes.avatar.data.attributes.url);

    return (
        <article className="space-y-8 dark:text-gray-50 col-span-4 md:col-span-2 font-body">
            <div className='col-start-1 grid col-span-2 space-y-6'>
                <h1 className="leading-tight text-4xl font-semibold font-display">{title}</h1>
                <p className="text-sm text-neutral-500">
                    Published on {formatDate(publishedAt)}, {formatYear(publishedAt)}
                </p>
            {imageUrl && (
                <Image
                    src={imageUrl}
                    alt="article cover image"
                    width={1000}
                    height={500}
                    className="w-full h-96 object-cover rounded-lg"
                />
            )}

            <div className="dark:text-gray-100 text-md ">
                {data.attributes.blocks.map((section: any, index: number) => postRenderer(section, index))}
            </div>

            </div>


        </article>
    );
}
