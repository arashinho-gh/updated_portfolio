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
      title: "EllisDon | Full Stack Developer (Hybrid)",
      date: "Sep 2023 - August 2024",
      location: "Mississauga - Canada",
      descriptions: [
        "Contributed to the development of 15+ components for an internal UI library, including a widely adopted Rich Text Editor (RTE), enhancing user experience across all company products.",
        "Developed a service that updates table schema and data in real-time, with the capability to export the modified data into Excel sheets, streamlining data analysis and reporting for 1,000+ subcontractors.",
        "Collaborated on the modernization of the legacy Request for Information (RFI) module, implementing new API endpoints that reduced system latency by 20% within a year.",
        "Integrated an interactive Gantt Chart within the subcontractor communication portal UI, enabling 1,000+ subcontractors to effectively visualize and manage project deadlines.",
        "Led the front-end development of a subcontractor cost management web application, designed to integrate seamlessly with both EllisDon’s internal data and third-party company data.",
      ],
    },
    // {
    //   title: "Course Companion | Co-Founder & Full Stack Developer",
    //   date: "Sep 2023 - Current",
    //   location: "Hamilton - Canada",
    //   descriptions: [
    //     "Currently founding a start up AI application that provides students and instructors with tools to access their course materials in an easier way and instructors to have a better insight on the students.",
    //     "Worked as the lead front-end developer in the team while also implementing an AI service in python that interacts with a gateway service,vector DB in pinecone and an RDMS developed in PostgreSQL.",
    //     "Contributed to the deployment of our microfront end front-end services by using AWS technologies in ECS, S3, and gateway.",
    //     "Tested out our application with 120+ students so far and have received 90% positive feedback on the performance of our application.",
    //   ],
    // },
  ],
};

export default Experience;
