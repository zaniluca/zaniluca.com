import { useMDXComponent } from "next-contentlayer/hooks";
import { allBlogPosts } from "contentlayer/generated";
import type { BlogPost } from "contentlayer/generated";
import type { GetStaticPaths, GetStaticProps } from "next";
import type { CustomNextPage } from "../../lib/types";
import BlogLayout from "../../layouts/blog";

type Props = {
  post: BlogPost;
};

const BlogPage: CustomNextPage<Props> = ({ post }) => {
  const Component = useMDXComponent(post.body.code);

  return (
    <BlogLayout post={post}>
      <Component />
    </BlogLayout>
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
  console.log(post);
  return { props: { post } };
};

export default BlogPage;
