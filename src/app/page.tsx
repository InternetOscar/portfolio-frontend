import Link from 'next/link';
import Image from 'next/image';
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
          <div className='font-body px-3 py-2  text-neutral-700 dark:text-neutral-400 aspect-square'>
            <span>FireDanger</span>
          </div>
          <div className='rounded m-2 aspect-square'>
            <Image priority src={getStrapiMedia('https://strapi-aws-s3-assets.s3.ap-southeast-2.amazonaws.com/firedanger_b310997e95.png')} width={500} height={500} alt='surf' className='aspect-square object-cover right-0 rounded-lg md:p-0'/>
          </div>
        </Link>
      </div>
      <div className='col-span-1 row-span-1 aspect-square'>
        <Link
          className='col-span-1 row-span-1 md:col-span-1 aspect-square row-span-1 flex flex-col p-2 rounded-xl bg-neutral-200/50 dark:bg-neutral-800 dark:border-neutral-700 md:aspect-square border border-neutral-100 hover:border-neutral-300 dark:hover:border-neutral-500 transition-all'
          href={`/books/thinking-fast-and-slow`}
        >
          <span className='font-body pb-2 pl-1 text-neutral-700 dark:text-neutral-400  line-clamp-2'>The 48 Laws of Power</span>
            <div className='overflow-hidden w-1/3 object-scale-down m-auto'>
              <Image src={getStrapiMedia('https://strapi-aws-s3-assets.s3.ap-southeast-2.amazonaws.com/48_laws_of_power_a13963c526.jpg')} width={100} height={200} alt='surf' className='w-full rounded-md'/>
            </div>
        </Link>
      </div>
      <div className='col-span-1 row-span-1 aspect-square'>
        <div className='col-span-1 md:col-span-1 grid grid-cols-1 row-span-1 rounded-xl aspect-square dark:border-neutral-700 dark:hover:border-neutral-500 transition-all overflow-hidden'>
          <span className='font-body mt-2 ml-3 absolute text-neutral-100 '>Shot on iPhone</span>
          <div className='overflow-hidden'>
            <Image src={getStrapiMedia('https://strapi-aws-s3-assets.s3.ap-southeast-2.amazonaws.com/IMG_5743_add101f162.webp')} priority width={500} height={500} alt='sheep grazing in a field illuminated by golden sunset light' className='fill={true} md:aspect-square rounded-md object-cover right-0'/>
          </div>
        </div>
      </div>
      <div className='col-span-2'>
        <Link
        href={`/projects/library-quiz`}
        className="col-span-2 md:col-span-2 grid row-span-1 grid-cols-2 gap-2.5 rounded-xl bg-neutral-200/50 border border-neutral-100 hover:border-neutral-300 dark:hover:border-neutral-500 dark:bg-neutral-800 dark:border-neutral-700 transition-all"
        >
          <div className='font-body px-3 py-2  text-neutral-700 dark:text-neutral-400 aspect-square'>
            <span>Library Scavenger Hunt</span>
          </div>
          <div className='rounded m-2 aspect-square'>
            <Image src={getStrapiMedia('/uploads/Lib_Mockup_2f5ec0fdbd.png')} width={400} height={400} alt='surf' className='aspect-square w-full object-cover right-0 rounded-lg md:p-0 '/>
          </div>
        </Link>
      </div>
      <div className='col-span-1 aspect-square'>
        <div className='col-span-1 md:col-span-1 grid grid-cols-1 row-span-1 rounded-xl aspect-square dark:border-neutral-700 dark:hover:border-neutral-500 transition-all overflow-hidden'>
          <span className='font-body mt-2 ml-3 absolute text-neutral-100 '>Shot on iPhone</span>
          <div className='overflow-hidden'>
            <Image src={getStrapiMedia('https://strapi-aws-s3-assets.s3.ap-southeast-2.amazonaws.com/IMG_4369_1dd10386b2.webp')} priority width={400} height={400} alt='sheep grazing in a field illuminated by golden sunset light' className='w-full md:aspect-square rounded-md object-cover right-0'/>
          </div>
        </div>
      </div>
      <div className='col-span-1 row-span-1 aspect-square'>
        <Link
          className='col-span-1 row-span-1 md:col-span-1 aspect-square row-span-1 flex flex-col p-2 rounded-xl bg-neutral-200/50 dark:bg-neutral-800 dark:border-neutral-700 md:aspect-square border border-neutral-100 hover:border-neutral-300 dark:hover:border-neutral-500 transition-all'
          href={`/books/thinking-fast-and-slow`}
        >
          <span className='font-body pb-2 pl-1 text-neutral-700 dark:text-neutral-400  line-clamp-2'>Thinking Fast and Slow</span>
            <div className='overflow-hidden w-1/3 object-scale-down m-auto'>
              <Image src={getStrapiMedia('https://strapi-aws-s3-assets.s3.ap-southeast-2.amazonaws.com/61fdr_Eu_P_Jw_L_AC_UF_1000_1000_QL_80_0a3905c6f5.jpg')} width={100} height={200} alt='surf' className='w-full rounded-md'/>
            </div>
        </Link>
      </div>
    </div>
    <div className='h-[500px] col-span-4  flex flex-center'>
          <div className='m-auto w-[200px] flex flex-col justify-center'>
            <Image className="" src={getStrapiMedia("https://strapi-aws-s3-assets.s3.ap-southeast-2.amazonaws.com/avatar_fa24b1d38b.png")} alt='Memoji of Oscar Dobson-Brown' width={200} height={200}/>
            <p className='justify-center font-body text-center w-full dark:text-neutral-300 '>Built by Oscar.</p>
          </div>
        </div>
    </>
  )
}
