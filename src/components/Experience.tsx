import React from "react";

const Experience = () => {
  const { baseClassName } = Experience.constants;
  return (
    <div className={baseClassName}>
      <div className={`${baseClassName}-links`}></div>
    </div>
  );
};

Experience.constants = {
  baseClassName: "experience",
};

export default Experience;
