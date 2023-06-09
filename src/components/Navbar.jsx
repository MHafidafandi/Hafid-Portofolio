import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

export default function Navbar() {
  return (
    <header className="w-full px-32 py-8 font-medium flex justify-between items-center">
      <nav className="">
        <CustomLink href="/" className="mr-4" title="Home" />
        <CustomLink href="/about" className="m-4" title="About" />
        <CustomLink href="" className="m-4" title="Project" />
        <CustomLink href="" className="ml-4" title="Article" />
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
          href=""
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <AiFillGithub />
        </motion.a>
        <motion.a
          href=""
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <AiFillLinkedin />
        </motion.a>
        <motion.a
          href=""
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <AiFillInstagram />
        </motion.a>
        <motion.a
          href=""
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <BsFillMoonStarsFill />
        </motion.a>
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
}
