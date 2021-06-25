import React from "react";
import { Fragment } from "react";

import Job from "./Job";
import classes from "./JobList.module.css";

const JobList = (props) => {
  return (
    <Fragment>
      <ul className={classes.list}>
        {props.jobs.map((job) => (
          <Job
            key={job.id}
            id={job.id}
            company={job.company}
            role={job.role}
            techStack={job.techStack}
            appliedDate={job.appliedDate}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default JobList;
