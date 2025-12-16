interface JobType {
  title: string;
  date: string;
  location: string;
  descriptions: string[];
}

const Experience = () => {
  const { baseClassName, experiences } = Experience.constants;

  const renderJob = (props: JobType) => {
    const { title, date, location, descriptions } = props;
    return (
      <div className={`${baseClassName}-job`}>
        <div
          className={`${baseClassName}-job-header`}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className={`${baseClassName}-job-title`}>{title}</div>
            <span className={`${baseClassName}-job-location`}>{location}</span>
          </div>
          <div className={`${baseClassName}-job-date`}>{date}</div>
        </div>
        <ul>
          {descriptions.map((elm) => {
            return <li className={`${baseClassName}-job-desc`}>{elm}</li>;
          })}
        </ul>
      </div>
    );
  };

  return (
    <div className={baseClassName}>
      <div className={`${baseClassName}-title`}>Experience</div>
      <div className={`${baseClassName}-jobs`}>
        {experiences.map((elm) => renderJob(elm))}
      </div>
    </div>
  );
};

Experience.constants = {
  baseClassName: "experience",
  experiences: [
    {
      title: "Dayforce | Software Developer Intern",
      date: "January 2025 - Current",
      location: "Toronto - Canada",
      descriptions: [
        "Resolved a critical security bug affecting 20% of QA instances by introducing a cancellation token, improving reliability and reducing test failures.",
        "Optimized internal service calls, driving a 50% improvement in data migrations by reducing latency and enhancing inter-service communication.",
        "Contributed to the large-scale migration of 200,000+ employee records to a new architecture, ensuring data integrity and system scalability.",
        "Designed and deployed new V3 API endpoints, resolving payload issues and increasing data throughput by 20%, stabilizing performance for legacy systems.",
        "Refactored PowerShell migration scripts,cutting project setup time from 10 minutes to 2 minutes, streamlining deployments and enhancing developer productivity."
      ],
    },
    {
      title: "EllisDon | Full Stack Developer Intern",
      date: "September 2023 - August 2024",
      location: "Mississauga - Canada",
      descriptions: [
        "Built a real-time schema and data update service with Excel export functionality, streamlining reporting for 1,000+ subcontractors and reducing manual data handling.",
        "Modernized the legacy Request for Information (RFI) module by developing new API endpoints, cutting system latency by 20% and improving reliability for thousands of users.",
        "Developed and integrated an interactive Gantt Chart into the subcontractor portal, enabling 1,000+ subcontractors to effectively track and manage project deadlines.",        
        "Contributed 15+ components to the internal UI library, including a widely adopted Rich Text Editor, standardizing design and improving user experience across multiple platforms.",
      ],
    },
  ],
};

export default Experience;
