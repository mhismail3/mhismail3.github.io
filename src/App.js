import React from "react";
import "./App.css";

function App() {
  return (
    <div className="bg-gray-100">
      {/* About Me */}
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-semibold mb-6">About Me</h1>
        <div className="prose">
          <p>Your about me content goes here...</p>
        </div>
      </section>

      {/* Projects */}
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-semibold mb-6">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Project Card */}
          <div className="bg-white shadow-md rounded-md p-4">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Project Thumbnail"
              className="w-full h-48 object-cover mb-4 rounded-md"
            />
            <h2 className="text-2xl font-semibold mb-2">Project 1</h2>
            <p className="text-gray-600">Project description goes here...</p>
            <a href="#" className="text-blue-600 mt-4 block">
              View Project
            </a>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </section>

      {/* Contact */}
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-semibold mb-6">Contact</h1>
        <div className="prose">
          <p>Your contact information or contact form goes here...</p>
        </div>
      </section>
    </div>
  );
}

export default App;
