import React from "react";
import {
  Typography,
  Divider,
  Grid,
  Container,
  IconButton,
} from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";

import Job from "./Job";
import Card from "../UI/Card";

const JobList = (props) => {
  const jobs = props.jobs;

  return (
    <Card>
      <div>
        <Container maxWidth="sm">
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            color="textPrimary">
            Job Applications
            <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
          </Typography>
        </Container>
      </div>
      <div>
        <Grid container spacing={0} justifyContent="center">
          <Grid item>
            <IconButton
              style={{ margin: "16px", padding: "24px" }}
              href="/new-job">
              <AddCircleIcon color="primary" fontSize="medium" />
            </IconButton>
          </Grid>
        </Grid>
      </div>

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
    </Card>
  );
};

export default JobList;
