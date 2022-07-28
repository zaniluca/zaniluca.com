import { useMDXComponent } from "next-contentlayer/hooks";
import { allBlogPosts } from "contentlayer/generated";
import type { BlogPost } from "contentlayer/generated";
import type { GetStaticPaths, GetStaticProps } from "next";
import type { CustomNextPage } from "../../lib/types";
import Image from "next/image";
import { parseISO, format } from "date-fns";

type Props = {
  post: BlogPost;
};

const BlogPage: CustomNextPage<Props> = ({ post }) => {
  const Component = useMDXComponent(post.body.code);

  return (
    <article className="mx-auto mb-16 flex w-full max-w-2xl flex-col items-start justify-center">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
        {post.title}
      </h1>
      <div className="mt-2 flex w-full flex-col items-start justify-between md:flex-row md:items-center">
        <div className="flex items-center">
          <Image
            alt="Luca Zani"
            height={24}
            width={24}
            src="/images/profile.jpg"
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
      <div className="prose mt-4  w-full max-w-none dark:prose-dark">
        <Component />
      </div>
      <div className="mt-4 text-sm text-gray-700 dark:text-gray-300">
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

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allBlogPosts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = allBlogPosts.find((post) => post.slug === params?.slug);

  return { props: { post } };
};

export default BlogPage;
