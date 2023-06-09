import { motion } from "framer-motion";
import React from "react";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-black text-white py-3 px-6 shadow-black cursor-pointer absolute"
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
      <h2 className="font-bold text-center text-8xl w-full mt-64">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-black text-white p-8 shadow-black cursor-pointer"
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
      </div>
    </>
  );
};

export default Skils;
