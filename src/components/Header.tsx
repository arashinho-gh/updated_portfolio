import React, { useState } from "react";
import EastIcon from "@mui/icons-material/East";
import { Button } from "@mui/material";

const Header = () => {
  const { baseClassName, description } = Header.constants;
  
  return (
    <div className={baseClassName}>
      Hey I'm
      <div className={`${baseClassName}-title`}>Arash Ghafoori</div>
      <div className={`${baseClassName}-desc`}>{description}</div>
      <Button variant="text" className={`${baseClassName}-hello`}>
        Say hi <EastIcon sx={{marginLeft: '10px'}}/>
      </Button>
    </div>
  );
};

Header.constants = {
  baseClassName: "header",
  description:
    "I'm a software engineer based in Toronto, Canada and also a communication and journalism student. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. I have been freelancing for a year now while studying at the university and I've manage to gain a decent amount of experience and valuable knowledge from all different kinds of fields throughout my projects/work.",
};

export default Header;
