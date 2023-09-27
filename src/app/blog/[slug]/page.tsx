"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BlogPage() {
  const router = usePathname();
  return (
    <div className="">
      <Link href={"/"}>
        <div>Click me!</div>
      </Link>
    </div>
  );
}
