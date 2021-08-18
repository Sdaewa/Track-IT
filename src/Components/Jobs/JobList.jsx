import React from "react";
import {
  Typography,
  CssBaseline,
  Grid,
  Container,
  IconButton,
} from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";

import Job from "./Job";
import useStyles from "./stylesJobList";

const JobList = (props) => {
  const jobs = props.jobs;
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <div className={classes.container}>
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
      <div>
        <Grid container spacing={0} justifyContent="center">
          <Grid item>
            <IconButton className={classes.iconButton} href="/new-job">
              <AddCircleIcon color="primary" fontSize="medium" />
            </IconButton>
          </Grid>
        </Grid>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={2}>
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
        </Grid>
      </Container>
    </>
  );
};

export default JobList;
