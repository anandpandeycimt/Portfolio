import React, { useState } from 'react';
import Editor from "@monaco-editor/react";

const CodeEditor = ({ language, theme = "vs-dark", value, onChange }) => {
  const [isEditorReady, setIsEditorReady] = useState(false);

  const handleEditorDidMount = () => {
    setIsEditorReady(true);
  };

  const options = {
    selectOnLineNumbers: true,
    roundedSelection: false,
    readOnly: false,
    cursorStyle: "line",
    automaticLayout: true,
    minimap: {
      enabled: true
    },
    folding: true,
    lineNumbers: "on",
    wordWrap: "on",
    fontSize: 14,
    scrollBeyondLastLine: false,
    renderWhitespace: "selection",
  };

  return (
    <div className="w-full h-full min-h-[300px] rounded-lg overflow-hidden border border-gray-700">
      <Editor
        height="100%"
        language={language}
        theme={theme}
        value={value}
        options={options}
        onChange={onChange}
        onMount={handleEditorDidMount}
        loading={
          <div className="flex items-center justify-center h-full bg-[#1e1e1e] text-gray-400">
            Loading editor...
          </div>
        }
      />
    </div>
  );
};

export default CodeEditor;