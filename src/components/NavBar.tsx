import { Button, IconButton } from "@mui/material";
import React, { useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

interface NavBarProps {
  changeTheme: () => void;
  theme: string;
}

const NavBar = (props: NavBarProps) => {
  const { baseClassName } = NavBar.constants;
  const { theme, changeTheme } = props;

  return (
    <div className={baseClassName}>
      <div className={`${baseClassName}-init`}>AG</div>
      <div className={`${baseClassName}-links`}>
        <Button variant="text" className={`${baseClassName}-links-button`}>
          Projects
        </Button>
        <Button variant="text" className={`${baseClassName}-links-button`}>
          Resume
        </Button>
        <Button variant="text" className={`${baseClassName}-links-button`}>
          Contact
        </Button>
        <IconButton onClick={changeTheme}>
          {theme === "light" ? (
            <LightModeIcon sx={{ color: "black", fontSize: "20px" }} />
          ) : (
            <DarkModeIcon sx={{ color: "white", fontSize: "20px" }} />
          )}
        </IconButton>
      </div>
    </div>
  );
};

NavBar.constants = {
  baseClassName: "nav-bar",
};

export default NavBar;
