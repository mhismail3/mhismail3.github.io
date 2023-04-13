import React from "react";
import { headerClasses } from "../styles/tailwindClasses";

const Header = ({ scrollPosition }) => {
  const headerStyle = {
    backgroundColor:
      scrollPosition > 50 ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)",
    boxShadow:
      scrollPosition > 50
        ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
        : "none",
    height: scrollPosition > 50 ? "3rem" : "5rem",
  };

  return (
    <header className={headerClasses.join(" ")} style={headerStyle}>
      <div className="container mx-auto px-4 py-2 h-full">
        <h1
          className={`font-bold text-left transition-all duration-300 ease-in-out ${
            scrollPosition > 50 ? "text-4xl mt-0" : "text-6xl mt-6"
          }`}
        >
          Mohsin Ismail
        </h1>
      </div>
    </header>
  );
};

export default Header;
