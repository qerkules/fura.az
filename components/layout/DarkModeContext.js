"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { setCookie, getCookie } from "cookies-next";

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = getCookie("theme");
    if (savedTheme) {
      if (savedTheme === "dark") {
        setIsDarkMode(true);
        document.body.classList.add("dark");
      } else if (savedTheme === "light") {
        document.body.classList.remove("dark");
      }
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    setCookie("theme", newMode ? "dark" : "light");
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkModeContext);
