import React, { useEffect } from "react";
import Hireme from "../../public/HireMe.png";
import HiremeDark from "../../public/HireMeDark.png";
import Image from "next/image";
import Link from "next/link";
import useThemeSwitcher from "@/hooks/useThemeSwitcher";

const HireMe = () => {
  const [mode] = useThemeSwitcher();

  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-4 md:left-auto md:top-0 md:bottom-auto md:absolute ">
      <div className="w-48 h-auto flex items-center relative md:w-24">
        <Image
          src={mode === "light" ? Hireme : HiremeDark}
          alt=""
          className="animate-spin-slow dark:fill-white"
        />
        <Link
          href="mailto:afandimboizz@gmail.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white shadow-md border border-black w-20 h-20 rounded-full font-semibold dark:text-black dark:bg-white md:w-12 md:h-12 md:text-[10px]"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
