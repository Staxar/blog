import { format, parseISO } from "date-fns";
import { slug } from "github-slugger";
import Link from "next/link";
import React from "react";

function BlogDetails({ blog, slug: blogSlug }) {
  return (
    <div className="px-10 bg-accent text-light py-2 flex items-center justify-around flex-wrap text-xl font-medium mx-10 rounded-lg">
      <time>{format(parseISO(blog.publishedAt), "LLLL d, yyyy")}</time>
      <span>10 views</span>
      <div className="m-3">{blog.readingTime.text}</div>
      <Link href={`/categories/${slug(blog.tags[0])}`} className="m-3">
        #{blog.tags[0]}
      </Link>
    </div>
  );
}

export default BlogDetails;
