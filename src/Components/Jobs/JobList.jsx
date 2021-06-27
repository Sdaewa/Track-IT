import React from "react";

import Card from "../UI/Card";
import Job from "./Job";
import useHttp from "../../hooks/use-http";
import { deleteJob } from "../../lib/api";
import classes from "./JobList.module.css";

const JobList = (props) => {
  const { sendRequest } = useHttp(deleteJob);

  const deleteHandler = async (jobId) => {
    sendRequest(jobId);
    console.log(jobId);
  };

  return (
    <Card>
      <ul className={classes.list}>
        {props.jobs.map((job) => (
          <Job
            key={job.id}
            id={job.id}
            company={job.company}
            role={job.role}
            techStack={job.techStack}
            appliedDate={job.appliedDate}
            onDelete={deleteHandler}
          />
        ))}
      </ul>
    </Card>
  );
};

export default JobList;
