import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface CardTypes {
  description: string;
  image: string | StaticImport;
}

export default function Card({ description, image }: CardTypes) {
  return (
    <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 cursor-pointer">
      <div className="">
        <Image src={image} alt="" />
      </div>
      <div className="">{description}</div>
    </div>
  );
}
