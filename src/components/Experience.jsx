import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, word }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between items-center"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            className="text-orange-500 capitalize"
            target="_blank"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-black/75">
          {time} | {address}
        </span>
        <p className="w-full font-medium ">{word}</p>
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
      <h2 className="font-bold text-center text-8xl w-full mb-32">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative ">
        <motion.div
          className="absolute left-9 top-0 w-[4px] h-full bg-black origin-top"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
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
