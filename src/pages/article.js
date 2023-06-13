import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import article1 from "../../public/article1.png";

const FramerImage = motion(Image);
const MovingImage = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x, y }}
        ref={imgRef}
        src={img}
        alt={title}
        priority
        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw,50vw"
        className="w-96 h-auto hidden absolute rounded-lg z-10"
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        initial={{ opacity: 0 }}
      />
    </Link>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="col-span-1 w-full p-4 bg-white border border-black rounded-2xl relative  dark:text-white dark:bg-black dark:border-white">
      <div className="absolute -z-10 top-0 -right-3 w-[101%] h-[103%] rounded-[2rem] bg-black rounded-br-3xl dark:bg-white" />

      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          priority={false}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <Link href={link}>
        <h2 className="capitalize text-2xl font-bold my-2 hover:underline mt-4">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-orange-500 font-semibold ">{time}</span>
    </li>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      className="relative w-full px-4 py-6 my-4 rounded-xl bg-white border border-solid border-black flex items-center justify-between text-black first:mt-0 border-r-4 border-b-4  dark:text-white dark:bg-black dark:border-white"
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
    >
      <MovingImage title={title} img={img} link={link} />
      <span className="text-orange-500 font-semibold pl-4 ">{date}</span>
    </motion.li>
  );
};

const article = () => {
  return (
    <>
      <Head>
        <title>Articles</title>
      </Head>
      <main className="w-full mb-16 flex flex-col justify-center items-center">
        <Layout className="pt-16">
          <AnimatedText
            text={"Words Can Change The World!"}
            className="mb-16 text-center"
          />

          <ul className="grid grid-cols-2 gap-16">
            <FeaturedArticle
              img={article1}
              title={"Hoax News"}
              time={"9 min read"}
              summary={
                "A recent study conducted by experts at the Future Biomedical Laboratory found that consuming papaya regularly can prevent transmission of the Corona virus. According to researchers, the enzymes contained in papaya have strong antiviral properties and can destroy the Corona virus in the human body. This discovery is expected to be a breakthrough in fighting the current global pandemic. Experts recommend people to increase consumption of papaya to boost immunity and protect themselves from the Corona virus. Previously, papaya has been proven effective in treating various deadly diseases such as cancer and AIDS."
              }
              link="/"
            />
            <FeaturedArticle
              img={article1}
              title={"Hoax News"}
              time={"9 min read"}
              summary={
                "A recent study conducted by experts at the Future Biomedical Laboratory found that consuming papaya regularly can prevent transmission of the Corona virus. According to researchers, the enzymes contained in papaya have strong antiviral properties and can destroy the Corona virus in the human body. This discovery is expected to be a breakthrough in fighting the current global pandemic. Experts recommend people to increase consumption of papaya to boost immunity and protect themselves from the Corona virus. Previously, papaya has been proven effective in treating various deadly diseases such as cancer and AIDS."
              }
              link="/"
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16">
            All Articles
          </h2>
          <ul className="">
            <Article
              img={article1}
              link={""}
              title="Master React JS by Building Real Project"
              date="13 Juni 2023"
            />
            <Article
              img={article1}
              link={""}
              title="Master React JS by Building Real Project"
              date="13 Juni 2023"
            />
            <Article
              img={article1}
              link={""}
              title="Master React JS by Building Real Project"
              date="13 Juni 2023"
            />
            <Article
              img={article1}
              link={""}
              title="Master React JS by Building Real Project"
              date="13 Juni 2023"
            />
            <Article
              img={article1}
              link={""}
              title="Master React JS by Building Real Project"
              date="13 Juni 2023"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default article;
