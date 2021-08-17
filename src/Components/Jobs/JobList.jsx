import React from "react";
import { IconButton } from "@material-ui/core";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Delete } from "@material-ui/icons";
// import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import Job from "./Job";
// import classes from "./JobList.module.css";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardContent: {
    padding: "0px",
    flexGrow: 1,
  },
  CardActions: {
    padding: "0px",
    flexGrow: 1,
  },
}));

const JobList = (props) => {
  const jobs = props.jobs;
  const classes = useStyles();

  const deleteHandler = (event) => {
    event.preventDefault();
    props.onDelete(props.id);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            <IconButton color="primary">
              <AddCircleRoundedIcon />
            </IconButton>
            {jobs.map((job) => (
              <Grid item key={job.id} xs={12} sm={6} md={4}>
                <CardContent className={classes.cardContent}>
                  <Job
                    key={job.id}
                    id={job.id}
                    company={job.company}
                    role={job.role}
                    techStack={job.techStack}
                    appliedDate={job.appliedDate}
                    onDelete={props.onDelete}
                  />
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    className="btn"
                    color="primary"
                    href={`/jobs/${props.id}`}>
                    Details
                  </Button>
                  <Button
                    startIcon={<Delete />}
                    variant="contained"
                    className="btn"
                    color="secondary"
                    onClick={deleteHandler}>
                    Delete
                  </Button>
                </CardActions>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
};

export default JobList;

{
  /* <Grid container spacing={0}>

<ul className={classes.list}>
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
</ul>
</Grid> */
}
