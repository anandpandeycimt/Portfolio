import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  const goToProject = () => {
    navigate("/projects/1", {
      state: { openFolder: "Projects", focusPath: "/projects/1" },
    });
  };
  return (
    <div className="pt-24 flex items-center justify-center bg-[#040714] text-white px-6">
      <div className="max-w-2xl w-full">
        {/* Intro Block */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#00ffcc] tracking-tight">
          Hi, I'm [Anand Pandey]
        </h1>
        <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
          I’m a developer who loves building clean interfaces and performant web
          apps. I work with JavaScript, React, Node.js, and I enjoy crafting
          tools that feel like code editors.
        </p>

        {/* Terminal-style block */}
        <div className="mt-8 border border-gray-700 rounded p-4 bg-[#0b0f1c]">
          <p className="text-green-400">~/portfolio →</p>
          <p className="mt-2 text-gray-300">
            Passionate about minimal UI, intuitive UX, and expressive code.
          </p>
        </div>

        {/* Links */}
        <div className="mt-6 flex space-x-4">
          <button
            onClick={goToProject}
            className="text-[#00ffcc] underline underline-offset-4 hover:text-white transition"
          >
            View Projects
          </button>
          <a
            href="#contact"
            className="text-[#00ffcc] underline underline-offset-4 hover:text-white transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
