import React from "react";
import { headerClasses } from "../styles/tailwindClasses";
import moosePic from "../assets/moose-pic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Header = ({ scrollPosition }) => {
  const headerStyle = {
    backgroundColor:
      scrollPosition > 50 ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)",
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
    <header className={headerClasses.join(" ")} style={headerStyle}>
      <div
        className={`container mx-auto px-4 h-full transition-all duration-300 ease-in-out ${
          scrollPosition > 50 ? "py-4" : "pt-20 pb-2"
        }`}
      >
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center">
            <img
              src={moosePic}
              alt="Profile"
              className={`rounded-full transition-all duration-300 ease-in-out ${
                scrollPosition > 50 ? "w-10 h-10" : "w-24 h-24"
              }`}
            />
            <h1
              className={`font-bold text-left ml-4 transition-all duration-300 ease-in-out ${
                scrollPosition > 50 ? "text-4xl" : "text-6xl"
              }`}
            >
              Mohsin Ismail
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="mailto:youremail@example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} className={`${iconClass}`} />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className={`${iconClass}`} />
            </a>
            <a
              href="https://www.linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className={`${iconClass}`} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
