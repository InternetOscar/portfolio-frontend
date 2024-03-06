import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { getStrapiMedia, formatDate, formatYear } from "../utils/api-helpers";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface Project {
  id: number;
  attributes: {
    name: string;
    description: string;
    slug: string;
    "col-span": string
    // cover: string;
    cover: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    project_tagList: any[]
  };
}

export default function ProjectList({
  data: projects,
  children,
}: {
  data: Project[];
  children?: React.ReactNode;
}) {

  // const imageUrl = getStrapiMedia(cover.data?.attributes.url);
  // console.log(imageUrl)

  // console.log(projects)

  return (
    <>
      {projects.map((project) => {
        const imageUrl = getStrapiMedia(project?.attributes.cover.data.attributes.url)
        // console.log(imageUrl)
          return (
            <Link
              href={`/projects/${project.attributes.slug}`}
              key={project.id}
              className="col-span-2 grid grid-cols-2 gap-2.5 rounded-xl bg-neutral-100 border border-neutral-100 hover:border-neutral-300 dark:hover:border-neutral-500 dark:bg-neutral-800 dark:border-neutral-700 transition-all"
              >
                <div className='font-body px-3 py-2 font-light text-neutral-700 dark:text-neutral-400 aspect-square'>
                  <span>{project.attributes.name}</span>
                </div>
                <div className='rounded m-2 aspect-square'>
                  <Image src={imageUrl} width={1000} height={1000} alt='surf' className='aspect-square object-cover right-0 rounded-lg'/>
                </div>
            </Link>
          );
        })}
      {children && children}
    </>
    // <>
    // <p>projects coming soon</p>
    // </>
  );
}
