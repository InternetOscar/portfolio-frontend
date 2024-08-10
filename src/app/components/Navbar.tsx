"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";

const Links = [
  {title: "Projects", href: "projects"},
  {title: "Books", href: "books"},
  // {title: "Blog", href: "blog"},
]

export default function Navbar() {

  const pathname = usePathname();

  return (
    <div className=" md:top-3 md:m-[32px] md:relative md:block flex justify-center md:mb-24 bottom-0">
      <div className="fixed md:text-neutral-400 text-neutral-500 dark:text-neutral-100 m-[16px] bottom-0 md:bottom-auto z-10 font-body font-regular md:top-3 float-left flex flex-row shadow shadow-lg p-1 rounded-lg border border-neutral-300 overflow-hidden bg-white dark:bg-opacity-100 dark:bg-neutral-800 dark:border-neutral-700 backdrop-blur-md mx-0">
        <Link href={"/"}
              className={"rounded-md border-opacity-80 hover:bg-neutral-100 hover:text-neutral-600 dark:hover:bg-neutral-900 transition-all px-3 p-1 border border-white dark:border-neutral-800 dark:hover:text-neutral-200"}>
              Oscar
        </Link>
      {Links.map((link) => {
        const isActive = pathname.includes(link.href)
        return (
            <Link href={"/" + link.href} key={link.title}
              className={isActive ? "border-opacity-80 rounded-md bg-neutral-100 dark:bg-neutral-900 dark:border dark:border-neutral-700 dark:text-neutral-300 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-600 dark:hover:bg-neutral-900 transition-all px-3 p-1 ml-1 border border-neutral-200 dark:border-neutral-800 dark:hover:text-neutral-200" : "rounded-md hover:bg-neutral-100 hover:text-neutral-600 dark:hover:bg-neutral-900 transition-all px-3 p-1 ml-1 border border-white dark:border-neutral-800 dark:hover:text-neutral-200"}>
              {link.title}
            </Link>
        )
      })}
      </div>
      <div className="md:flex-row font-light font-body justify-end align-middle  pb-[40px] text-neutral-400 z-1 md:flex hidden">
        <Link className="mx-3 hover:text-neutral-800 transition-all mt-[-4px]" target="_blank" href="https://threads.net/oscar.dobsonbrown">Threads</Link>
        <Link className="mx-3 hover:text-neutral-800 transition-all mt-[-4px]" target="_blank" href="https://github.com/internetoscar">GitHub</Link>
        <Link className="mx-3 hover:text-neutral-800 transition-all mt-[-4px]" target="_blank" href="https://read.cv/oscardb">CV</Link>
      </div>
    </div>
  );
}
