import React from "react";

const Projects = () => {
  const { baseClassName } = Projects.constants;
  return <div className={baseClassName}></div>;
};

Projects.constants = {
  baseClassName: "projects",
  projects: [
    {
      title: "Full Stack Developer (Hybrid)",
      date: "Sep 2023 - Current",
      location: "Mississauga",
      descriptions: ["a", "b", "c"],
    },
  ],
};

export default Projects;
