import React from "react";

const About = () => {
  return (
    <div className="text-white font-mono py-2">
      <h1 className="text-2xl text-[#00ffcc] mb-4 border-b border-gray-700 pb-2">
        👨‍💻 About Me
      </h1>

      <p className="text-gray-300 mb-6 leading-relaxed">
        Hey there! I'm <span className="text-[#00ffcc]">Anand Pandey</span>, a
        full-stack developer blending clean frontends with solid backend logic.
        This page reimagines developer portfolios with a code editor experience.
      </p>

      {/* Code Snippet: What I Do */}
      <div className="bg-[#1e1e1e] border border-gray-700 rounded-md mb-6 shadow-md">
        <div className="px-4 py-2 border-b border-gray-700 text-[#00ffcc] text-xs">
          whatIDo.js
        </div>
        <pre className="text-sm text-[#d4d4d4] p-4 overflow-auto">
          {`const whatIDo = {
  frontend: ["React", "Tailwind", "UI/UX"],
  backend: ["Node.js", "Express", "SQL/MongoDB"],
  tools: ["Git", "REST APIs", "Auth", "Automation"]
};`}
        </pre>
      </div>

      {/* Code Snippet: Skills */}
      <div className="bg-[#1e1e1e] border border-gray-700 rounded-md mb-6 shadow-md">
        <div className="px-4 py-2 border-b border-gray-700 text-[#00ffcc] text-xs">
          skills.json
        </div>
        <pre className="text-sm text-[#d4d4d4] p-4 overflow-auto">
          {`[
  "JavaScript", "TypeScript", "React", "Node.js",
  "Express", "MongoDB", "SQL", "Tailwind CSS",
  "Git", "REST APIs", "Authentication"
]`}
        </pre>
      </div>

      {/* Code Snippet: Connect */}
      <div className="bg-[#1e1e1e] border border-gray-700 rounded-md shadow-md">
        <div className="px-4 py-2 border-b border-gray-700 text-[#00ffcc] text-xs">
          connect.js
        </div>
        <pre className="text-sm text-[#d4d4d4] p-4">
          {`const contact = {
  email: "you@example.com",
  github: "https://github.com/yourusername",
  message: "Always open to collab or chat tech 🤝"
};`}
        </pre>
      </div>
    </div>
  );
};

export default About;
