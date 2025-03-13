import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import { IconButton } from "@mui/material";

interface ProjectProps {
  title: string;
  description: string;
  github_url?: string;
  img: string;
  skills: string[];
  link?: string;
}

const Projects = () => {
  const { baseClassName, projects } = Projects.constants;

  const openProjectLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const renderProject = (props: ProjectProps) => {
    const { title, description, github_url, img, skills, link } = props;
    return (
      <div className={`${baseClassName}-card`}>
        <div
          className={`${baseClassName}-card-img ${baseClassName}-card-img-${img}`}
        />
        <div className={`${baseClassName}-card-header`}>
          <div className={`${baseClassName}-card-title`}>{title}</div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {github_url ? (
              <IconButton
                sx={{ fontSize: "28px" }}
                onClick={() => openProjectLink(github_url)}
              >
                <GitHubIcon
                  className={`${baseClassName}-card-github`}
                  sx={{ fontSize: "28px" }}
                />
              </IconButton>
            ) : null}
            {link ? (
              <IconButton
                sx={{ fontSize: "28px" }}
                onClick={() => openProjectLink(link)}
              >
                <LinkIcon
                  className={`${baseClassName}-card-github`}
                  sx={{ fontSize: "28px" }}
                />
              </IconButton>
            ) : null}
          </div>
        </div>
        <div className={`${baseClassName}-card-desc`}>{description}</div>
        <div className={`${baseClassName}-card-skills`}>
          {skills.join(" - ")}
        </div>
      </div>
    );
  };

  return (
    <div className={baseClassName}>
      <div className={`${baseClassName}-title`}>Featured Projects</div>
      <div className={`${baseClassName}-cards`}>
        {projects.map((elm) => {
          return renderProject(elm);
        })}
      </div>
    </div>
  );
};

Projects.constants = {
  baseClassName: "projects",
  projects: [
    {
      title: "MISA Club Website",
      description:
        "Developed a multipage club website for the McMaster Iranian Student Association using React and AWS Lambda, featuring real-time messaging to engage 200 active members and 500+ alumni.",
      link: "https://arashinho-gh.github.io/portfolio/",
      img: "7",
      skills: ["TypeScript", "React", "Lambda", "SES", "AWS"],
    },
    {
      title: "Personal Portfolio",
      description:
        "An updated personal portfolio that is deployed with AWS cloud services.",
      github_url: "https://github.com/arashinho-gh/updated_portfolio",
      img: "1",
      skills: ["TypeScript", "React", "Node.js", "CSS", "AWS"],
    },
    {
      title: "Personal Portfolio 2",
      description:
        "A personal portfolio by using frameworks in react and differnt UI libraries.",
      github_url: "https://github.com/arashinho-gh/portfolio",
      link: "https://arashinho-gh.github.io/portfolio/",
      img: "2",
      skills: ["JavaScript", "React", "Node.js", "CSS"],
    },
    {
      title: "Carpooling Mobile App",
      description:
        "The backend server of an express.js application for a carpooling app that interacts with a NoSQL DB.",
      github_url: "https://github.com/arashinho-gh/backend_carpool",
      img: "3",
      skills: ["JavaScript", "Express", "MongoDB", "Node.js"],
    },
    {
      title: "Train Station Stimulator",
      description:
        "A train station stimulator that implements different graphing algorithms to find the shortest distances, and benchmarks those algorithm's performances.",
      github_url: "https://github.com/arashinho-gh/Train-Station",
      img: "4",
      skills: ["Python", "Algorithms & Data Structures"],
    },
    {
      title: "Python to Assembly Translator",
      description:
        "A Python program that convertes python language to its corresponding ARM64 translation.",
      github_url: "https://github.com/arashinho-gh/Assembly_language",
      img: "5",
      skills: ["Python", "Algorithms & Data Structures"],
    },
    {
      title: "Shoe Plugin",
      description:
        "A google plugin that will generate your corresponding shoe size for a specific brand based on a previous given shoe brand and size.",
      github_url: "https://github.com/arashinho-gh/Shoe-Plugin",
      img: "6",
      skills: ["JavaScript", "React", "CSS"],
    },
  ],
};

export default Projects;
