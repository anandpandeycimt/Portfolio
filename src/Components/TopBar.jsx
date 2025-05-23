import { useLocation } from "react-router-dom";
import { HiMenuAlt2 } from "react-icons/hi";

const TopBar = ({ onMenuClick }) => {
  const location = useLocation();

  const getFormattedPath = () => {
    const segments = location.pathname
      .split("/")
      .filter(Boolean)
      .map((segment) => {
        if (!isNaN(segment)) return `Project${segment}`;
        return segment.charAt(0).toUpperCase() + segment.slice(1);
      });

    if (segments.length === 0) return "src / Home";
    return `src / ${segments.join(" / ")}`;
  };

  return (
    <div className="bg-gray-800 text-gray-300 text-sm px-4 py-2 border-b border-gray-700 font-mono flex items-center">
      <button 
        onClick={onMenuClick}
        className="md:hidden mr-3 text-gray-400 hover:text-white transition-colors"
      >
        <HiMenuAlt2 size={24} />
      </button>
      <span className="truncate">{getFormattedPath()}</span>
    </div>
  );
};

export default TopBar;