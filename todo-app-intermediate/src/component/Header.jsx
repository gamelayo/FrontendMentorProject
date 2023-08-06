import React, { useContext } from "react";
import moonIcon from "../assets/icon-moon.svg";
import sunIcon from "../assets/icon-sun.svg";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="flex justify-between items-center">
      <h1 className="text-white relative font-bold tracking-widest text-2xl">
        TODO
      </h1>

      <div className="cursor-pointer">
        {theme === "dark" ? (
          <img
            src={sunIcon}
            alt=""
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          />
        ) : (
          <img
            src={moonIcon}
            alt=""
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
