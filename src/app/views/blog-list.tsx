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

export default function PostList(
  {
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
  // go through every post so far and get the year and put it in an array
  for (let y = 0; y < articles.length; y++) {
    var year = String(parseInt(articles[y].attributes.publishedAt.substring(0,4)))
    var setYear = year
    years.push(setYear)
  }

  let uniqueYearsSet = new Set(years)
  let uniqueYears = Array.from(uniqueYearsSet)
  // console.log("unique years array", uniqueYears)

  var mainGroup = []
  let rawYears = []
  let yearsWithPosts = {
    "year": "",
    "posts": []
  }
  // turn the years arrray into an object we can put the posts into
  for (let a = 0; a < uniqueYears.length; a++) {
    // console.log("years", uniqueYears[a])
    yearsWithPosts = {...yearsWithPosts, "year": uniqueYears[a], "posts": []}
    console.log(yearsWithPosts)
    mainGroup.push(yearsWithPosts)
  }




  // set up how the post object in the blog-list should be
  let postObject = {
    title: "",
    date: "",
    link: "",
    year: ""
  }

  // go through every post and match it to the year it was posted (and put some data with it too)
  // go through every post and turn it into an object with the data we're looking for (for the blog list)
  let posts = []
  for (let p = 0; p < articles.length; p++) {
    const post = postObject
    var title = articles[p].attributes.title
    var link = articles[p].attributes.slug
    var date = String(formatDate(articles[p].attributes.publishedAt))
    var year = String(parseInt(articles[p].attributes.publishedAt.substring(0,4)))
    // console.log(title, link, date)
    postObject = { ...postObject, "title": title, "link": link, "date": date, "year": year }
    posts.push(post)
  }

  // console.log(posts)

  let yearsGone = 0;

  while(yearsGone < mainGroup.length) {
    console.log("years", yearsGone)
    yearsGone++

  }

  // was working and i broke it i don't want to think about it anymore
  // match each post to a year group somehow below
  for (let b = 0; b < posts.length; b++) {
    let postDate = String(parseInt(articles[b].attributes.publishedAt.substring(0,4)))
    console.log("POST DATE:", postDate)
    // return (
    //   <p>{postDate}</p>
    // )
    for (let c = 0; c < uniqueYears.length; c++) {
      // console.log(uniqueYears[c])
      if (postDate === uniqueYears[c]) {
        mainGroup[c].posts.push(posts[b])
      } else {

      }
    }
  }


  console.log("main group", mainGroup, "years", mainGroup.length)


  return (
    <div className="font-body font-normal col-span-4 grid grid-cols-4 mt-8 border-neutral-200 dark:border-neutral-800 dark:text-neutral-300">
      <>
      {posts.slice(1).map((post, j) => (
          <Link
          href={`/blog/${post.link}`}
          key={j}
          className="border-t dark:border-neutral-800 dark:hover:bg-neutral-800 col-span-4 flex transition-colors decoration-neutral-300 hover:decoration-neutral-400 dark:decoration-neutral-700 dark:hover:decoration-neutral-600 flex flex-col no-underline  sm:flex-row sm:items-center gap-1 sm:gap-4 justify-between p-4 transition-all"
          >
            <span>{post.title}</span>
            <span className={`-[7rem] m-0 text-neutral-500 font-light dark:text-neutral-400 text-sm sm:text-right row-start`}>{post.date}</span>
          </Link>
          )
        )}
      </>



      {/* DO NOT TOUCH BELOW */}
      {children && children}
    </div>
  );
}
