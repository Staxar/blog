"use client";
import Card from "./components/Card";
import { TypeAnimation } from "react-type-animation";
import DATA from "@/assets/mocks/DATA";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
const Home: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <code className="font-mono font-bold flex flex-1/2">
            Welcome to my blog!
          </code>
        </p>

        <div className="fixed bottom-0 left-0 flex flex-row gap-4 h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <Link
            href={"https://www.linkedin.com/in/marcin-domaga%C5%82a-17a003251/"}
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} size="xl" />
          </Link>
          <Link href={"https://github.com/Staxar"} target="_blank">
            <FontAwesomeIcon icon={faGithub} size="xl" />
          </Link>
          <Link
            href={"https://www.instagram.com/mar_domagala/"}
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} size="xl" />
          </Link>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] lg:min-w-full before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <span className="text-5xl w-full text-center h-48 flex items-center justify-center">
          <TypeAnimation
            cursor={false}
            sequence={["Web Developers", 2500, "Software Engineers", 2500]}
            wrapper="h2"
            repeat={Infinity}
            className="home__title"
          />
        </span>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
        {DATA.map((item) => (
          <Card item={item} key={item.id} description={"Some description"} />
        ))}
      </div>
    </main>
  );
};

export default Home;
