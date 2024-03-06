import Image from "next/image";
import Link from "next/link";
import { getStrapiMedia } from "../utils/api-helpers";

interface Book {
  id: number;
  attributes: {
    title: string;
    slug: string;
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
  data: books,
  children,
}: {
  data: Book[];
  children?: React.ReactNode;
}) {
  return (
    <>
      {books.map((book) => {
        const imageUrl = getStrapiMedia(book?.attributes.cover.data.attributes.url)
        // console.log(imageUrl)
          return (
            <Link
              className='col-span-1 flex flex-col p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 aspect-square border border-neutral-100 hover:border-neutral-300 dark:hover:border-neutral-500 transition-all'
              href={`/books/${book.attributes.slug}`}
              key={book.id}
              >
                <span className='font-body pb-2 pl-1 text-neutral-700 dark:text-neutral-400 font-light line-clamp-2'>{book.attributes.title}</span>
                <div className='overflow-hidden w-1/3 object-scale-down m-auto'>
                  <Image src={imageUrl} width={200} height={500} alt='surf' className='rounded-md'/>
                </div>
            </Link>
          );
        })}
      {children && children}
    </>
  );
}

{/*

  <Link className='col-span-1 flex flex-col p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 aspect-square border border-neutral-100 hover:border-neutral-300 dark:hover:border-neutral-500 transition-all' href={"/books/beyond-good-and-evil"}>
    <span className='font-body pb-2 pl-1 text-neutral-700 dark:text-neutral-400 font-light line-clamp-2'>Beyond Good and Evil</span>
    <div className='overflow-hidden w-2/4 object-scale-down m-auto'>
      <Image src="https://bookshop.ge/content/uploads/products/9780141395838.jpg" width={200} height={500} alt='surf' className='rounded-md'/>
    </div>
  </Link>

*/}
