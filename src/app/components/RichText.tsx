import React from "react";
import Markdown from "react-markdown";

interface RichTextProps {
  data: {
    body: string;
  };
}

const customStyle = {
  'code[class*="language-"]': {
    fontFamily: "'Martian Mono', monospace !important",
  },
  'pre[class*="language-"]': {
    fontFamily: "'Martian Mono', monospace !important",
  },
};

export default function RichText({ data }: RichTextProps) {
  return (
    <section className="rich-text dark:text-neutral-200">
      <div className="prose prose-lg dark:bg-neutral-900 rounded-lg">
        <Markdown
          components={{
            h1: ({ node, ...props }) => (
              <h1
                className="font-display text-3xl font-bold mb-4 text-neutral-900 dark:text-neutral-100"
                {...props}
              />
            ),
            h2: ({ node, ...props }) => (
              <h2
                className="font-display text-2xl font-semibold mt-6 mb-3 text-neutral-800 dark:text-neutral-200"
                {...props}
              />
            ),
            h3: ({ node, ...props }) => (
              <h3
                className="font-display text-xl font-semibold mt-5 mb-2 text-neutral-700 dark:text-neutral-300"
                {...props}
              />
            ),
            strong: ({ node, ...props }) => (
              <p
                className="font-work-sans font-semibold mb-4 text-neutral-600 dark:text-neutral-300 leading-relaxed"
                {...props}
              />
            ),
            p: ({ node, ...props }) => (
              <p
                className="font-work-sans mb-4 text-neutral-600 dark:text-neutral-300 leading-relaxed"
                {...props}
              />
            ),
            a: ({ node, ...props }) => (
              <a
                className="font-work-sans mb-4 text-blue-600 dark:text-neutral-500 leading-relaxed"
                {...props}
              />
            ),
            pre: ({ node, ...props }) => (
              <pre
                style={{ fontFamily: "'Martian Mono', monospace" }}
                className="mb-4 text-neutral-600 dark:text-neutral-300 leading-relaxed font-light dark:bg-neutral-800"
                {...props}
              />
            ),
          }}
        >
          {data.body}
        </Markdown>
      </div>
    </section>
  );
}
