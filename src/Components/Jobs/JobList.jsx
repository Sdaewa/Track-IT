import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  CssBaseline,
  Grid,
  Container,
} from "@material-ui/core";

import Job from "./Job";
import classes from "./JobList.module.css";

const JobList = (props) => {
  // const jobs = props.jobs;

  return (
    <>
      <CssBaseline />
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              gutterBottom
              color="textPrimary">
              Job Applications
            </Typography>
          </Container>
        </div>
      </main>
    </>
  );
};

export default JobList;

{
  /* <ul className={classes.list}>
{jobs.map((job) => (
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
</ul> */
}
