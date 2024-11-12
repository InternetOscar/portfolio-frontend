"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = [
  { title: "Oscar", href: "/" },
  { title: "Projects", href: "/projects" },
  { title: "Books", href: "/books" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState(0);
  const [highlightStyle, setHighlightStyle] = useState({});
  const [blurAmount, setBlurAmount] = useState(0);
  const navRef = useRef(null);

  useEffect(() => {
    const currentIndex = Links.findIndex((link) => pathname === link.href);
    setActiveIndex(currentIndex !== -1 ? currentIndex : 0);
  }, [pathname]);

  useEffect(() => {
    const updateHighlight = () => {
      if (navRef.current) {
        const navItem = navRef.current.children[activeIndex];
        setHighlightStyle({
          width: `${navItem.offsetWidth}px`,
          transform: `translateX(${navItem.offsetLeft}px)`,
        });
      }
    };
    updateHighlight();
    window.addEventListener("resize", updateHighlight);
    return () => window.removeEventListener("resize", updateHighlight);
  }, [activeIndex]);
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex md:justify-start justify-center items-center h-28">
            <nav className="md:text-neutral-400 text-neutral-500 dark:text-neutral-100 font-body font-regular shadow-lg p-1 rounded-lg border border-neutral-300 overflow-hidden bg-white dark:bg-neutral-800 dark:border-neutral-700 backdrop-blur-md relative">
              <div
                className="absolute top-1 bottom-1 bg-neutral-100 dark:bg-neutral-900 dark:border dark:border-neutral-700 rounded-md transition-all duration-300 ease-in-out"
                style={highlightStyle}
              />
              <div ref={navRef} className="flex relative z-10">
                {Links.map((link, index) => (
                  <Link
                    href={link.href}
                    key={link.title}
                    className={`rounded-md hover:bg-neutral-100 hover:text-neutral-600 dark:hover:bg-neutral-900 transition-all px-3 py-1 ${
                      index > 0 ? "ml-1" : ""
                    } dark:border-neutral-800 dark:hover:text-neutral-200 ${
                      index === activeIndex
                        ? "text-neutral-800 dark:text-neutral-100"
                        : ""
                    }`}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </header>
      {/* Spacer */}
      <div className="h-44 bg-transparent" aria-hidden="true" />
    </>
  );
}
