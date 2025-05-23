const fileStructure = [
  {
    type: "folder",
    name: "src",
    children: [
      { type: "file", name: "Home.jsx", path: "/Home" },
      { type: "file", name: "About.jsx", path: "/about" },
      {
        type: "folder",
        name: "projects",
        children: [
          { type: "file", name: "Project1.jsx", path: "/projects/1" },
          { type: "file", name: "Project2.jsx", path: "/projects/2" },
        ],
      },
      { type: "file", name: "Contact.jsx", path: "/contact" },
    ],
  },
];

export default fileStructure;
