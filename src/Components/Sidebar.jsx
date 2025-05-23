import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PiFileJsxBold } from "react-icons/pi";
import { FcOpenedFolder, FcFolder } from "react-icons/fc";
import { VscCollapseAll, VscExpandAll } from "react-icons/vsc";

const Sidebar = ({ structure }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openFolders, setOpenFolders] = useState({});

  const toggleFolder = (path) => {
    setOpenFolders((prev) => ({
      ...prev,
      [path]: !prev[path],
    }));
  };

  const toggleAllFolders = (shouldOpen) => {
    const newState = {};
    const processNode = (node, parentPath = "") => {
      if (node.type === "folder") {
        const fullPath = `${parentPath}/${node.name}`;
        newState[fullPath] = shouldOpen;
        node.children.forEach((child) => processNode(child, fullPath));
      }
    };
    structure.forEach((node) => processNode(node));
    setOpenFolders(newState);
  };

  const Folder = ({ node, parentPath = "", depth = 0 }) => {
    const fullPath = `${parentPath}/${node.name}`;
    const isOpen = openFolders[fullPath];

    return (
      <div>
        <div
          className="flex items-center px-2 py-1 hover:bg-[#2d2d2d] cursor-pointer group"
          onClick={() => toggleFolder(fullPath)}
          style={{ paddingLeft: `${depth * 12}px` }}
        >
          <span className="mr-1">
            {isOpen ? (
              <FcOpenedFolder className="w-4 h-4" />
            ) : (
              <FcFolder className="w-4 h-4" />
            )}
          </span>
          <span className="text-[#e1e1e1] text-sm">{node.name}</span>
        </div>
        {isOpen && (
          <div>
            {node.children.map((child, i) => (
              child.type === "folder" ? (
                <Folder
                  key={i}
                  node={child}
                  parentPath={fullPath}
                  depth={depth + 1}
                />
              ) : (
                <div
                  key={i}
                  className={`flex items-center px-2 py-1 cursor-pointer text-sm ${
                    child.path === location.pathname
                      ? "bg-[#37373d] text-white"
                      : "text-[#e1e1e1] hover:bg-[#2d2d2d]"
                  }`}
                  style={{ paddingLeft: `${(depth + 1) * 12}px` }}
                  onClick={() => navigate(child.path)}
                >
                  <PiFileJsxBold className="w-4 h-4 mr-1 text-[#519aba]" />
                  <span>{child.name}</span>
                </div>
              )
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-64 bg-[#252526] fixed left-0 top-0 h-screen border-r border-[#1e1e1e] flex flex-col">
      <div className="bg-[#333333] text-[#cccccc] text-xs px-4 py-2 flex justify-between items-center">
        <span>EXPLORER</span>
        <div className="flex space-x-2">
          <VscCollapseAll
            className="w-4 h-4 cursor-pointer hover:text-white"
            onClick={() => toggleAllFolders(false)}
          />
          <VscExpandAll
            className="w-4 h-4 cursor-pointer hover:text-white"
            onClick={() => toggleAllFolders(true)}
          />
        </div>
      </div>
      <div className="overflow-y-auto flex-1">
        {structure.map((node, i) => (
          <Folder key={i} node={node} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;