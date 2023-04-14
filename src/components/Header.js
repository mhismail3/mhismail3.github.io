import React from "react";
import { headerClasses } from "../styles/tailwindClasses";
import moosePic from "../assets/moose-pic.png";
import SocialIcons from "./SocialIcons";

const Header = ({ scrollPosition }) => {
  const headerStyle = {
    backgroundColor:
      scrollPosition > 50 ? "rgba(230, 230, 230, 1)" : "rgba(255, 255, 255, 0)",
    boxShadow:
      scrollPosition > 50
        ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
        : "none",
    height: scrollPosition > 50 ? "4rem" : "5rem",
  };

  const iconClass = `w-8 h-8 rounded-full border-2 border-gray-500 p-1 ${
    scrollPosition > 50 ? "w-6 h-6 text-sm" : "w-8 h-8 text-base"
  } transition-all duration-300 ease-in-out`;

  return (
    <header
      className={`${headerClasses.join(" ")} min-h-[9rem] md:min-h-[5rem]`}
      style={headerStyle}
    >
      <div
        className={`container mx-auto px-4 h-full transition-all duration-300 ease-in-out ${
          scrollPosition > 50 ? "py-4 md:py-0" : "pt-6 md:pt-20 pb-2"
        } ${scrollPosition > 50 ? "md:pb-0" : ""}`}
      >
        <div className="flex flex-col items-center md:flex-row justify-between h-full">
          <div className="flex items-center flex-col md:flex-row mb-4 md:mb-0">
            <div className="flex items-center">
              <img
                src={moosePic}
                alt="Profile"
                className={`rounded-full transition-all duration-300 ease-in-out mr-4 md:mr-0 ${
                  scrollPosition > 50
                    ? "w-14 h-14"
                    : "w-16 h-16 md:w-24 md:h-24"
                }`}
              />
              <h1
                className={`font-bold text-center md:text-left ml-0 md:ml-4 transition-all duration-300 ease-in-out leading-none ${
                  scrollPosition > 50 ? "text-4xl" : "text-6xl"
                }`}
                style={{
                  fontSize: `min(3.5rem, 10vw)`,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                Mohsin Ismail
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap justify-center md:flex-nowrap md:justify-start items-center space-x-4">
            <SocialIcons iconClass={iconClass} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
