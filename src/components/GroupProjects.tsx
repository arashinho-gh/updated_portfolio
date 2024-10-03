interface JobType {
  title: string;
  date: string;
  location: string;
  descriptions: string[];
}

const GroupProjects = () => {
  const { baseClassName, projects } = GroupProjects.constants;

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
      <div className={`${baseClassName}-title`}>Group Projects</div>
      <div className={`${baseClassName}-jobs`}>
        {projects.map((elm) => renderJob(elm))}
      </div>
    </div>
  );
};

GroupProjects.constants = {
  baseClassName: "group-project",
  projects: [
    {
      title: "Course Companion | Co-Founder & Full Stack Developer",
      date: "Sep 2023 - April 2024",
      location: "Hamilton - Canada",
      descriptions: [
        "Developed a university-exclusive web application offering 24/7 student support for course-specific material.",
        "Utilized OpenAI’s LLM and Pinecone Vector database to securely provide students with seamless access to course resources, including lectures, notes, and readings.",
        "Built a course management system empowering professors to customize and manage LLM training for their courses, incorporating end-of-semester feedback for continuous optimization.",
        "Implemented an interactive chat feature, enabling students to ask course-related questions and receive real-time support, enhancing their learning experience.",
      ],
    },
  ],
};

export default GroupProjects;
