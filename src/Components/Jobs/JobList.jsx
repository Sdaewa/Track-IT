import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  CssBaseline,
  Grid,
  Container,
  Button,
  IconButton,
} from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";

// import Job from "./Job";
// import classes from "./JobList.module.css";
import useStyles from "./stylesJobList";

const JobList = (props) => {
  // const jobs = props.jobs;
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <main>
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
          <Grid container spacing={4}>
            <Grid item>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1966&q=80"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography variant="h5" gutterBottom>
                    Job title
                  </Typography>
                  <Typography>Date</Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained" color="primary">
                    Details
                  </Button>
                  <Button variant="contained" color="secondary">
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
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
