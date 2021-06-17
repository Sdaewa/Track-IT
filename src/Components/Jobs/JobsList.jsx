import React from "react";

import Job from "./Job";
import classes from "./JobsList.module.css";

const JobsList = (props) => {
  return (
    <ul className={classes["jobs-list"]}>
      {props.jobs.map((job) => (
        <Job key={job.id} id={job.id} company={job.company} />
      ))}
    </ul>
  );
};

export default JobsList;
