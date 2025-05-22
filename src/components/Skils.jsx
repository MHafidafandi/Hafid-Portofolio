import { motion } from "framer-motion";
import React from "react";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-black text-white py-3 px-6 shadow-black cursor-pointer absolute dark:bg-white dark:text-black lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-black xs:dark:text-white xs:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x, y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skils = () => {
  return (
    <>
      <h2 className="font-bold text-center text-8xl w-full mt-64 md:text-6xl md:pt-32">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightsSm sm:dark:bg-circularDarkSm">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-black text-white p-8 shadow-black cursor-pointer dark:bg-white dark:text-black lg:p-6 md:p-4 xs:text-xs xs:p-2 "
          whileHover={{ scale: 1.05 }}
        >
          WEB
        </motion.div>
        <Skill name="CSS" x="8vw" y="-10vw" />
        <Skill name="HTML" x="-19vw" y="-2vw" />
        <Skill name="ExpressJs" x="-2vw" y="11vw" />
        <Skill name="ReactJs" x="10vw" y="-18vw" />
        <Skill name="NextJs" x="25vw" y="3vw" />
        <Skill name="Javascript" x="-18vw" y="-20vw" />
        <Skill name="PHP" x="-10vw" y="22vw" />
        <Skill name="Laravel" x="36vw" y="-8vw" />
        <Skill name="Tailwind CSS" x="-35vw" y="10vw" />
        <Skill name="Bootstrap" x="18vw" y="15vw" />
        <Skill name="Github" x="-28vw" y="-10vw" />
        <Skill name="Golang" x="-15vw" y="-13vw" />
        <Skill name="Jenkins" x="10vw" y="10vw" />
        <Skill name="Docker" x="-28vw" y="16vw" />
        <Skill name="Cloud Computing" x="30vw" y="16vw" />
        <Skill name="CI/CD" x="20vw" y="-10vw" />
      </div>
    </>
  );
};

export default Skils;
