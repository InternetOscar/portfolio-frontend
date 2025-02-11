import React from "react";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const MarkdownRenderer = ({ content, className = "" }) => {
  return (
    <article
      className={`prose prose-lg max-w-none dark:prose-invert ${className}`}
    >
      <Markdown
        components={{
          // Headings
          h1: ({ children }) => (
            <h1 className="font-display text-4xl font-bold mb-6 text-neutral-900 dark:text-neutral-100">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="font-display text-3xl font-semibold mt-8 mb-4 text-neutral-800 dark:text-neutral-200">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="font-display text-2xl font-semibold mt-6 mb-3 text-neutral-700 dark:text-neutral-300">
              {children}
            </h3>
          ),

          // Text elements
          p: ({ children }) => (
            <p className="font-work-sans mb-4 text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {children}
            </p>
          ),
          strong: ({ children }) => (
            <strong className="font-work-sans font-semibold text-neutral-800 dark:text-neutral-200">
              {children}
            </strong>
          ),
          em: ({ children }) => (
            <em className="font-work-sans italic text-neutral-700 dark:text-neutral-300">
              {children}
            </em>
          ),

          // Lists
          ul: ({ children }) => (
            <ul className="list-disc pl-6 mb-4 font-work-sans text-neutral-600 dark:text-neutral-300">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal pl-6 mb-4 font-work-sans text-neutral-600 dark:text-neutral-300">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="mb-2 leading-relaxed">{children}</li>
          ),

          // Links and images
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline transition-colors"
            >
              {children}
            </a>
          ),
          img: ({ src, alt }) => (
            <img
              src={src}
              alt={alt}
              className="rounded-lg w-full h-auto my-6"
            />
          ),

          // Code blocks
          code: ({ node, inline, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || "");
            const language = match ? match[1] : "";

            if (!inline && language) {
              return (
                <SyntaxHighlighter
                  style={atomDark}
                  language={language}
                  className="font-mono rounded-lg !my-6"
                  customStyle={{
                    margin: "1.5rem 0",
                    padding: "1rem",
                    backgroundColor: "#1a1a1a",
                  }}
                  {...props}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              );
            }

            return (
              <code
                className="font-mono bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded text-sm"
                {...props}
              >
                {children}
              </code>
            );
          },

          // Blockquotes
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-neutral-300 dark:border-neutral-700 pl-4 italic my-6 text-neutral-600 dark:text-neutral-400">
              {children}
            </blockquote>
          ),

          // Horizontal rule
          hr: () => (
            <hr className="my-8 border-neutral-200 dark:border-neutral-800" />
          ),
        }}
      >
        {content}
      </Markdown>
    </article>
  );
};

export default MarkdownRenderer;
