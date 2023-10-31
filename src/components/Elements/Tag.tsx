import Link from "next/link";
import React from "react";
import { cx } from "../../utils";

interface TagProps {
  link: string;
  name: string;
  className?: string;
}

function Tag({ link = "#", name, ...props }: TagProps) {
  return (
    <Link
      href={link}
      className={cx(
        "inline-block py-3 px-10 bg-dark text-light rounded-full capitalize font-semibold border-2 border-solid border-light hover:scalele-105 transition-all ease duration-200",
        props.className
      )}
    >
      {name}
    </Link>
  );
}

export default Tag;
