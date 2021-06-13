import React from "react";

import Job from "./Job";
import classes from "./JobsList.module.css";

const JobsList = (props) => {
  return (
    <ul className={classes["movies-list"]}>
      {props.jobs.map((job) => (
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
