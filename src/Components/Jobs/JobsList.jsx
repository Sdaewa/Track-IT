import React from "react";

import Job from "./Job";
import classes from "./JobsList.module.css";

const JobsList = (props) => {
  if (!props.jobs) {
    return <p>Add a job application</p>;
  }

  return (
    <ul className={classes["jobs-list"]}>
      <button>Add Job</button>
      {Object.values(props.jobs).map((job) => (
        <Job
          key={job}
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
