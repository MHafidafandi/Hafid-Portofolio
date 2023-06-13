import React from "react";
import Hireme from "../../public/HireMe.png";
import Image from "next/image";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
      <div className="w-48 h-auto flex items-center relative">
        <Image
          src={Hireme}
          alt=""
          className="animate-spin-slow dark:fill-white"
        />
        <Link
          href="mailto:afandimboizz@gmail.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white shadow-md border border-black w-20 h-20 rounded-full font-semibold dark:text-black dark:bg-white"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
