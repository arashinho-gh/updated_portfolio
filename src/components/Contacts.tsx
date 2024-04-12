import { Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";

const Contacts = () => {
  const { baseClassName } = Contacts.constants;

  const handleSendEmail = () => {
    const email = "arashinhoghafoori@gmail.com";
    const mailtoLink = `mailto:${email}`;
    window.open(mailtoLink, "_blank");
  };

  const handleReRoute = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={baseClassName}>
      <div className={`${baseClassName}-title`}>Contacts</div>
      <div className={`${baseClassName}-links`}>
        <Button
          variant="outlined"
          className={`${baseClassName}-button`}
          onClick={handleSendEmail}
        >
          <EmailIcon className={`${baseClassName}-button-icon`} />
          Email
        </Button>
        <Button
          variant="outlined"
          className={`${baseClassName}-button`}
          onClick={() =>
            handleReRoute("https://www.linkedin.com/in/arashghafoori/")
          }
        >
          <LinkedInIcon className={`${baseClassName}-button-icon`} />
          Linkedin
        </Button>
        <Button
          variant="outlined"
          className={`${baseClassName}-button`}
          onClick={() => handleReRoute("https://github.com/arashinho-gh")}
        >
          <GitHubIcon className={`${baseClassName}-button-icon`} />
          Github
        </Button>
      </div>
    </div>
  );
};

Contacts.constants = {
  baseClassName: "contacts",
};

export default Contacts;
