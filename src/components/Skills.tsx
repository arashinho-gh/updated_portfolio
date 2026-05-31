import { useEffect, useRef } from "react";

const SKILL_GROUPS: { category: string; items: string[] }[] = [
  {
    category: "Languages",
    items: ["C#", "TypeScript", "Python", "Java", "Golang", "SQL", "JavaScript"],
  },
  {
    category: "Frameworks",
    items: ["ASP.NET Core", "React.js", "Node.js", "Spring Boot", "Express.js", "Redux", "LangChain"],
  },
  {
    category: "Cloud & DevOps",
    items: ["Azure", "AWS", "Docker", "Kafka", "Firebase", "GCP"],
  },
  {
    category: "Tools",
    items: ["PostgreSQL", "MongoDB", "OAuth 2.0", "Datadog", "Postman", "Git", "JUnit"],
  },
];

const Skills = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills reveal" ref={ref}>
      <p className="section-label">Technical Skills</p>
      <div className="skills-grid">
        {SKILL_GROUPS.map(({ category, items }) => (
          <div key={category} className="skills-group">
            <h3 className="skills-group-title">{category}</h3>
            <div className="skills-tags">
              {items.map((skill) => (
                <span key={skill} className="skills-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
