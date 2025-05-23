import { useLocation } from "react-router-dom";

const TopBar = () => {
  const location = useLocation();

  // Convert the pathname to something like: src > Pages > Projects > Project1
  const getFormattedPath = () => {
    const segments = location.pathname
      .split("/")
      .filter(Boolean) // remove empty segments
      .map((segment) => {
        if (!isNaN(segment)) return `Project${segment}`;
        return segment.charAt(0).toUpperCase() + segment.slice(1);
      });

    if (segments.length === 0) return "src / Home";

    // Add custom prefix like src/Pages
    return `src / ${segments.join(" / ")}`;
  };

  return (
    <div className="bg-gray-800 text-gray-300 text-sm px-4 py-2 border-b border-gray-700 font-mono">
      {getFormattedPath()}
    </div>
  );
};

export default TopBar;
