import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-black font-medium text-lg dark:text-white dark:border-white">
      <Layout className=" py-8 flex justify-between items-center ">
        <span>
          Mhafidafandi {new Date().getFullYear()} &copy; All Rights Reserved.
        </span>
        <div>
          Bulid with &#9825;
          <Link
            href={"/"}
            target="_blank"
            className="underline underline-offset-2"
          >
            {""}
            Hafid Afandi
          </Link>
        </div>
        <Link
          href={"/"}
          target="_blank"
          className="underline underline-offset-2"
        >
          Say Hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
