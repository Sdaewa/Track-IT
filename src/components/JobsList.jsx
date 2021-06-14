import React from "react";

import Job from "./Job";
import classes from "./JobsList.module.css";

const JobsList = (props) => {
  console.log(props.jobs);
  return (
    <ul className={classes["jobs-list"]}>
      {Object.values(props.jobs).map((job) => (
        <Job
          key={job.id}
          company={job.company}
          role={job.role}
          techStack={job.techStack}
          location={job.location}
          appliedDate={job.appliedDate}
        />
      ))}
    </ul>
  );
};

export default JobsList;
