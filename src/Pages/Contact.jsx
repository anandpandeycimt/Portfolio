import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <div className="text-white font-mono animate-fade-in">
      <div className="space-y-4 mb-8">
        <h1 className="text-2xl text-[#00ffcc] mb-4 border-b border-gray-700 pb-2 animate-typing">
          📬 Contact Me
        </h1>

        <p className="text-gray-300 leading-relaxed">
          Whether you're interested in collaborating, have a question about
          something I've built, or just want to say hi — my inbox is always open.
        </p>
      </div>

      <div className="bg-[#1e1e1e] border border-gray-700 rounded-lg shadow-lg p-6 max-w-lg transform hover:scale-[1.01] transition-all duration-300 glow">
        <div className="space-y-4">
          <div>
            <label className="block text-[#00ffcc] text-sm mb-1" htmlFor="name">
              name:
            </label>
            <input
              className="w-full p-2 rounded bg-[#2d2d2d] border border-gray-700 text-white outline-none focus:border-[#00ffcc] transition-colors duration-200"
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="your.name"
            />
          </div>

          <div>
            <label className="block text-[#00ffcc] text-sm mb-1" htmlFor="email">
              email:
            </label>
            <input
              className="w-full p-2 rounded bg-[#2d2d2d] border border-gray-700 text-white outline-none focus:border-[#00ffcc] transition-colors duration-200"
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-[#00ffcc] text-sm mb-1" htmlFor="message">
              message:
            </label>
            <textarea
              className="w-full p-2 rounded bg-[#2d2d2d] border border-gray-700 text-white outline-none focus:border-[#00ffcc] transition-colors duration-200 resize-none"
              id="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="// Type your message here..."
            ></textarea>
          </div>

          <button className="w-full bg-[#00ffcc] text-black px-4 py-2 rounded font-bold hover:bg-[#00ddb3] transition-colors duration-200 glow">
            Send Message →
          </button>
        </div>
      </div>

      <div className="mt-6 p-4 bg-[#2d2d2d] rounded-lg border border-gray-700">
        <code className="text-gray-400">
          // Direct email: <span className="text-[#00ffcc]">you@example.com</span>
        </code>
      </div>
    </div>
  );
};

export default Contact;