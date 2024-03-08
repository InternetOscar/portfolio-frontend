import type { Metadata } from "next";
import "./globals.css";
import { getStrapiMedia, getStrapiURL } from "./utils/api-helpers";
import { fetchAPI } from "./utils/fetch-api";

import { i18n } from "../../../i18n-config";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { Inter, Roboto_Mono, Work_Sans, Fraunces } from 'next/font/google'

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fraunces',
})

const work = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work',
})


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {

  return (
    <html lang={params.lang} className={`${inter.variable} ${roboto_mono.variable} ${fraunces.variable} ${work.variable}`}>
      <head>
        <title>Oscar Dobson-Brown — Web Developer</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=Inclusive+Sans:ital@0;1&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/> */}
      </head>
      <body className="w-screen overflow-x-hidden bg-neutral-50 dark:bg-black md:dark:bg-neutral-900 antialiased">
        <Navbar/>

        <main className="min-h-screen md:mx-[40px] md:my-[20px] mx-[10px] my-3">
          {children}
        </main>

        <Footer></Footer>
        <Analytics/>
        <SpeedInsights/>
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}
