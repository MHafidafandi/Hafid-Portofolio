import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, word }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between items-center md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            className="text-orange-500 capitalize"
            target="_blank"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-black/75 dark:text-white/75 xs:text-sm ">
          {time} | {address}
        </span>
        <p className="w-full font-medium md:text-sm">{word}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-center text-8xl w-full mb-32 md:text-6xl xs:text-4xl md:mb-16  ">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full ">
        <motion.div
          className="absolute left-9 top-0 w-[4px] h-full bg-black origin-top dark:bg-white md:w-[2px] md:left-[30px] xs:left-[20px]"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2 ">
          <Details
            position="Intern as Network Engginer"
            company="Bitniaga Cipta Gemilang"
            companyLink="https://bitniaga.net.id"
            time="Meret - Juni 2021"
            address=" Mojosari - Mojokerto"
            word="work with the team to fix network problems and expand the company's internet network, also do internet package marketing and also do administrative work"
          />
          <Details
            position="Web Programmer"
            company="Kang IT"
            companyLink="https://kangIT.com"
            time="present"
            address=" Mojosari - Mojokerto"
            word="Work with the team to receive orders for making applications or webs with a modern and beautiful appearance"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
