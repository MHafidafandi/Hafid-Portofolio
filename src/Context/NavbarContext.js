import { createContext, useEffect, useState } from "react";

export const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [isInvisible, setIsInvisible] = useState(true);

  const toggleNavbarInvisible = () => {
    setIsInvisible(!isInvisible);
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsInvisible(true);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <NavbarContext.Provider value={{ isInvisible, toggleNavbarInvisible }}>
      {children}
    </NavbarContext.Provider>
  );
};
