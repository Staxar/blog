import React from "react";
import { sortBlogs } from "../../utils";
import Link from "next/link";
import BlogLayoutThree from "../Blog/BlogLayoutThree";

function RecentPosts({ blogs }) {
  const sortedBlogs = sortBlogs(blogs);
  return (
    <section className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center">
      <div className="flex w-full justify-between">
        <h2 className="inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
          Recent Posts
        </h2>
        <Link
          href={"/categories/all"}
          className="inline-block font-medium text-accent underline text-lg"
        >
          view all
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-16 mt-16">
        {sortedBlogs.slice(5, 11).map((blog, index) => {
          return (
            <article className="col-span-1 row-span-1 relative" key={index}>
              <BlogLayoutThree blog={blog} />
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default RecentPosts;
