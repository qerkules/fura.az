"use client";
import { useEffect, useState } from "react";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";
export default function ThemeSwitch() {
  const [togglETHeme, setTogglETHeme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("togglETHeme") || "";
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("togglETHeme", JSON.stringify("dark"));
    }
    document.body.classList.add("dark");
    return () => {
      document.body.classList.remove("dark");
    };
  }, [togglETHeme]);

  return (
    <>
      <nav
        className="switcher__tab"
        onClick={() =>
          togglETHeme === "" ? setTogglETHeme("dark") : setTogglETHeme("")
        }
      >
        <span className="switcher__btn light-mode">
          <LightModeIcon />
        </span>
        <span className="switcher__mode" />
        <span className="switcher__btn dark-mode">
          <ModeNightIcon />
        </span>
      </nav>
    </>
  );
}
