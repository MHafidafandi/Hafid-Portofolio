import { createContext, useEffect, useState } from "react";

export const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [isInvisible, setIsInvisible] = useState(true);

  const toggleNavbarInvisible = () => {
    setIsInvisible(!isInvisible);
  };
  const noActiveNavbarInvisible = () => {
    setIsInvisible(true);
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
    <NavbarContext.Provider
      value={{ isInvisible, toggleNavbarInvisible, noActiveNavbarInvisible }}
    >
      {children}
    </NavbarContext.Provider>
  );
};
