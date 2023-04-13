import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="container mx-auto px-4 py-12 bg-gray-100">
      <h1 className="text-4xl font-semibold mb-6">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};

export default Projects;
