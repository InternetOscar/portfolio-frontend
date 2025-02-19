import { Fraunces, Martian_Mono, Work_Sans } from "next/font/google";

export const fraunces = Fraunces({
  weight: ["300"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
});

export const work_sans = Work_Sans({
  weight: ["300", "400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
});

export const martian_mono = Martian_Mono({
  weight: ["300", "400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-martian-mono",
});
