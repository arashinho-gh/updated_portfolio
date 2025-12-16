import EastIcon from "@mui/icons-material/East";
import { Button } from "@mui/material";

const Header = () => {
  const { baseClassName, description } = Header.constants;

  const scrollToElement = (elm: string) => {
    const element = document.getElementsByClassName(elm);
    if (element.length > 0) {
      element[0].scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className={baseClassName}>
      Hey I'm
      <div className={`${baseClassName}-title`}>Arash Ghafoori</div>
      <div
        className={`${baseClassName}-desc`}
        style={{ whiteSpace: "pre-wrap" }}
      >
        {description}
      </div>
      <Button
        variant="text"
        className={`${baseClassName}-hello`}
        onClick={() => scrollToElement("contacts")}
      >
        Say hi <EastIcon sx={{ marginLeft: "10px" }} />
      </Button>
    </div>
  );
};

Header.constants = {
  baseClassName: "header",
  description:
    "I’m a Software Engineering graduate from McMaster University with experience working on production systems at companies like Dayforce and EllisDon. I’ve spent my time building and maintaining backend services, improving existing systems, and contributing to features that are used by real teams and users.\nI’ve worked across different stacks and environments, from modern web applications to internal tools and backend services, using technologies like C#, Java, TypeScript, SQL, and cloud services. I enjoy understanding how systems work end-to-end, fixing things that aren’t quite right, and writing code that’s clear, reliable, and easy for others to work with.\n\nBelow are a few highlights from my experience and projects that reflect how I approach software engineering.",
};

export default Header;
