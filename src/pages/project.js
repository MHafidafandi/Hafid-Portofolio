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

const FramerImage = motion(Image);

const FeturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full relative flex justify-between items-center gap-10 rounded-3xl border border-solid border-black bg-white shadow-2xl overflow-hidden p-12 ">
      <div className="absolute -z-10 top-10 -right-3 w-[101%] h-[103%] rounded-[2.5rem] bg-black" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 rounded-lg cursor-pointer overflow-hidden"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-1/2 flex flex-col justify-between items-start">
        <span className="text-orange-500 font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-black">{summary}</p>
        <div className="w-full mt-2 flex gap-5 items-center">
          <Link href={github} target="_blank" className="text-[40px]">
            <AiFillGithub />
          </Link>
          <Link
            href={github}
            target="_blank"
            className="bg-black rounded-lg text-white py-2 px-6 font-semibold text-lg"
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
    <article className="w-full flex flex-col items-center justify-center p-6 relative border border-solid border-black rounded-2xl bg-white ">
      <div className="absolute -z-10 top-0 -right-3 w-[102%] h-[103%] rounded-[2rem] bg-black " />
      <Link
        href={link}
        target="_blank"
        className="w-full rounded-lg cursor-pointer overflow-hidden"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-full flex flex-col justify-between items-start mt-4">
        <span className="text-orange-500 font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex gap-5 items-center justify-between">
          <Link
            href={github}
            target="_blank"
            className="text-black underline text-lg font-semibold"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="text-[35px]">
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
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Today must be better than yesterday"
            className="text-center"
          />
          <div className="grid grid-cols-12 gap-24 py-32">
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
            <div className="col-span-6 ">
              <Project
                type="Portofolio Website"
                title="Tailwind Portofolio Website"
                img={project1}
                link={""}
                github={"https://github.com/MHafidafandi/Portofolio-Tailwind"}
              />
            </div>
            <div className="col-span-6 ">
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
