import { Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contacts = () => {
  const { baseClassName } = Contacts.constants;
  return (
    <div className={baseClassName}>
      <div className={`${baseClassName}-title`}>Contacts</div>
      <div className={`${baseClassName}-links`}>
        <Button variant="outlined" className={`${baseClassName}-button`}>
          <EmailIcon className={`${baseClassName}-button-icon`} />
          Email
        </Button>
        <Button variant="outlined" className={`${baseClassName}-button`}>
          <LinkedInIcon className={`${baseClassName}-button-icon`} />
          Linkedin
        </Button>
        <Button variant="outlined" className={`${baseClassName}-button`}>
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
