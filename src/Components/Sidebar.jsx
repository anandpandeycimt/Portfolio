import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PiFileJsxBold } from "react-icons/pi";
import { FcOpenedFolder, FcFolder } from "react-icons/fc";

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

  const Folder = ({ node, parentPath = "", depth = 0, isLast = false }) => {
    const fullPath = `${parentPath}/${node.name}`;
    const prefix = isLast ? "└─" : "├──";

    return (
      <div className="ml-2">
        <div
          className="cursor-pointer hover:bg-gray-800 flex items-center px-2 py-1"
          onClick={() => toggleFolder(fullPath)}
          style={{ paddingLeft: `${depth * 20}px` }}
        >
          <span className="text-gray-500 mr-1">{prefix}</span>
          <span>
            {openFolders[fullPath] ? (
              <FcOpenedFolder size={22} />
            ) : (
              <FcFolder size={22} />
            )}
          </span>
          <span className="ml-2">{node.name}</span>
        </div>
        {openFolders[fullPath] &&
          node.children.map((child, i) => {
            const last = i === node.children.length - 1;
            const childPrefix = last ? "└──" : "├──";
            return child.type === "folder" ? (
              <Folder
                key={i}
                node={child}
                parentPath={fullPath}
                depth={depth + 1}
                isLast={last}
              />
            ) : (
              <div
                key={i}
                className={`cursor-pointer px-6 py-2 text-sm flex items-center gap-2 ${
                  child.path === location.pathname
                    ? "bg-gray-700 text-[#00ffcc]"
                    : "hover:bg-gray-600 text-white"
                }`}
                style={{ paddingLeft: `${(depth + 1) * 20}px` }}
                onClick={() => navigate(child.path)}
              >
                <span className="text-gray-500">{childPrefix}</span>
                <span>
                  <PiFileJsxBold size={18} />
                </span>
                <span className="ml-1">{child.name}</span>
              </div>
            );
          })}
      </div>
    );
  };

  return (
    <div className="w-64 bg-gray-900 text-gray-200 font-mono fixed left-0 top-0 h-screen border-r border-gray-700">
      <div className="bg-gray-800 text-gray-400 text-sm px-4 py-2 border-b border-gray-700">
        WORKSPACE
      </div>
      <div className="py-2">
        {structure.map((node, i) => {
          const last = i === structure.length - 1;
          return node.type === "folder" ? (
            <Folder key={i} node={node} isLast={last} />
          ) : (
            <div
              key={i}
              className={`cursor-pointer hover:bg-gray-800 flex items-center px-2 py-1 ${
                node.path === location.pathname
                  ? "bg-gray-700 text-[#00ffcc]"
                  : "text-white"
              }`}
              onClick={() => navigate(node.path)}
            >
              <span className="text-gray-500 mr-1">{last ? "└──" : "├──"}</span>
              <span>
                <PiFileJsxBold />
              </span>
              <span className="ml-2">{node.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
