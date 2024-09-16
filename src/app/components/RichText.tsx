import React from 'react';
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// You'll need to import Fraunces in your project, typically in a global CSS file or in the head of your HTML


interface RichTextProps {
  data: {
    body: string;
  };
}

export default function RichText({ data }: RichTextProps) {
  return (
    <section className="rich-text py-6 dark:text-gray-50">
      <div className="prose prose-lg max-w-3xl mx-auto bg-white bg-neutral-900 rounded-lg shadow-md">
        <Markdown
          children={data.body}
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ node, ...props }) => (
              <h1 className="font-fraunces text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100" {...props} />
            ),
            h2: ({ node, ...props }) => (
              <h2 className="font-fraunces text-2xl font-semibold mt-6 mb-3 text-gray-800 dark:text-gray-200" {...props} />
            ),
            h3: ({ node, ...props }) => (
              <h3 className="font-fraunces text-xl font-semibold mt-5 mb-2 text-gray-700 dark:text-gray-300" {...props} />
            ),
            p: ({ node, ...props }) => <p className="mb-4 text-gray-600 dark:text-gray-400 leading-relaxed" {...props} />,
            strong: ({ node, ...props }) => <p className="mb-4 text-gray-600 font-semibold dark:text-gray-400 leading-relaxed" {...props} />,
            ul: ({ node, ...props }) => <ul className="list-disc mb-4 text-gray-600 dark:text-gray-400" {...props} />,
            ol: ({ node, ...props }) => <ol className="list-decimal mb-4 text-gray-600 dark:text-gray-400" {...props} />,
            li: ({ node, ...props }) => <li className="mb-2" {...props} />,
            a: ({ node, ...props }) => <a className="text-blue-600 dark:text-blue-400 hover:underline" {...props} />,
            blockquote: ({ node, ...props }) => (
              <blockquote className="border-l-4 border-gray-300 dark:border-gray-700 pl-4 py-2 mb-4 italic text-gray-600 dark:text-gray-400" {...props} />
            ),
            code: ({ node, inline, className, children, ...props }) => {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  style={atomDark}
                  language={match[1]}
                  PreTag="div"
                  className="rounded-md mb-4"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className="bg-gray-100 dark:bg-gray-700 rounded-md px-2 py-1 text-sm" {...props}>
                  {children}
                </code>
              );
            },
          }}
        />
      </div>
    </section>
  );
}
