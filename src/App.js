import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import fileStructure from "./Data/fileStructure";
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Project1 from "./Pages/Projects/Project1";
import Project2 from "./Pages/Projects/Project2";
import Contact from "./Pages/Contact";
import TopBar from "./Components/TopBar";
import BottomBar from "./Components/BottomBar";

function App() {
  return (
    <Router>
      <div className="noise" />
      <div className="gradient-bg" />
      <Sidebar structure={fileStructure} />
      <div className="ml-64 h-screen overflow-hidden flex flex-col">
        <div className="sticky top-0 z-50 bg-[#1e1e1e] border-b border-gray-700">
          <TopBar />
        </div>

        <div className="flex-1 overflow-y-auto p-4 animate-fade-in">
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects/1" element={<Project1 />} />
            <Route path="/projects/2" element={<Project2 />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <div className="sticky bottom-0 z-50">
          <BottomBar />
        </div>
      </div>
    </Router>
  );
}

export default App;