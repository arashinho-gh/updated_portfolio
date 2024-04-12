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
      date: "Sep 2023 - Current",
      location: "Mississauga - Canada",
      descriptions: [
        "Currently contributing both to the Front‑end and Back-end aspect of a Microservice Architecture application and managing it’s API gateways by using the Spring Framework, TypeScript, SQL, and NoSQL databases.",
        "The front-end aspect required delivery to three other teams, by using technologies in React and Redux which required modification, debugging and feature addition to the novel and legacy systems.",
        "Working on the modernization of a legacy system in an Agile environment by contributing to eight different repositories and communicating with the DevOps team to ensure the delivery of all the products, which has led to 100+ commit contributions over the past 4 months.",
      ],
    },
    {
      title: "Course Companion | Co-Founder & Full Stack Developer",
      date: "Sep 2023 - Current",
      location: "Hamilton - Canada",
      descriptions: [
        "Currently founding a start up AI application that provides students and instructors with tools to access their course materials in an easier way and instructors to have a better insight on the students.",
        "Worked as the lead front-end developer in the team while also implementing an AI service in python that interacts with a gateway service,vector DB in pinecone and an RDMS developed in PostgreSQL.",
        "Contributed to the deployment of our microfront end front-end services by using AWS technologies in ECS, S3, and gateway.",
        "Tested out our application with 120+ students so far and have received 90% positive feedback on the performance of our application.",
      ],
    },
  ],
};

export default Experience;
