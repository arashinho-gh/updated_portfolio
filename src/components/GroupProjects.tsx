import { useEffect, useRef } from "react";

interface GroupProject {
  title: string;
  subtitle: string;
  date: string;
  tech: string[];
  descriptions: string[];
}

const GROUP_PROJECTS: GroupProject[] = [
  {
    title: "Course Companion",
    subtitle: "Co-Founder & Full Stack Developer",
    date: "September 2023 – April 2024",
    tech: ["TypeScript", "Java", "React", "LangChain", "Pinecone", "Docker", "AWS"],
    descriptions: [
      "Developed a university-exclusive web application offering 24/7 student support for course-specific material.",
      "Utilized OpenAI's LLM and Pinecone Vector database to securely provide students with seamless access to course resources, including lectures, notes, and readings.",
      "Built a course management system empowering professors to customize and manage LLM training for their courses, incorporating end-of-semester feedback for continuous optimization.",
      "Implemented an interactive chat feature enabling students to ask course-related questions and receive real-time support, enhancing their overall learning experience.",
    ],
  },
];

const GroupProjects = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="group-projects reveal" ref={ref}>
      <p className="section-label">Startup</p>
      <div className="group-projects-list">
        {GROUP_PROJECTS.map((proj) => (
          <div className="group-projects-item" key={proj.title}>
            <div className="group-projects-item-header">
              <div className="group-projects-item-left">
                <h2 className="group-projects-item-title">{proj.title}</h2>
                <div className="group-projects-item-subtitle">{proj.subtitle}</div>
                <div className="group-projects-item-tech">
                  {proj.tech.map((t) => (
                    <span key={t} className="group-projects-item-chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="group-projects-item-right">
                <div className="group-projects-item-date">{proj.date}</div>
              </div>
            </div>
            <ul className="group-projects-item-bullets">
              {proj.descriptions.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GroupProjects;
