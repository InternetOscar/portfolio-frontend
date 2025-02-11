import Link from "next/link";
import Image from "next/image";
import { getStrapiMedia } from "./utils/api-helpers";

// Define the structure of a Project object
interface Project {
  id: number;
  attributes: {
    name: string;
    description: string;
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

// Define the structure of a Book object
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

// Fetch the latest projects from the Strapi API
async function getLatestProjects(): Promise<Project[]> {
  const url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/projects?populate=cover&sort=createdAt:desc&pagination[limit]=2`;
  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
      },
      next: { revalidate: 60 }, // Revalidate the data every 60 seconds
    });
    if (!res.ok) throw new Error(`Failed to fetch projects: ${res.status}`);
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

// Fetch the latest books from the Strapi API
async function getLatestBooks(): Promise<Book[]> {
  const url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/books?populate=cover&sort=createdAt:desc&pagination[limit]=2`;
  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
      },
      next: { revalidate: 60 }, // Revalidate the data every 60 seconds
    });
    if (!res.ok) throw new Error(`Failed to fetch books: ${res.status}`);
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
}

// Component to render a single project tile
function ProjectTile({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.attributes.slug}`}
      className="col-span-2 md:col-span-2 grid row-span-1 grid-cols-2 gap-2.5 rounded-xl bg-neutral-200/50 border border-neutral-100 hover:border-neutral-300 dark:hover:border-neutral-500 dark:bg-neutral-800 dark:border-neutral-700 transition-all"
    >
      <div className="font-body px-3 py-2 text-neutral-700 dark:text-neutral-400 aspect-square">
        <span>{project.attributes.name}</span>
        {/* <p className="text-sm mt-1">{project.attributes.description}</p> */}
      </div>
      <div className="rounded m-2 aspect-square">
        <Image
          priority
          src={getStrapiMedia(project.attributes.cover.data.attributes.url)}
          width={500}
          height={500}
          alt={project.attributes.name}
          className="aspect-square object-cover right-0 rounded-lg md:p-0"
        />
      </div>
    </Link>
  );
}

// Component to render a single book tile
function BookTile({ book }: { book: Book }) {
  return (
    <Link
      className="col-span-1 row-span-1 md:col-span-1 aspect-square row-span-1 flex flex-col p-2 rounded-xl bg-neutral-200/50 dark:bg-neutral-800 dark:border-neutral-700 md:aspect-square border border-neutral-100 hover:border-neutral-300 dark:hover:border-neutral-500 transition-all"
      href={`/books/${book.attributes.slug}`}
    >
      <span className="font-body pb-2 pl-1 text-neutral-700 dark:text-neutral-400 line-clamp-2">
        {book.attributes.title}
      </span>
      <div className="overflow-hidden w-1/3 object-scale-down m-auto">
        <Image
          src={getStrapiMedia(book.attributes.cover.data.attributes.url)}
          width={100}
          height={200}
          alt={book.attributes.title}
          className="w-full rounded-md"
        />
      </div>
    </Link>
  );
}

// Main HomePage component
export default async function HomePage() {
  // Fetch the latest projects and books
  const latestProjects = await getLatestProjects();
  const latestBooks = await getLatestBooks();

  return (
    <>
      {/* Main grid layout */}
      <div className="grid grid-cols-2 grid-rows-5 md:grid-rows-3 md:grid-cols-4 gap-2.5 ">
        {/* Introduction section */}
        <div className="col-span-2 row-span-3 md:row-span-2 text-2xl pr-5 font-display font-light text-neutral-600 dark:text-neutral-400">
          <p className="mb-4">
            Hey there, I'm Oscar 👋 Welcome to my{" "}
            <span className="underline decoration-dotted text-neutral-900 dark:text-neutral-200">
              <Link href="/projects">portfolio</Link>
            </span>{" "}
            🌱 I like building{" "}
            <span className="text-neutral-900 dark:text-neutral-200">
              things
            </span>
            , and I'm currently helping to 👨‍💻 build websites for{" "}
            <span className="text-neutral-900 dark:text-neutral-200">
              clients
            </span>
            .
          </p>
          <p className="mb-4">
            In my free time, I enjoy{" "}
            <span className="text-neutral-900 dark:text-neutral-200">
              🏕️ camping
            </span>
            ,{" "}
            <span className="text-neutral-900 dark:text-neutral-200">
              🏄‍♂️ surfing
            </span>
            , and going to the{" "}
            <span className="text-neutral-900 dark:text-neutral-200">
              🏋️‍♂️ gym
            </span>
            .
          </p>
          <p className="mb-4">
            I do some{" "}
            <span className="underline decoration-dotted text-neutral-900 dark:text-neutral-200">
              <Link href="/books">📚 reading</Link>
            </span>{" "}
            and{" "}
            <span className="underline decoration-dotted text-neutral-900 dark:text-neutral-200">
              <Link href="/blog">📝 writing</Link>
            </span>{" "}
            as well, though not as consistently, but I'm working on being better
            at that.
          </p>
        </div>

        {/* First project tile */}
        {latestProjects[0] && <ProjectTile project={latestProjects[0]} />}

        {/* First book tile */}
        {latestBooks[0] && <BookTile book={latestBooks[0]} />}

        {/* First photo tile */}
        <div className="col-span-1 row-span-1 aspect-square">
          <div className="col-span-1 md:col-span-1 grid grid-cols-1 row-span-1 rounded-xl aspect-square dark:border-neutral-700 dark:hover:border-neutral-500 transition-all overflow-hidden">
            <span className="font-body mt-2 ml-3 absolute text-neutral-100 ">
              Shot on iPhone
            </span>
            <div className="overflow-hidden">
              <Image
                src={getStrapiMedia(
                  "https://strapi-aws-s3-assets.s3.ap-southeast-2.amazonaws.com/IMG_5743_8540e2a066.webp"
                )}
                priority
                width={500}
                height={500}
                alt="sheep grazing in a field illuminated by golden sunset light"
                className="fill={true} md:aspect-square rounded-md object-cover right-0"
              />
            </div>
          </div>
        </div>

        {/* Second project tile */}
        {latestProjects[1] && <ProjectTile project={latestProjects[1]} />}

        {/* Second photo tile */}
        <div className="col-span-1 aspect-square">
          <div className="col-span-1 md:col-span-1 grid grid-cols-1 row-span-1 rounded-xl aspect-square dark:border-neutral-700 dark:hover:border-neutral-500 transition-all overflow-hidden">
            <span className="font-body mt-2 ml-3 absolute text-neutral-100 ">
              Shot on iPhone
            </span>
            <div className="overflow-hidden">
              <Image
                src={getStrapiMedia(
                  "https://strapi-aws-s3-assets.s3.ap-southeast-2.amazonaws.com/IMG_4369_152450b655.webp"
                )}
                priority
                width={400}
                height={400}
                alt="sheep grazing in a field illuminated by golden sunset light"
                className="w-full md:aspect-square rounded-md object-cover right-0"
              />
            </div>
          </div>
        </div>

        {/* Second book tile */}
        {latestBooks[1] && <BookTile book={latestBooks[1]} />}
      </div>

      {/* Avatar section */}
      <div className="h-[500px] col-span-4  flex flex-center">
        <div className="m-auto w-[200px] flex flex-col justify-center">
          <Image
            className=""
            src={getStrapiMedia(
              "https://strapi-aws-s3-assets.s3.ap-southeast-2.amazonaws.com/avatar_2e103b1f70_5f2dc24030.webp"
            )}
            alt="Memoji of Oscar Dobson-Brown"
            width={200}
            height={200}
          />
          <p className="justify-center font-body text-center w-full dark:text-neutral-300 ">
            Built by Oscar.
          </p>
        </div>
      </div>
    </>
  );
}
