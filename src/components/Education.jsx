import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
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
        <h3 className="capitalize font-bold text-2xl">{type}</h3>
        <span className="capitalize font-medium text-black/75">
          {time} | {place}
        </span>
        <p className="w-full font-medium ">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-center text-8xl w-full mb-32">Education</h2>

      <div ref={ref} className="w-[75%] mx-auto relative ">
        <motion.div
          className="absolute left-9 top-0 w-[4px] h-full bg-black origin-top"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="elementary school"
            time="2010-2016"
            place="Mi miftahul huda"
            info="Is an elementary school in my village and a school that educates my mindset and morals"
          />
          <Details
            type="junior higt school"
            time="2016-2019"
            place="SMPN 2 Kutorejo"
            info="a place where I slowly explored my youth and had a strong curiosity and made me grow in mindset and morals"
          />
          <Details
            type="Senior higt school"
            time="2019-2022"
            place="SMKN 1 Pungging"
            info="The place where I first got to know the field of informatics and I am interested in developing my knowledge and knowledge about informatics"
          />
          <Details
            type="bachelor of informatics engineering"
            time="2022-Present"
            place="Surabaya State University"
            info="A place where I develop my skills and knowledge about informatics engineering and a place to expand my friendship relations"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
