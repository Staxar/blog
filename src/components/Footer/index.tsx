import React from "react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "../Icons";
import Link from "next/link";
import siteMetadata from "../../utils/siteMetaData";
function Footer() {
  return (
    <footer className="mt-16 rounded-2xl bg-dark m-10 flex flex-col items-center text-light ">
      <h3 className="mt-16 font-medium text-center capitalize text-4xl px-4">
        Interesting Stories | Updates | Guides
      </h3>
      <div className="flex items-center mt-8">
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
          <GithubIcon className="hover:scale-125 transition-all ease duration-200 fill-light" />
        </a>
      </div>
      <div className="w-full mt-24 relative font-medium border-t border-solid border-light py-6 px-8 flex flex-row items-center justify-between">
        <span>&copy; 2023. All right reserved</span>
        <Link href={"/sitemap.xml"} className="text-center underline">
          sitemap.xml
        </Link>
        <div className="text-center">Made by Staxar</div>
      </div>
    </footer>
  );
}

export default Footer;
