import React from "react";
import siteMetadata from "../../utils/siteMetaData";
import { LinkedinIcon, TwitterIcon, GithubIcon, BurgerIcon } from "../Icons";

interface IconsInterface {
  setOpen: (trigger: boolean) => void;
  isOpen: boolean;
}

function Icons({ setOpen, isOpen }: IconsInterface) {
  return (
    <>
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
      <button
        onClick={() => setOpen(!isOpen)}
        className="inline-block w-6 h-6 mr-4"
      >
        <BurgerIcon
          className={
            "hover:scale-125 transition-all ease duration-200 dark:fill-light md:hidden"
          }
        />
      </button>
    </>
  );
}

export default Icons;
