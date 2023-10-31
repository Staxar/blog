import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import {
  GithubIcon,
  LinkedinIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "../Icons";

function Header() {
  return (
    <header className="w-full p-4 px-5 sm:px-10 flex items-center justify-between m-2">
      <Logo />
      <nav className="fixed w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize flex items-center top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50 transition-all ease duration-300">
        <Link href={"/"} className="mr-2">
          Home
        </Link>
        <Link href={"/about"} className="mr-2">
          About
        </Link>
        <Link href={"/contact"} className="mr-2">
          Contact
        </Link>
        <button>Change theme</button>
      </nav>
      <div className="">
        <a href="" className="inline-block w-6 h-6 mr-4">
          <LinkedinIcon className="hover:scale-125 transition-all ease-linear duration-200" />
        </a>
        <a href="" className="inline-block w-6 h-6 mr-4">
          <TwitterIcon className="hover:scale-125 transition-all ease-linear duration-200" />
        </a>
        <a href="" className="inline-block w-6 h-6 mr-4">
          <GithubIcon className="hover:scale-125 transition-all ease-linear duration-200" />
        </a>
      </div>
    </header>
  );
}

export default Header;
