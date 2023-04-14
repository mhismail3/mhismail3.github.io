import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const SocialIcons = ({ iconClass }) => {
  return (
    <>
      <a
        href="mailto:mhismail3@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faEnvelope} className={`${iconClass}`} />
      </a>
      <a
        href="https://github.com/mhismail3"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} className={`${iconClass}`} />
      </a>
      <a
        href="https://www.linkedin.com/in/mhismail3"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} className={`${iconClass}`} />
      </a>
    </>
  );
};

export default SocialIcons;
