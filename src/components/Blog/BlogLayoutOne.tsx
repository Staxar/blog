import Image from "next/image";
import React from "react";
import Tag from "../Elements/Tag";
import Link from "next/link";

function BlogLayoutOne({ blog }) {
  return (
    <div className="inline-block overflow-hidden rounded-xl">
      <div
        className="absolute top-0 left-0 bottom-0 right-0 h-full
            bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0
            "
      />
      <Image
        src={blog.image.filePath.replace("../public", "")}
        placeholder="blur"
        blurDataURL={blog.image.blurhashDataUrl}
        alt={blog.title}
        width={blog.image.width}
        height={blog.image.height}
        className="w-full h-full object-center object-cover rounded-3xl -z-10"
      />

      <div className="w-full absolute bottom-0 p-10">
        <Tag link={`/categories/${blog.tags[0]}`} name={blog.tags[0]} />
        <Link href={blog.url} className="mt-6">
          <h1 className="font-bold capitalize text-lg sm:text-xl md:text-3xl lg:text-4xl">
            <span
              className="bg-gradient-to-r from-accent to-accent dark:from-accentDark/50 
                dark:to-accentDark/50 bg-[length:0px_6px]
                hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 "
            >
              {blog.title}
            </span>
          </h1>
        </Link>
      </div>
    </div>
  );
}

export default BlogLayoutOne;