import React from "react";
import moosePic from "../assets/moose-pic.png";
import SocialIcons from "./SocialIcons";

const MobileHeader = () => {
  const iconClass = "w-6 h-6 rounded-full border-2 border-gray-500 p-1";

  return (
    <header className="bg-white h-24 border-b shadow-md">
      <div className="container mx-auto px-4 h-full py-4">
        <div className="flex flex-row items-center justify-between">
          <div className="flex items-center min-w-[40%]">
            <img
              src={moosePic}
              alt="Profile"
              className="rounded-full w-16 h-16 mr-2"
            />
            <h1
              className="font-bold text-center leading-none text-4xl"
              style={{
                fontSize: `clamp(1rem, 6vw, 2.5rem)`,
              }}
            >
              Mohsin Ismail
            </h1>
          </div>
          <div className="flex items-center space-x-4 min-w-[30%]">
            <SocialIcons iconClass={iconClass} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
