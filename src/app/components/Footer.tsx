
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="w-screen h-12 flex md:grid grid-cols-4 font-light font-body text-lg text-center py-[60px] md:mb-0 mb-[60px] px-5 mx-auto w-full text-neutral-400">
        <div className="mx-auto">
        <Link className="px-5 hover:text-neutral-800 transition-all" target={"_blank"} href={"https://github.com/InternetOscar/OscarsAwesomeTools/blob/main/README.md"}>Resources</Link>
        <Link className="px-5 hover:text-neutral-800 transition-all" target={"_blank"} href={"https://threads.net/oscar.dobsonbrown"}>Threads</Link>
        <Link className="px-5 hover:text-neutral-800 transition-all" target={"_blank"} href={"https://github.com/internetoscar"}>GitHub</Link>
        <Link className="px-5 hover:text-neutral-800 transition-all" target={"_blank"} href={"https://read.cv/oscardb"}>CV</Link>
        </div>
        </footer>
    </>
  );
}
