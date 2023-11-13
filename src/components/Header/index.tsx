"use client";
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
import { useThemeSwitch } from "../Hooks/useThemeSwitch";
import { cx } from "../../utils";
import siteMetadata from "../../utils/siteMetaData";

function Header() {
  const [mode, setMode] = useThemeSwitch();

  const handleModeChange = () => {
    if (typeof setMode === "function") {
      setMode(mode === "light" ? "dark" : "light");
    }
  };

  return (
    <header className="w-full p-4 px-5 sm:px-10 flex items-center justify-between m-2">
      <Logo />
      <nav className="fixed w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize flex items-center top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50 transition-all ease duration-300">
        <Link href={"/"} className="mr-2">
          Home
        </Link>
        <button
          onClick={handleModeChange}
          className={cx(
            "w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1",
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
          )}
          aria-label="theme-switcher"
        >
          {mode === "light" ? (
            <MoonIcon className={"fill-dark"} />
          ) : (
            <SunIcon className={"fill-dark"} />
          )}
        </button>
      </nav>
      <div className="">
        <a
          href={siteMetadata.linkedin}
          className="inline-block w-6 h-6 mr-4"
          aria-label="Reach out to me via LinkedIn"
          target="_blank"
        >
          <LinkedinIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href={siteMetadata.twitter}
          className="inline-block w-6 h-6 mr-4"
          aria-label="Reach out to me via Twitter"
          target="_blank"
        >
          <TwitterIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href={siteMetadata.github}
          className="inline-block w-6 h-6 mr-4"
          aria-label="Check my profile on Github"
          target="_blank"
        >
          <GithubIcon className="hover:scale-125 transition-all ease duration-200 dark:fill-light" />
        </a>
      </div>
    </header>
  );
}

export default Header;
