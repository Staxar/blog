"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";
import { cx } from "../../utils";
import { MoonIcon, SunIcon } from "../Icons";
import Icons from "./Icons";

interface NavbarInterface {
  trigger: boolean;
}
function Navbar({ trigger }: NavbarInterface) {
  const [mode, setMode] = useThemeSwitch();
  const [isOpen, setIsOpen] = useState<boolean>(trigger);
  const handleModeChange = () => {
    if (typeof setMode === "function") {
      setMode(mode === "light" ? "dark" : "light");
    }
  };
  return (
    <>
      <nav
        className={`${
          isOpen ? "hidden" : "flex"
        } fixed w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize md:flex items-center top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50 transition-all ease duration-300`}
      >
        <Link href={"/"} className="mr-2">
          Home
        </Link>
        <Link href={"/categories/all"} className="mr-2">
          Categories
        </Link>
        <Link href={"/about"} className="mr-2">
          About
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
      <div className="flex items-center justify-center">
        <Icons setOpen={setIsOpen} isOpen={isOpen} />
      </div>
    </>
  );
}

export default Navbar;
