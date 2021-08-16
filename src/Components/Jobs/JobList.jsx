import React from "react";
import { IconButton } from "@material-ui/core";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";

import Card from "../UI/Card";
import Job from "./Job";
import classes from "./JobList.module.css";

const JobList = (props) => {
  return (
    <Card>
      <IconButton color="primary" aria-label="add to shopping cart">
        <AddCircleRoundedIcon />
      </IconButton>
      <ul className={classes.list}>
        {props.jobs.map((job) => (
          <Job
            key={job.id}
            id={job.id}
            company={job.company}
            role={job.role}
            techStack={job.techStack}
            appliedDate={job.appliedDate}
            onDelete={props.onDelete}
          />
        ))}
      </ul>
    </Card>
  );
};

export default JobList;
