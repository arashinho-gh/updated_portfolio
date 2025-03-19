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
        "Modified core services and endpoints to resolve a critical payload threshold issue, enabling reliable handling of payloads exceeding 1000 users and significantly reducing transfer errors",
        "Optimized internal service calls, driving a 50% improvement in data migrations by reducing latency and enhancing inter-service communication.",
        "Reconfigured a PowerShell migration script that integrated 10 additional scripts to automate database setup and configuration, streamlining the initial project setup and enhancing overall deployment efficiency.",
      ],
    },
    {
      title: "EllisDon | Full Stack Developer Intern",
      date: "September 2023 - August 2024",
      location: "Mississauga - Canada",
      descriptions: [
        "Contributed to the development of 15+ components for an internal UI library, including a widely adopted Rich Text Editor (RTE), enhancing user experience across all company products.",
        "Developed a service that updates table schema and data in real-time, with the capability to export the modified data into Excel sheets, streamlining data analysis and reporting for 1,000+ subcontractors.",
        "Collaborated on the modernization of the legacy Request for Information (RFI) module, implementing new API endpoints that reduced system latency by 20% within a year.",
        "Integrated an interactive Gantt Chart within the subcontractor communication portal UI, enabling 1,000+ subcontractors to effectively visualize and manage project deadlines.",
      ],
    },
  ],
};

export default Experience;
