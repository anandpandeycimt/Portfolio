// src/Components/BottomBar.jsx
import React from "react";

const BottomBar = () => {
  return (
    <div className="h-8 px-4 flex items-center justify-between text-xs text-gray-300 bg-gray-800 border-t border-gray-700">
      <div className="flex space-x-4">
        <span>Ln 10, Col 5</span>
        <span>Spaces: 2</span>
        <span>UTF-8</span>
        <span>LF</span>
      </div>
      <div className="flex space-x-4">
        <span className="text-[#00ffcc]">JavaScript XML</span>
      </div>
    </div>
  );
};

export default BottomBar;
