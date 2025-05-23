import React, { useState } from "react";
import CodeEditor from "../../Components/CodeEditor";

const Project1 = () => {
  const [code, setCode] = useState(`function greeting(name) {
  return \`Hello, \${name}!\`;
}

// Try editing this code!
console.log(greeting('Developer'));`);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-4">
        <h1 className="text-2xl text-[#00ffcc] mb-4 border-b border-gray-700 pb-2">
          Interactive Code Editor
        </h1>
        <p className="text-gray-300">
          This is a fully functional code editor with syntax highlighting, 
          auto-completion, and real-time error checking.
        </p>
      </div>

      <div className="h-[500px] w-full">
        <CodeEditor
          language="javascript"
          value={code}
          onChange={(value) => setCode(value)}
        />
      </div>

      <div className="flex flex-wrap gap-4 mt-4">
        <button
          onClick={() => setCode("")}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          Clear Editor
        </button>
        <button
          onClick={() => setCode(code)}
          className="px-4 py-2 bg-[#00ffcc] text-black rounded hover:bg-[#00ddb3] transition-colors"
        >
          Reset Code
        </button>
      </div>
    </div>
  );
};

export default Project1;