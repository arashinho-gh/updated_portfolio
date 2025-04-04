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
        "Optimized internal service calls, driving a 50% improvement in data migrations by reducing latency and enhancing inter-service communication.",
        "Implemented a metadata-driven approach for migrating data into new schema, making it compatible with the Application Metadata Framework (AMF) to enhance system scalability and streamline data management.",
        "Reconfigured the PowerShell migration script, reducing initial project setup time from 15 minutes to 2 minutes and streamlining the migration process for enhanced deployment efficiency.",
        "Designed and implemented new V3 API endpoints, resolving critical payload issues and improving data throughput by 40%, resulting in enhanced performance and system stability for legacy systems.",
      ],
    },
    {
      title: "EllisDon | Full Stack Developer Intern",
      date: "September 2023 - August 2024",
      location: "Mississauga - Canada",
      descriptions: [
        "Collaborated on the modernization of the legacy Request for Information (RFI) module, implementing new API endpoints that reduced system latency by 20% within a year.",
        "Integrated an interactive Gantt Chart within the subcontractor communication portal UI, enabling 1,000+ subcontractors to effectively visualize and manage project deadlines.",
        "Developed a service that updates table schema and data in real-time, with the capability to export the modified data into Excel sheets, streamlining data analysis and reporting for 1,000+ subcontractors.",        
        "Contributed to the development of 15+ components for an internal UI library, including a widely adopted Rich Text Editor (RTE), enhancing user experience across all company products.",
      ],
    },
  ],
};

export default Experience;
