import { formatDate, getStrapiMedia } from '@/app/utils/api-helpers';
import { postRenderer } from '@/app/utils/post-renderer';
import Image from 'next/image';
import Link from 'next/link';

interface Book {
    id: number;
    attributes: {
        title: string;
        summary: string;
        slug: string;
        author: string
        book_url: string;
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

export default function Post({ data }: { data: Book }) {
    const { title, summary, cover, author, book_url } = data.attributes;
    const imageUrl = getStrapiMedia(cover.data?.attributes.url);
    console.log(data.attributes)

    return (
        <article className="col-span-2 grid grid-cols-2 mt-[60px]">
            <div className="space-y-6 col-span-2 md:col-span-1">
                <h1 className="font-display font-light text-4xl dark:text-neutral-100">{title}</h1>
                <div className="flex flex-col items-start justify-between font-body dark:text-neutral-200 md:flex-row md:items-center dark:text-neutral-500">
                    <div className="flex items-center md:space-x-2">
                        <p className="text-md">
                            Author: {author}
                        </p>
                    </div>
                </div>
                <p className='dark:text-neutral-200 font-body'>{summary}</p>
            </div>
            <div className='md:col-start-2 mx-auto col-span-2 w-full md:w-auto md:w-auto md:p-12 md:mt-0 mt-[40px]'>
            {imageUrl && (
                <Image
                    src={imageUrl}
                    alt="article cover image"
                    width={800}
                    height={1300}
                    className="mx-auto w-full object-scale-down rounded-lg top-0"
                    priority={true}
                />
            )}
            <div className='font-body font-light w-full flex justify-center mt-[20px] dark:text-neutral-100'><Link href={book_url} target='_blank' className='border rounded-lg hover:border-neutral-500 transition-all px-5 py-2'>Get a copy</Link></div>
            </div>

        </article>
    );
}
