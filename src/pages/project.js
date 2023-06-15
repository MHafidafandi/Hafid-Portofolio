import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import feturedProject from "../../public/featuredProject.jpg";
import { motion } from "framer-motion";
import project1 from "../../public/portofolioTailwind.png";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full relative flex justify-between items-center gap-10 rounded-3xl border border-solid border-black bg-white shadow-2xl p-12 dark:bg-black dark:border-white  dark:text-white lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute -z-10 top-0 -right-3 w-[101%] h-[103%] rounded-[2.5rem] bg-black dark:bg-white rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 rounded-lg cursor-pointer overflow-hidden lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          priority
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw,50vw"
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-1/2 flex flex-col justify-between items-start lg:w-full lg:pl-0 lg:pt-0">
        <span className="text-orange-500 font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold xs:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-black dark:text-white sm:text-sm">
          {summary}
        </p>
        <div className="w-full mt-2 flex gap-5 items-center">
          <Link href={github} target="_blank" className="text-[40px]">
            <AiFillGithub />
          </Link>
          <Link
            href={github}
            target="_blank"
            className="bg-black rounded-lg text-white py-2 px-6 font-semibold text-lg dark:bg-white dark:text-black sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center p-6 relative border border-solid border-black rounded-2xl bg-white dark:bg-black dark:border-white dark:text-white xs:p-4 ">
      <div className="absolute -z-10 top-0 -right-3 w-[102%] h-[103%] rounded-[2rem] bg-black dark:bg-white md:-right-2 md:w-[101%] sm:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full rounded-lg cursor-pointer overflow-hidden"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw,50vw"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-full flex flex-col justify-between items-start mt-4 ">
        <span className="text-orange-500 font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex gap-5 items-center justify-between">
          <Link
            href={github}
            target="_blank"
            className="text-black underline text-lg font-semibold dark:text-white md:text-base"
          >
            Visit
          </Link>
          <Link
            href={github}
            target="_blank"
            className="text-[35px]  dark:text-white md:text-[20px]"
          >
            <AiFillGithub />
          </Link>
        </div>
      </div>
    </article>
  );
};

const project = () => {
  return (
    <>
      <Head>
        <title>Project</title>
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Today must be better than yesterday"
            className="text-center lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl "
          />
          <div className="grid grid-cols-12 gap-24 pb-32 pt-10 xs:pt-0 xl:gap-x-16 lg:gap-x-8 md:gap-y-16 sm:gap-x-0 ">
            <div className="col-span-12 ">
              <FeturedProject
                type="Featured Project"
                title="Thrifting Shop"
                summary="A store that sells all thrift goods. There are lots of shops and markets selling antiques all over Indonesia. And also, with the development of the times, this thrift shop trend is also developing. You can find lots of online shops or e-commerce that sell collections or vintage clothes."
                img={feturedProject}
                link={""}
                github={""}
              />
            </div>
            <div className="col-span-6 sm:col-span-12 ">
              <Project
                type="Portofolio Website"
                title="Tailwind Portofolio Website"
                img={project1}
                link={""}
                github={"https://github.com/MHafidafandi/Portofolio-Tailwind"}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Portofolio Website"
                title="Tailwind Portofolio Website"
                img={project1}
                link={""}
                github={"https://github.com/MHafidafandi/Portofolio-Tailwind"}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default project;
