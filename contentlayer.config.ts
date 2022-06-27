import { defineDocumentType, makeSource } from "contentlayer/source-files";
import readingTime from "reading-time";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";

const BlogPost = defineDocumentType(() => ({
  name: "BlogPost",
  filePathPattern: "*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "date", required: true },
    summary: { type: "string", required: true },
    image: { type: "string", required: false },
  },
  computedFields: {
    readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
    wordCount: {
      type: "number",
      resolve: (doc) => doc.body.raw.split(/\s+/gu).length,
    },
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
  },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [BlogPost],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["anchor"],
          },
        },
      ],
    ],
  },
});
