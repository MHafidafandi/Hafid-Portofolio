import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className=" flex justify-center items-center  mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 rounded-full bg-black text-white flex justify-center items-center text-xl font-bold border dark:border-white"
        whileHover={{
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        MHA
      </MotionLink>
    </div>
  );
};

export default Logo;
