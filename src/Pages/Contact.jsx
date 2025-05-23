import React from "react";

const Contact = () => {
  return (
    <div className="text-white font-mono">
      <h1 className="text-2xl text-[#00ffcc] mb-4 border-b border-gray-700 pb-2">
        📬 Contact Me
      </h1>

      <p className="text-gray-300 mb-6 leading-relaxed">
        Whether you're interested in collaborating, have a question about
        something I've built, or just want to say hi — my inbox is always open.
      </p>

      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-md max-w-lg">
        <div className="mb-4">
          <label className="block text-gray-400 text-sm mb-1" htmlFor="name">
            Name
          </label>
          <input
            className="w-full p-2 rounded bg-gray-900 border border-gray-700 text-white outline-none focus:border-[#00ffcc]"
            type="text"
            id="name"
            placeholder="Your name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-400 text-sm mb-1" htmlFor="email">
            Email
          </label>
          <input
            className="w-full p-2 rounded bg-gray-900 border border-gray-700 text-white outline-none focus:border-[#00ffcc]"
            type="email"
            id="email"
            placeholder="you@example.com"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-400 text-sm mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full p-2 rounded bg-gray-900 border border-gray-700 text-white outline-none focus:border-[#00ffcc] resize-none"
            id="message"
            rows="4"
            placeholder="What's on your mind?"
          ></textarea>
        </div>

        <button className="bg-[#00ffcc] text-black px-4 py-2 rounded hover:bg-[#00ddb3] transition-colors duration-200 font-bold">
          Send Message
        </button>
      </div>

      <div className="mt-6 text-gray-400">
        Or reach out directly at:{" "}
        <span className="text-[#00ffcc]">you@example.com</span>
      </div>
    </div>
  );
};

export default Contact;
