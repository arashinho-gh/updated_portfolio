import { Button, IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

interface NavBarProps {
  changeTheme: () => void;
  theme: string;
}

const NavBar = (props: NavBarProps) => {
  const { baseClassName } = NavBar.constants;
  const { theme, changeTheme } = props;

  const scrollToElement = (elm: string) => {
    const element = document.getElementsByClassName(elm);
    if (element.length > 0) {
      element[0].scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleReRoute = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={baseClassName}>
      <div className={`${baseClassName}-init`}>AG</div>
      <div className={`${baseClassName}-links`}>
        <Button
          variant="text"
          className={`${baseClassName}-links-button`}
          onClick={() => scrollToElement("projects")}
        >
          Projects
        </Button>
        <Button
          variant="text"
          className={`${baseClassName}-links-button`}
          onClick={() =>
            handleReRoute(
              "https://drive.google.com/drive/folders/1ie895UHlErR5QE9kzgl6CSGTQfeNOO-i?usp=drive_link"
            )
          }
        >
          Resume
        </Button>
        <Button
          variant="text"
          className={`${baseClassName}-links-button`}
          onClick={() => scrollToElement("contacts")}
        >
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
