import React, { useEffect } from "react";
import { useParams, Route, useRouteMatch } from "react-router-dom";
import { CssBaseline, Container, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import FullJobDetails from "../Components/Jobs/FullJobDetails";
import Card from "../Components/UI/Card";
import Comments from "../Components/comments/Comments";
import useHttp from "../hooks/use-http";
import { getSingleJob } from "../lib/api";
import LoadingSpinner from "../Components/UI/LoadingSpinner";

const useStyles = makeStyles((theme) => ({
  main: {
    // margin: theme.spacing(5, 15, 15),
    padding: theme.spacing(5, 15, 15),
    margin: "auto",
  },
}));

const JobDetailsPage = () => {
  const classes = useStyles();
  const match = useRouteMatch();
  const params = useParams();

  const { jobId } = params;

  const { sendRequest, status, data: job, error } = useHttp(getSingleJob, true);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      sendRequest(jobId);
      mounted = false;
    }
    return () => {
      mounted = false;
    };
  }, [sendRequest, jobId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!job) {
    return <p>No job found</p>;
  }

  return (
    <>
      <CssBaseline />
      <Card>
        <Container className={classes.main} maxWidth="md">
          <FullJobDetails
            company={job.company}
            role={job.role}
            techStack={job.techStack}
            appliedDate={job.appliedDate}
          />
          <Route path={match.path} exact>
            <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
            <Comments />
          </Route>
        </Container>
      </Card>
    </>
  );
};

export default JobDetailsPage;
