import { formatDate, getStrapiMedia } from '@/app/utils/api-helpers';
import { postRenderer } from '@/app/utils/post-renderer';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectDetail {
    id: number;
    attributes: {
        name: string;
        description: any[];
        url: string;
        product_a: string;
        product_b: string;
        product_c: string;
        slug: string;
        cover: {
            data: {
                attributes: {
                    url: string;
                };
            };
        };
        blocks: any[];
    };
}

export default function ProjectDetail({ data }: { data: ProjectDetail }) {
    const { name, description, url, cover, product_a, product_b, product_c } = data.attributes;
    const imageUrl = getStrapiMedia(data.attributes.cover.data.attributes.url)
    console.log(data)
    // console.log(name)

    return (
        <article className="md:col-span-2 md:grid grid-cols-2">
            <div className="space-y-6">
                <h1 className="font-body text-4xl font-medium dark:text-white">{name}</h1>
                <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-400">
                    <div className="flex items-center md:space-x-2">

                        <p className="font-body text-sm">
                            The stack: {product_a}, {product_b}, {product_c}
                        </p>
                    </div>
                </div>
                <div className='font-display font-light dark:text-white'>
                {description}
                </div>
            </div>
            <div className='w-2/4 mx-auto'>
            {imageUrl && (
                <Image
                    src={imageUrl}
                    alt="article cover image"
                    width={800}
                    height={800}
                    className="w-full object-cover aspect-square rounded-lg"
                    priority={true}
                />
            )}
            <div className='font-body w-full flex justify-center mt-[20px] dark:text-white'>
                <Link href={url} target='_blank' className='border rounded-lg hover:border-neutral-500 transition-all px-5 py-2'>View Project</Link>
            </div>
            </div>

        </article>
    );
}
