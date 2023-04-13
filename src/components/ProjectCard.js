import React from "react";

const ProjectCard = () => {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <img
        src="https://via.placeholder.com/300x200"
        alt="Project Thumbnail"
        className="w-full h-48 object-cover mb-4 rounded-md"
      />
      <h2 className="text-2xl font-semibold mb-2">Project 1</h2>
      <p className="text-gray-600">Project description goes here...</p>
      <a href="/" className="text-blue-600 mt-4 block">
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
