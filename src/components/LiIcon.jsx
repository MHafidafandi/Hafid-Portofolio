import { motion, useScroll } from "framer-motion";
import React from "react";

const LiIcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });
  return (
    <figure className="absolute left-0 stroke-black">
      <svg
        className="-rotate-90"
        id="progress"
        width="75"
        height="75"
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r="20"
          className="stroke-orange-500 stroke-1 fill-none"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="20"
          className="stroke-[5px] fill-white"
          style={{ pathLength: scrollYProgress }}
        />
        <circle
          cx="50"
          cy="50"
          r="10"
          className="stroke-1 fill-orange-500 animate-pulse"
        />
      </svg>
    </figure>
  );
};

export default LiIcon;
