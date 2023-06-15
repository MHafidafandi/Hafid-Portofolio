import { NavbarContext } from "@/Context/NavbarContext";
import React, { useContext } from "react";

const Layout = ({ children, className = "" }) => {
  const { isInvisible } = useContext(NavbarContext);
  const { toggleNavbarInvisible } = useContext(NavbarContext);

  const handleVisible = () => {
    toggleNavbarInvisible();
  };
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-white p-32 xl:p-24 lg:p-16 md:p-12 sm:p-8 ${className} dark:bg-black ${
        isInvisible ? "blur-none" : "blur-2xl"
      }`}
      onClick={handleVisible}
    >
      {children}
    </div>
  );
};

export default Layout;
