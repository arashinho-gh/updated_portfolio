import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";

interface ProjectProps {
  title: string;
  description: string;
  github_url: string;
  img: string;
  skills: string[];
}

const Projects = () => {
  const { baseClassName, projects } = Projects.constants;

  const renderProject = (props: ProjectProps) => {
    const { title, description, github_url, img, skills } = props;
    return (
      <div className={`${baseClassName}-card`}>
        <div
          className={`${baseClassName}-card-img ${baseClassName}-card-img-${img}`}
        />
        <div className={`${baseClassName}-card-header`}>
          <div className={`${baseClassName}-card-title`}>{title}</div>
          <IconButton sx={{ fontSize: "28px" }}>
            <GitHubIcon
              className={`${baseClassName}-card-github`}
              sx={{ fontSize: "28px" }}
            />
          </IconButton>
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
      title: "Personal Portfolio",
      description:
        "Proxy provider website including authentication, dashboard and dynamic features.",
      github_url: "https://github.com/example",
      img: "1",
      skills: ["TypeScript", "React", "Node.js", "CSS"],
    },
    {
      title: "Personal Portfolio 2",
      description:
        "Proxy provider website including authentication, dashboard and dynamic features.",
      github_url: "https://github.com/example",
      img: "2",
      skills: ["JavaScript", "React", "Node.js", "CSS"],
    },
    {
      title: "Carpooling Mobile App",
      description:
        "Proxy provider website including authentication, dashboard and dynamic features.",
      github_url: "https://github.com/example",
      img: "3",
      skills: ["JavaScript", "Express", "MongoDB", "Node.js"],
    },
    {
      title: "Train Station Stimulator",
      description:
        "Proxy provider website including authentication, dashboard and dynamic features.",
      github_url: "https://github.com/example",
      img: "4",
      skills: ["Python", "Algorithms & Data Structures"],
    },
    {
      title: "Assembly Translator",
      description:
        "Proxy provider website including authentication, dashboard and dynamic features.",
      github_url: "https://github.com/example",
      img: "5",
      skills: ["Python", "Algorithms & Data Structures"],
    },
    {
      title: "Shoe Plugin",
      description:
        "Proxy provider website including authentication, dashboard and dynamic features.",
      github_url: "https://github.com/example",
      img: "6",
      skills: ["JavaScript", "React", "CSS"],
    },
  ],
};

export default Projects;
