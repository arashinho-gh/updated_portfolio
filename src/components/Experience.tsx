import { useEffect, useRef } from "react";

interface Job {
  company: string;
  role: string;
  project?: string;
  date: string;
  location: string;
  tech: string[];
  descriptions: string[];
}

const EXPERIENCES: Job[] = [
  {
    company: "Dayforce",
    role: "Software Developer II",
    project: "GlobalPerson Project",
    date: "January 2025 – Present",
    location: "Toronto, Canada",
    tech: ["C#", "ASP.NET Core", "SQL", "Kafka", "Azure"],
    descriptions: [
      "Resolved a critical security bug affecting 20% of QA instances by introducing a cancellation token, improving reliability and reducing test failures.",
      "Optimized internal service calls, driving a 50% improvement in data migrations by reducing latency and enhancing inter-service communication.",
      "Contributed to the large-scale migration of 200,000+ employee records to a new architecture, ensuring data integrity and system scalability.",
      "Designed and deployed new V3 API endpoints, resolving payload issues and increasing data throughput by 20%, stabilizing performance for legacy systems.",
      "Refactored PowerShell migration scripts, cutting project setup time from 10 minutes to 2 minutes, streamlining deployments and enhancing developer productivity.",
    ],
  },
  {
    company: "EllisDon",
    role: "Full Stack Developer Intern",
    date: "September 2023 – August 2024",
    location: "Mississauga, Canada",
    tech: ["Java", "Spring", "Node.js", "React", "Datadog", "Azure", "GCP"],
    descriptions: [
      "Built a real-time schema and data update service with Excel export functionality, streamlining reporting for 1,000+ subcontractors and reducing manual data handling.",
      "Modernized the legacy Request for Information (RFI) module by developing new API endpoints, cutting system latency by 20% and improving reliability for thousands of users.",
      "Developed and integrated an interactive Gantt Chart into the subcontractor portal, enabling 1,000+ subcontractors to effectively track and manage project deadlines.",
      "Contributed 15+ components to the internal UI library, including a widely adopted Rich Text Editor, standardizing design and improving user experience across multiple platforms.",
    ],
  },
];

const Experience = () => {
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
    <section className="experience reveal" ref={ref}>
      <p className="section-label">Experience</p>
      <div className="experience-list">
        {EXPERIENCES.map((job) => (
          <div className="experience-item" key={`${job.company}-${job.role}`}>
            <div className="experience-item-header">
              <div className="experience-item-left">
                <h2 className="experience-item-company">{job.company}</h2>
                <div className="experience-item-role">{job.role}</div>
                {job.project && (
                  <div className="experience-item-project">{job.project}</div>
                )}
                <div className="experience-item-tech">
                  {job.tech.map((t) => (
                    <span key={t} className="experience-item-chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="experience-item-right">
                <div className="experience-item-date">{job.date}</div>
                <div className="experience-item-location">{job.location}</div>
              </div>
            </div>
            <ul className="experience-item-bullets">
              {job.descriptions.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
