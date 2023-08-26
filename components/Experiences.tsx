const Experience = ({
  date,
  title,
  description,
}: {
  date: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="mb-8">
      <header className="mb-1 ">{date}</header>
      <div>
        <h3 className="mb-3 text-lg font-medium text-slate-200">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Experiences = () => {
  return (
    <section id="experience">
      <h1 className="head_text">EXPERIENCE</h1>

      <Experience
        date="JUL 2020 - FEB 2023"
        title="Full Stack Software Engineer - SPJ Solutions Inc"
        description="Developed and maintained Virtual Machine migration feature using React and Node.js to handle various scenarios, successfully migrating thousands of virtual machines with 99.99% uptime.
        Built RESTful APIs and database structures utilizing Node, Express and PostgreSQLto support frontend functionality, integrating with various data sources and complex third-party APIs.
        Designed and implemented a reusable Task Manager UI in React to modularize automation processes and reduce redeployment times by 60% in cases of environmental issues.
        Collaborated closely with a cross-functional agile team of networking consultants to troubleshoot issues and develop features tailored to different customer needs."
      />

      <Experience
        date="AUG 2019 - NOV 2019"
        title="Software Engineering Immersive Resident - Galvanize"
        description="Mentored students in JavaScript fundamentals, data structures, and front/back-end technologies resulting in 100% students passing the midterm.
        Utilized Agile methodology to meet team development goals.
        Evaluated the technical abilities of prospective students with live coding interviews."
      />
    </section>
  );
};

export default Experiences;
