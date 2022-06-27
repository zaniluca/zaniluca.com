import Image from "next/image";
import { parseISO, format } from "date-fns";
import type { BlogPost } from "contentlayer/generated";

type BlogLayoutProps = {
  post: BlogPost;
};

const BlogLayout: React.FC<BlogLayoutProps> = ({ children, post }) => {
  return (
    <article className="mx-auto mb-16 flex w-full max-w-2xl flex-col items-start justify-center">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
        {post.title} {post.publishedAt}
      </h1>
      <div className="mt-2 flex w-full flex-col items-start justify-between md:flex-row md:items-center">
        <div className="flex items-center">
          <Image
            alt="Luca Zani"
            height={24}
            width={24}
            src="/profile.jpg"
            className="rounded-full"
          />
          <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
            {"Luca Zani / "}
            {format(parseISO(post.publishedAt), "MMMM dd, yyyy")}
          </p>
        </div>
        <p className="min-w-32 mt-2 text-sm text-gray-600 dark:text-gray-400 md:mt-0">
          {post.readingTime.text}
        </p>
      </div>
      <div className="prose dark:prose-dark mt-4 w-full max-w-none">
        {children}
      </div>
      <div className="text-sm text-gray-700 dark:text-gray-300">
        <a
          href={`https://github.com/zaniluca/zaniluca.com/edit/main/data/blog/${post.slug}.mdx`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Edit on Github
        </a>
      </div>
    </article>
  );
};

export default BlogLayout;
