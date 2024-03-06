"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";
import { CgWebsite } from "react-icons/cg";
import { FaDiscord } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";

interface FooterLink {
  id: number;
  url: string;
  newTab: boolean;
  text: string;
  social?: string;
}

interface CategoryLink {
  id: string;
  attributes: {
    name: string;
    slug: string;
  };
}



export default function Footer() {

  return (
    <>
      <footer className="w-screen h-12 flex md:grid grid-cols-4 font-light font-body text-lg text-center py-[60px] md:mb-0 mb-[60px] mx-auto w-full text-neutral-400">
        <div className="mx-auto">
        <Link className="px-5 hover:text-neutral-800 transition-all" target={"_blank"} href={"https://github.com/InternetOscar/OscarsAwesomeTools/blob/main/README.md"}>Resources</Link>
        <Link className="px-5 hover:text-neutral-800 transition-all" href={"/projects"}>Threads</Link>
        <Link className="px-5 hover:text-neutral-800 transition-all" href={"/books"}>GitHub</Link>
        <Link className="px-5 hover:text-neutral-800 transition-all" target={"_blank"} href={"https://docs.google.com/viewer?url=https://raw.githubusercontent.com/internetoscar/cv/main/2024resume.pdf"}>CV</Link>

        </div>
        </footer>
    </>

  );
}
