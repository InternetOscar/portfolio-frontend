import Image from "next/image";
import Link from "next/link";
import { getStrapiMedia, formatDate } from "../utils/api-helpers";

interface Book {
  id: number;
  attributes: {
    title: string;
    summary: string;
    author: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    cover: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}

export default function BookList({
  data: articles,
  children,
}: {
  data: Book[];
  children?: React.ReactNode;
}) {

  // console.log(articles[0].attributes.cover.data.attributes.url)
  console.log(articles)

  return (
    <section className="col-span-4 grid grid-cols-4 gap-2.5">

        {articles.map((article) => {
          const imageUrl = getStrapiMedia(
            article?.attributes.cover.data?.attributes.url
          );


          return (
            <Link
              href={`/books/${article.attributes.slug}`}
              key={article.id}
              className="md:col-span-1 col-span-2 rounded-xl bg-neutral-100 border border-neutral-100 hover:border-neutral-200 text-neutral-400 hover:text-neutral-700 dark:bg-neutral-800 dark:text-neutral-400 dark:border-neutral-700 dark:hover:border-neutral-400 dark:hover:text-neutral-100 flex flex-col aspect-square overflow-hidden transition-all"
            >
              <h3 className="font-body md:mt-[20px] md:ml-[25px] mt-[10px] ml-[12px] font-light">
                {article.attributes.title}
              </h3>
              <div className="overflow-hidden w-1/3 object-scale-down m-auto">
                {imageUrl && (
                <Image
                  alt="presentation"
                  width={200}
                  height={500}
                  className="rounded-md"
                  src={imageUrl}
                />
              )}
              </div>
            </Link>
          );
        })}

      {children && children}
    </section>
  );
}

{/* <div className='col-span-1 grid grid-cols-1 rounded-xl bg-neutral-100 flex flex-col aspect-square border border-neutral-100 hover:border-neutral-300 transition-all'>
      <Link className='flex flex-col' href={"/books/beyond-good-and-evil"}>
      <div className='font-body mt-2 ml-3 text-neutral-700 font-light'>A Very long book name should go here</div>
      <div className='overflow-hidden w-2/4 object-scale-down m-auto'>
        <Image src="https://bookshop.ge/content/uploads/products/9780141395838.jpg" width={200} height={500} alt='surf' className='rounded-md'/>
      </div>
      </Link>
    </div> */}
