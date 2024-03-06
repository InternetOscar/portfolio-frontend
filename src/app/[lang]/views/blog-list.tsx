import Image from "next/image";
import Link from "next/link";
import { getStrapiMedia, formatDate, formatYear } from "../utils/api-helpers";

interface Article {
  id: number;
  attributes: {
    title: string;
    description: string;
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
    category: {
      data: {
        attributes: {
          name: string;
          slug: string;
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
  };
}

export default function PostList({
  data: articles,
  children,
}: {
  data: Article[];
  children?: React.ReactNode;
}) {
  return (
    <div className="font-body font-normal col-span-4 grid grid-cols-4 mt-8 divide-y divide-neutral-200 dark:divide-neutral-800 border-t border-neutral-200 dark:border-neutral-800">
      <div className="col-span-4 grid grid-cols-4">
        <p className="text-sm p-4 m-0 dark:text-neutral-300">
          2024
        </p>
        <div className="col-start-2 col-span-3 divide-y">
        {articles.map((article) => {
            const imageUrl = getStrapiMedia(
              article.attributes.cover.data?.attributes.url
            );

            return (

                <Link
                href={`/blog/${article.attributes.slug}`}
                key={article.id}
                className="transition-colors decoration-neutral-300 hover:decoration-neutral-400 dark:decoration-neutral-700 dark:hover:decoration-neutral-600 flex flex-col no-underline hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:border-neutral-800 sm:flex-row sm:items-center gap-1 sm:gap-4 justify-between p-4"
                >
                  <span className="m-0 text-neutral-900 dark:text-white text-sm font-normal sm:truncate">{article.attributes.title}</span>
                  <span className="w-[7rem] m-0 text-neutral-500 font-light dark:text-neutral-400 text-sm sm:text-right">{formatDate(article.attributes.publishedAt)}<span className="flex md:hidden"></span> </span>
                </Link>
            );
          })}
        </div>
      </div>




        {children && children}

    </div>

  );
}
