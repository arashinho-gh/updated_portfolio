import { useEffect, useRef } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { IconButton } from "@mui/material";

interface Project {
  title: string;
  description: string;
  github_url?: string;
  link?: string;
  img: string;
  skills: string[];
}

const PROJECTS: Project[] = [
  {
    title: "Course Companion",
    description:
      "Co-founded a university-exclusive AI study platform offering 24/7 course-specific support. Students chat with an LLM grounded on course materials via Pinecone vector search, while professors manage and customize model training for their courses.",
    github_url: "https://github.com/arashinho-gh/course-companion",
    img: "cc",
    skills: ["TypeScript", "Java", "React", "LangChain", "Pinecone", "Docker", "AWS"],
  },
  {
    title: "MISA Club Website",
    description:
      "Singlehandedly designed and built a multipage club website for the McMaster Iranian Student Association — featuring a real-time newsletter subscription service for 200 active members and 500+ alumni.",
    link: "https://mcmasteriranians.com/",
    img: "7",
    skills: ["TypeScript", "React", "AWS Lambda", "SES", "AWS"],
  },
  {
    title: "Carpooling Mobile App",
    description:
      "Backend server for a carpooling application — RESTful API built with Express.js interacting with a NoSQL database for real-time ride matching.",
    github_url: "https://github.com/arashinho-gh/backend_carpool",
    img: "3",
    skills: ["JavaScript", "Express.js", "MongoDB", "Node.js"],
  },
  {
    title: "Train Station Simulator",
    description:
      "Graph-based train station simulator implementing Dijkstra, BFS, and DFS to find shortest paths — with benchmarks comparing algorithm performance.",
    github_url: "https://github.com/arashinho-gh/Train-Station",
    img: "4",
    skills: ["Python", "Algorithms", "Data Structures"],
  },
  {
    title: "Python → ARM64 Translator",
    description:
      "A compiler-style tool that translates a subset of Python into its corresponding ARM64 assembly representation.",
    github_url: "https://github.com/arashinho-gh/Assembly_language",
    img: "5",
    skills: ["Python", "Assembly", "Compilers"],
  },
  {
    title: "Shoe Size Plugin",
    description:
      "A Chrome extension that converts your shoe size across brands automatically based on a previous brand/size input.",
    github_url: "https://github.com/arashinho-gh/Shoe-Plugin",
    img: "6",
    skills: ["JavaScript", "React", "CSS"],
  },
];

const Projects = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const openUrl = (url: string) =>
    window.open(url, "_blank", "noopener,noreferrer");

  return (
    <section className="projects reveal" ref={ref}>
      <p className="section-label">Featured Projects</p>
      <div className="projects-grid">
        {PROJECTS.map((proj) => (
          <div className="projects-card" key={proj.title}>
            <div
              className={`projects-card-img projects-card-img--${proj.img}`}
            />
            <div className="projects-card-body">
              <div className="projects-card-header">
                <h3 className="projects-card-title">{proj.title}</h3>
                <div className="projects-card-links">
                  {proj.github_url && (
                    <IconButton
                      size="small"
                      onClick={() => openUrl(proj.github_url!)}
                      sx={{ color: "var(--text-secondary)" }}
                    >
                      <GitHubIcon sx={{ fontSize: 18 }} />
                    </IconButton>
                  )}
                  {proj.link && (
                    <IconButton
                      size="small"
                      onClick={() => openUrl(proj.link!)}
                      sx={{ color: "var(--text-secondary)" }}
                    >
                      <OpenInNewIcon sx={{ fontSize: 18 }} />
                    </IconButton>
                  )}
                </div>
              </div>
              <p className="projects-card-desc">{proj.description}</p>
              <div className="projects-card-skills">
                {proj.skills.map((s) => (
                  <span key={s} className="projects-card-skill">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
