import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BsFillMoonStarsFill, BsSun } from "react-icons/bs";
import { animate, motion } from "framer-motion";
import useThemeSwitcher from "@/hooks/useThemeSwitcher";
import { useState } from "react";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-white ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <button
      href={href}
      className={`${className} relative group flex justify-center items-center`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-white absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-black ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
};
export default function Navbar() {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-32 py-8 font-medium flex justify-between items-center dark:text-white relative z-10 lg:px-16 md:px-12 sm:p-8">
      <button
        className="justify-center flex-col items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-black dark:bg-white block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-black dark:bg-white block h-0.5 w-6 rounded-sm my-0.5 transition-all duration-300 ease-out ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-black dark:bg-white block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav className="">
          <CustomLink href="/" className="mr-4" title="Home" />
          <CustomLink href="/about" className="m-4" title="About" />
          <CustomLink href="/project" className="m-4" title="Project" />
          <CustomLink href="/article" className="ml-4" title="Article" />
        </nav>

        <nav className="flex items-center gap-7 text-3xl">
          <motion.a
            href=""
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <AiFillTwitterCircle />
          </motion.a>
          <motion.a
            href="https://github.com/MHafidafandi"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <AiFillGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/m-hafid-afandi-23b725245/"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <AiFillLinkedin />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/mhafid_a/"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <AiFillInstagram />
          </motion.a>
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setMode(mode === "dark" ? "light" : "dark")}
          >
            {mode === "dark" ? <BsSun /> : <BsFillMoonStarsFill />}
          </motion.button>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          className="min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-black/90 dark:bg-white/75 rounded-lg backdrop-blur-md py-20 text-white dark:text-black "
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1, transition: { duration: 0.2 } }}
        >
          <nav className="flex flex-col items-center justify-center mb-5 gap-4">
            <CustomMobileLink
              href="/"
              className=""
              title="Home"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              className=""
              title="About"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/project"
              className=""
              title="Project"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/article"
              className=""
              title="Article"
              toggle={handleClick}
            />
          </nav>

          <nav className="flex items-center gap-7 text-3xl sm:gap-1 md:text-3xl xs:text-2xl">
            <motion.a
              href=""
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <AiFillTwitterCircle />
            </motion.a>
            <motion.a
              href="https://github.com/MHafidafandi"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <AiFillGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/m-hafid-afandi-23b725245/"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <AiFillLinkedin />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/mhafid_a/"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <AiFillInstagram />
            </motion.a>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMode(mode === "dark" ? "light" : "dark")}
            >
              {mode === "dark" ? <BsSun /> : <BsFillMoonStarsFill />}
            </motion.button>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
}
