import React from "react";
import moosePic from "../assets/moose-pic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const MobileHeader = () => {
  const iconClass = "w-8 h-8 rounded-full border-2 border-gray-500 p-1";

  return (
    <header className="bg-white h-20">
      <div className="container mx-auto px-4 h-full py-4">
        <div className="flex flex-col items-center h-full">
          <div className="flex items-center mb-4">
            <img
              src={moosePic}
              alt="Profile"
              className="rounded-full w-16 h-16 mr-4"
            />
            <h1
              className="font-bold text-center leading-none text-4xl"
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
          <div className="flex flex-wrap justify-center items-center space-x-4">
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

export default MobileHeader;
