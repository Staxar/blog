"use client";
import Image from "next/image";
import { TEXT } from "../../../assets/mocks/DATA";
export default function BlogPage() {
  return (
    <div className="h-full w-full flex justify-center">
      <div className="flex flex-col w-3/4 items-center justify-center p-12">
        <div className="w-full h-96 relative">
          <Image
            src={
              "https://images.pexels.com/photos/4995693/pexels-photo-4995693.jpeg"
            }
            fill
            style={{ objectFit: "contain" }}
            alt="blog-image"
          />
        </div>
        <div className="py-12 px-6 w-full">
          <div className="text-center" title="title" about="title blog post">
            <span className="text-6xl">Title blog</span>
          </div>
          <div className="py-6" title="content" about="content blog post">
            <p
              title="paragraph"
              about="text content"
              className="indent-8 leading-10"
            >
              {TEXT}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
