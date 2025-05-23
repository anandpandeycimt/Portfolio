import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PiFileJsxBold } from "react-icons/pi";
import { FcOpenedFolder, FcFolder } from "react-icons/fc";
import { VscCollapseAll, VscExpandAll } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";

const Sidebar = ({ structure, isOpen, onClose }) => {
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
                  onClick={() => {
                    navigate(child.path);
                    if (window.innerWidth < 768) {
                      onClose();
                    }
                  }}
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
    <>
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      <div className={`w-64 bg-[#252526] fixed left-0 top-0 h-screen border-r border-[#1e1e1e] flex flex-col z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}>
        <div className="bg-[#333333] text-[#cccccc] text-xs px-4 py-2 flex justify-between items-center">
          <span>EXPLORER</span>
          <div className="flex space-x-2">
            <button className="md:hidden text-gray-400 hover:text-white" onClick={onClose}>
              <IoMdClose size={20} />
            </button>
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
    </>
  );
};

export default Sidebar;