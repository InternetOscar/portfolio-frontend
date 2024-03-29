"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useCallback } from "react";
import { fetchAPI } from './utils/fetch-api';

import Loader from './components/Loader';
import Projects from "./views/project-tiles";
import Books from "./views/book-tiles";
import { getStrapiMedia } from './utils/api-helpers';

interface Meta {
  pagination: {
    start: number;
    limit: number;
    total: number;
  };
}

export default function RootRoute() {
  return (
    <>
    <div className='grid grid-cols-2 grid-rows-5 md:grid-rows-3 md:grid-cols-4 gap-2.5 '>
      <div className='col-span-2 row-span-3 md:row-span-2 text-2xl pr-5 font-display font-light text-neutral-600 dark:text-neutral-400'>
        <p className='mb-4'>Hey there, I'm Oscar 👋 Welcome to my <span className='underline decoration-dotted text-neutral-900 dark:text-neutral-200'><Link href="/projects">portfolio</Link></span> 🌱 I like building <span className='text-neutral-900 dark:text-neutral-200'>things</span>, and I'm currently helping to build websites for <span className='text-neutral-900 dark:text-neutral-200'>clients</span>.</p>
        <p className='mb-4'>In my free time, I enjoy <span className='text-neutral-900 dark:text-neutral-200'>camping</span>,  <span className='text-neutral-900 dark:text-neutral-200'>surfing</span>, and going to the <span className='text-neutral-900 dark:text-neutral-200'>gym</span>.</p>
        <p className='mb-4'>I do some <span className='underline decoration-dotted text-neutral-900 dark:text-neutral-200'><Link href="/books">reading</Link></span> and <span className='underline decoration-dotted text-neutral-900 dark:text-neutral-200'><Link href="/blog">writing</Link></span> as well, though not as consistently, but I'm working on being better at that.</p>
      </div>
      <div className='col-span-2 row-span-1'>
        <Link
        href={`/projects/firedanger`}
        className="col-span-2 md:col-span-2 grid row-span-1 grid-cols-2 gap-2.5 rounded-xl bg-neutral-200/50 border border-neutral-100 hover:border-neutral-300 dark:hover:border-neutral-500 dark:bg-neutral-800 dark:border-neutral-700 transition-all"
        >
          <div className='font-body px-3 py-2 font-light text-neutral-700 dark:text-neutral-400 aspect-square'>
            <span>FireDanger</span>
          </div>
          <div className='rounded m-2 aspect-square'>
            <Image priority src={getStrapiMedia('/uploads/Bendito_Mockup_MT_Iphone_01_7061d1b7e1.png')} width={1000} height={1000} alt='surf' className='aspect-square object-cover right-0 rounded-lg md:p-0'/>
          </div>
        </Link>
      </div>
      <div className='col-span-1 row-span-1 aspect-square'>
        <Link
          className='col-span-1 row-span-1 md:col-span-1 aspect-square row-span-1 flex flex-col p-2 rounded-xl bg-neutral-200/50 dark:bg-neutral-800 dark:border-neutral-700 md:aspect-square border border-neutral-100 hover:border-neutral-300 dark:hover:border-neutral-500 transition-all'
          href={`/books/thinking-fast-and-slow`}
        >
          <span className='font-body pb-2 pl-1 text-neutral-700 dark:text-neutral-400 font-light line-clamp-2'>The 48 Laws of Power</span>
            <div className='overflow-hidden w-1/3 object-scale-down m-auto'>
              <Image src={getStrapiMedia('/uploads/48_laws_of_power_cd02854f46.jpg')} width={200} height={500} alt='surf' className='rounded-md'/>
            </div>
        </Link>
      </div>
      <div className='col-span-1 row-span-1 aspect-square'>
        <div className='col-span-1 md:col-span-1 grid grid-cols-1 row-span-1 rounded-xl aspect-square dark:border-neutral-700 dark:hover:border-neutral-500 transition-all overflow-hidden'>
          <span className='font-body mt-2 ml-3 absolute text-neutral-100 font-light'>Shot on iPhone</span>
          <div className='overflow-hidden'>
            <Image src={getStrapiMedia('/uploads/IMG_5743_cd7cb3f137.webp')} priority width={500} height={500} alt='sheep grazing in a field illuminated by golden sunset light' className='w-full md:aspect-square rounded-md object-cover right-0'/>
          </div>
        </div>
      </div>
      <div className='col-span-2'>
        <Link
        href={`/projects/library-quiz`}
        className="col-span-2 md:col-span-2 grid row-span-1 grid-cols-2 gap-2.5 rounded-xl bg-neutral-200/50 border border-neutral-100 hover:border-neutral-300 dark:hover:border-neutral-500 dark:bg-neutral-800 dark:border-neutral-700 transition-all"
        >
          <div className='font-body px-3 py-2 font-light text-neutral-700 dark:text-neutral-400 aspect-square'>
            <span>Library Scavenger Hunt</span>
          </div>
          <div className='rounded m-2 aspect-square'>
            <Image src={getStrapiMedia('/uploads/Lib_Mockup_sml_f4cd187c3a.png')} width={1000} height={1000} alt='surf' className='aspect-square object-cover right-0 rounded-lg md:p-0 '/>
          </div>
        </Link>
      </div>
      <div className='col-span-1 aspect-square'>
        <div className='col-span-1 md:col-span-1 grid grid-cols-1 row-span-1 rounded-xl aspect-square dark:border-neutral-700 dark:hover:border-neutral-500 transition-all overflow-hidden'>
          <span className='font-body mt-2 ml-3 absolute text-neutral-100 font-light'>Shot on iPhone</span>
          <div className='overflow-hidden'>
            <Image src={getStrapiMedia('/uploads/IMG_4369_831421e761.webp')} priority width={400} height={400} alt='sheep grazing in a field illuminated by golden sunset light' className='w-full md:aspect-square rounded-md object-cover right-0'/>
          </div>
        </div>
      </div>
      <div className='col-span-1 row-span-1 aspect-square'>
        <Link
          className='col-span-1 row-span-1 md:col-span-1 aspect-square row-span-1 flex flex-col p-2 rounded-xl bg-neutral-200/50 dark:bg-neutral-800 dark:border-neutral-700 md:aspect-square border border-neutral-100 hover:border-neutral-300 dark:hover:border-neutral-500 transition-all'
          href={`/books/thinking-fast-and-slow`}
        >
          <span className='font-body pb-2 pl-1 text-neutral-700 dark:text-neutral-400 font-light line-clamp-2'>Thinking Fast and Slow</span>
            <div className='overflow-hidden w-1/3 object-scale-down m-auto'>
              <Image src={getStrapiMedia('/uploads/61fdr_Eu_P_Jw_L_AC_UF_1000_1000_QL_80_d9391d2da2.jpg')} width={200} height={500} alt='surf' className='rounded-md'/>
            </div>
        </Link>
      </div>
    </div>
    <div className='h-[500px] col-span-4  flex flex-center'>
          <div className='m-auto w-[200px] flex flex-col justify-center'>
            <Image className="" src={getStrapiMedia("/uploads/avatar_2e103b1f70.png")} alt='Memoji of Oscar Dobson-Brown' width={200} height={200}/>
            <p className='justify-center font-body text-center w-full dark:text-neutral-300 '>Built by Oscar.</p>
          </div>
        </div>
    </>





  )
}



// export default async function RootRoute() {

//   // get last 2 projects

//   // get latest book cover, title, and link

//   return(

//     <div className='grid md:grid-cols-4 gap-2.5 md:mt-5 z-5 grid-cols-2 text-neutral-800 dark:text-neutral-400'>
//       <div className='col-span-2 text-2xl pr-5 font-display font-light'>
//         <p className='mb-4'>Hey there, I'm Oscar 👋 Welcome to my <span className='underline decoration-dotted text-neutral-900 dark:text-neutral-200'><Link href="/projects">portfolio</Link></span> 🌱 I like building <span className='text-neutral-900 dark:text-neutral-200'>things</span>, and I'm currently helping to build websites for <span className='text-neutral-900 dark:text-neutral-200'>clients</span>.</p>
//         <p className='mb-4'>In my free time, I enjoy <span className='text-neutral-900 dark:text-neutral-200'>camping</span>,  <span className='text-neutral-900 dark:text-neutral-200'>surfing</span>, and going to the <span className='text-neutral-900 dark:text-neutral-200'>gym</span>.</p>
//         <p className='mb-4'>I do some <span className='underline decoration-dotted text-neutral-900 dark:text-neutral-200'><Link href="/books">reading</Link></span> and <span className='underline decoration-dotted text-neutral-900 dark:text-neutral-200'><Link href="/blog">writing</Link></span> as well, though not as consistently, but I'm working on being better at that.</p>
//       </div>

//         <Link className='col-span-2 grid grid-cols-2 gap-2.5 rounded-xl bg-neutral-100 border border-neutral-100 hover:border-neutral-300 dark:hover:border-neutral-500 dark:bg-neutral-800 dark:border-neutral-700 transition-all mb-2' href={"/projects/firedanger"}>
//           <div className='font-body px-3 py-2 font-light text-neutral-700 dark:text-neutral-400 aspect-square'>
//             <span>FireDanger</span>
//           </div>
//           <div className='rounded px-2 py-2 aspect-square'>
//             <Image src="https://images.pexels.com/photos/17539758/pexels-photo-17539758/free-photo-of-surf.jpeg" width={500} height={500} alt='surf' className='aspect-square object-cover right-0 rounded-lg'/>
//           </div>
//         </Link>

//         <Link className='col-span-2 grid grid-cols-2 gap-2.5 rounded-xl bg-neutral-100 border border-neutral-100 hover:border-neutral-300 dark:hover:border-neutral-500 dark:bg-neutral-800 dark:border-neutral-700 transition-all mb-2' href={"/projects/firedanger"}>
//           <div className='font-body font-light text-neutral-700 px-3 py-2 dark:text-neutral-400'>
//             <span className=''>Fix Tile</span>
//           </div>
//           <div className='rounded-xl p-2'>
//             <Image src="https://images.pexels.com/photos/17539758/pexels-photo-17539758/free-photo-of-surf.jpeg" width={500} height={500} alt='surf' className='aspect-square object-cover right-0 rounded-lg'/>
//           </div>
//         </Link>

//       <div className='col-span-1 grid grid-cols-1 rounded-xl bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 flex flex-col aspect-square border border-neutral-100 hover:border-neutral-300  dark:hover:border-neutral-500  transition-all'>
//         <Link className='flex flex-col p-2' href={"/books/beyond-good-and-evil"}>
//         <div className='font-body pb-2 pl-1 text-neutral-700 dark:text-neutral-400 font-light line-clamp-2'>Beyond Good and Evil</div>
//         <div className='overflow-hidden w-2/4 object-scale-down m-auto'>
//           <Image src="https://bookshop.ge/content/uploads/products/9780141395838.jpg" width={200} height={500} alt='surf' className='rounded-md'/>
//         </div>
//         </Link>
//       </div>
//
//       <div className='h-[200px] col-span-4 flex flex-center'>
//         <div className='m-auto w-[200px] flex flex-col justify-center'>
//           <Image className="bg-neutral-100" src="https://placehold.co/200" alt='Memoji of Oscar Dobson-Brown' width={200} height={200}/>
//           <p className='justify-center text-center w-full'>Built by Oscar.</p>
//         </div>
//       </div>
//     </div>
//   )
// }
