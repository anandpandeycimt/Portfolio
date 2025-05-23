import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-typing');
          }
        });
      },
      { threshold: 0.5 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const goToProject = () => {
    navigate("/projects/1");
  };

  return (
    <div className="pt-24 flex items-center justify-center bg-transparent text-white px-6">
      <div className="max-w-2xl w-full space-y-8">
        <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h1 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-4 text-[#00ffcc] tracking-tight animate-typing">
            Hi, I'm [Anand Pandey]
          </h1>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
            I'm a developer who loves building clean interfaces and performant web
            apps. I work with JavaScript, React, Node.js, and I enjoy crafting
            tools that feel like code editors.
          </p>
        </div>

        <div className="mt-8 border border-gray-700 rounded-lg p-6 bg-[#0b0f1c] transform hover:scale-[1.02] transition-transform duration-300 animate-fade-in glow" style={{ animationDelay: '0.4s' }}>
          <p className="text-green-400 font-bold">~/portfolio →</p>
          <p className="mt-2 text-gray-300">
            Passionate about minimal UI, intuitive UX, and expressive code.
          </p>
        </div>

        <div className="mt-6 flex space-x-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <button
            onClick={goToProject}
            className="px-6 py-3 bg-[#00ffcc] text-black rounded-lg font-bold hover:bg-[#00ddb3] transition-colors duration-300 glow"
          >
            View Projects
          </button>
          <a
            href="#contact"
            className="px-6 py-3 border-2 border-[#00ffcc] text-[#00ffcc] rounded-lg font-bold hover:bg-[#00ffcc20] transition-colors duration-300 glow"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;