import Image from "next/image";
import { Photo } from "pexels";
import Link from "next/link";

interface CardTypes {
  description: string;
  item: Photo;
}

export default function Card({ description, item }: CardTypes) {
  return (
    <Link href={`/blog/${item.id}`}>
      <div className="flex flex-row group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 cursor-pointer">
        <div className="h-48 w-48 relative">
          <Image
            priority
            key={item.id}
            src={item.src.original !== "" ? item.src.original : item.url}
            alt={item.alt || ""}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex-1 px-4">{description}</div>
      </div>
    </Link>
  );
}
