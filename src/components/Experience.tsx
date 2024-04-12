import React from "react";

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
        "Currently contributing both to the Front‑end and Back-end aspect of a Microservice Architecture application and managing it’s API gateways by using the Spring Framework, TypeScript, SQL, and NoSQL databases.",
        "The front-end aspect required delivery to three other teams, by using technologies in React and Redux which required modification, debugging and feature addition to the novel and legacy systems.",
        "Working on the modernization of a legacy system in an Agile environment by contributing to eight different repositories and communicating with the DevOps team to ensure the delivery of all the products, which has led to 100+ commit contributions over the past 4 months.",
      ],
    },
  ],
};

export default Experience;
