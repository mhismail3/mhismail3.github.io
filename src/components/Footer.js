import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-4">
      <div className="container mx-auto px-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Mohsin Ismail. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
