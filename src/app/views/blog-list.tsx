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
  // basic variabels for the blog groups (overall years, formatted post content)
  var years = []
  var tidyPosts = []
  // process the blog content to only provide necessary props
  for (let p = 0; p < articles.length; p++) {
    var postObj = {}
    // console.log(articles[p].attributes.publishedAt.substring(0,4))
    var year = parseInt(articles[p].attributes.publishedAt.substring(0,4))
    years.push(year)
    var title = articles[p].attributes.title
    var link = articles[p].attributes.slug
    var date = String(formatDate(articles[p].attributes.publishedAt))
    console.log(title, link, date)
    postObj = { ...postObj, "title": title, "link": link, "date": date, "year": year }
    // console.log(postObj)
    tidyPosts.push(postObj)
    // articles.filter()
  }
  // console.log(years)
  let uniqueYearsSet = new Set(years)
  let uniqueYears = Array.from(uniqueYearsSet)
  console.log(uniqueYears)
  console.log("Tidy Posts:",tidyPosts)
  console.log("Example Date:", tidyPosts[0])

  // const yearGroup = tidyPosts.filter(post => parseInt(post.year) == year)

  // console.log(yearGroup)

  return (
    <div className="font-body font-normal col-span-4 grid grid-cols-4 mt-8 divide-y divide-neutral-200 dark:divide-neutral-800 border-t border-neutral-200 dark:border-neutral-800">
      {/* <div className="col-span-4 grid grid-cols-4">
        {uniqueYears.map(year => (
          <div>
          <p className="text-sm p-4 m-0 dark:text-neutral-300 text-blue-600">{year}</p>
            <div>

            </div>
          </div>
        ))}
        <div className="col-start-2 col-span-3 divide-y">
        {articles.map((article) => {
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
      </div> */}
      <p>Content coming soon, check back in a week</p>
      {children && children}
    </div>
  );
}
