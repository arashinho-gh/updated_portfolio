import EastIcon from "@mui/icons-material/East";
import { Button } from "@mui/material";

const Header = () => {
  const { baseClassName, description } = Header.constants;

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
      <Button variant="text" className={`${baseClassName}-hello`}>
        Say hi <EastIcon sx={{ marginLeft: "10px" }} />
      </Button>
    </div>
  );
};

Header.constants = {
  baseClassName: "header",
  description:
    "I'm a dedicated and enthusiastic final-year Software Engineering student at McMaster University. My journey in the tech world has been a thrilling ride, enriching my skills across different areas like web development and data sciences. My technical toolkit includes a wide range of programming languages and frameworks, with proficiency in both front-end and back-end development. This diverse expertise enables me to tackle complex challenges and build seamless, efficient solutions.\n\nBelow, you’ll find highlights of my achievements that showcase my capabilities and reflect my commitment to excellence in the field of software engineering.",
};

export default Header;
