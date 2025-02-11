import Image from "next/image";
import Link from "next/link";
import { getStrapiMedia, formatDate, formatYear } from "../utils/api-helpers";

interface Project {
  id: number;
  attributes: {
    name: string;
    description: string;
    project_date: string;
    product_a: string;
    product_b: string;
    product_c: string;
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

  return (
    <div className="grid w-full col-span-4 grid-cols-4">
      {projects.map((project) => {
          return (
            <Link
              href={`/projects/${project.attributes.slug}`}
              key={project.id}
              className="text-neutral-400 hover:text-neutral-700 transition-all col-span-4 grid grid-cols-4 font-body text-sm divide-y"
              >
            <div key={project.id} className="hover:text-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-400 dark:text-neutral-400 dark:hover-text grid grid-cols-4 col-span-4">

                {/* The year the project was last touched or completed */}
              <div className="border-t border-neutral-200 dark:border-neutral-800 py-3 px-3 pt-4 col-span-1 text-black font-light  dark:text-white">
                  {formatYear(project.attributes.updatedAt)}
              </div>

              <div className="border-t border-neutral-200 dark:border-neutral-800 col-span-3 flex-row">
                {/* project name */}
                <h3 className="py-3 mt-0.5 float-left text-black dark:text-white">
                  {project.attributes.name}
                </h3>
                {/* project tags (aim to list 3 tools and languages)*/}
                <span className="float-right font-light md:flex hidden border m-2 mt-2.5 rounded-full text-neutral-400 border-neutral-300 text-sm dark:border-neutral-500 dark:text-neutral-400">
                  <p className="px-3 py-1">{project.attributes.product_c}</p>
                </span>
                <span className="float-right font-light md:flex hidden border m-2 mt-2.5 rounded-full text-neutral-400 border-neutral-300 text-sm dark:border-neutral-500 dark:text-neutral-400">
                  <p className="px-3 py-1">{project.attributes.product_b}</p>
                </span>
                <span className="float-right font-light border m-2 mt-2.5 rounded-full text-neutral-400 text-sm border-neutral-300 dark:border-neutral-500 dark:text-neutral-400">
                  <p className="px-3 py-1 flex">{project.attributes.product_a}</p>
                </span>
              </div>

              </div>
            </Link>
          );
        })}
      {children && children}
    </div>
  );
}
