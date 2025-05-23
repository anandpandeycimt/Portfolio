import React from "react";

const About = () => {
  return (
    <div className="text-white font-mono py-2 space-y-8 animate-fade-in">
      <div className="space-y-4">
        <h1 className="text-2xl text-[#00ffcc] mb-4 border-b border-gray-700 pb-2 animate-typing">
          👨‍💻 About Me
        </h1>

        <p className="text-gray-300 leading-relaxed">
          Hey there! I'm <span className="text-[#00ffcc]">Anand Pandey</span>, a
          full-stack developer blending clean frontends with solid backend logic.
          This page reimagines developer portfolios with a code editor experience.
        </p>
      </div>

      {/* Code Snippet: What I Do */}
      <div className="bg-[#1e1e1e] border border-gray-700 rounded-lg shadow-lg transform hover:scale-[1.02] transition-all duration-300 glow">
        <div className="px-4 py-2 border-b border-gray-700 bg-[#252526] flex items-center">
          <div className="flex space-x-2 mr-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-[#00ffcc] text-xs">whatIDo.js</span>
        </div>
        <pre className="text-sm text-[#d4d4d4] p-4 overflow-auto">
          <code className="language-javascript">{`const whatIDo = {
  frontend: ["React", "Tailwind", "UI/UX"],
  backend: ["Node.js", "Express", "SQL/MongoDB"],
  tools: ["Git", "REST APIs", "Auth", "Automation"]
};`}</code>
        </pre>
      </div>

      {/* Code Snippet: Skills */}
      <div className="bg-[#1e1e1e] border border-gray-700 rounded-lg shadow-lg transform hover:scale-[1.02] transition-all duration-300 glow">
        <div className="px-4 py-2 border-b border-gray-700 bg-[#252526] flex items-center">
          <div className="flex space-x-2 mr-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-[#00ffcc] text-xs">skills.json</span>
        </div>
        <pre className="text-sm text-[#d4d4d4] p-4 overflow-auto">
          <code className="language-json">{`[
  "JavaScript", "TypeScript", "React", "Node.js",
  "Express", "MongoDB", "SQL", "Tailwind CSS",
  "Git", "REST APIs", "Authentication"
]`}</code>
        </pre>
      </div>

      {/* Code Snippet: Connect */}
      <div className="bg-[#1e1e1e] border border-gray-700 rounded-lg shadow-lg transform hover:scale-[1.02] transition-all duration-300 glow">
        <div className="px-4 py-2 border-b border-gray-700 bg-[#252526] flex items-center">
          <div className="flex space-x-2 mr-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-[#00ffcc] text-xs">connect.js</span>
        </div>
        <pre className="text-sm text-[#d4d4d4] p-4">
          <code className="language-javascript">{`const contact = {
  email: "you@example.com",
  github: "https://github.com/yourusername",
  message: "Always open to collab or chat tech 🤝"
};`}</code>
        </pre>
      </div>
    </div>
  );
};

export default About;