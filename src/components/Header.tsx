import React from "react";

const Header = () => {
  const { baseClassName } = Header.constants;
  return <div className={baseClassName}></div>;
};

Header.constants = {
  baseClassName: "header",
};

export default Header;
