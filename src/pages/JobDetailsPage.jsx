import React, { Fragment } from "react";
import { useParams, useHistory } from "react-router";

import Button from "../Components/UI/Button";
import classes from "./JobDetailsPage.module.css";

const JobDetailPage = (props) => {
  const params = useParams();
  const history = useHistory();

  const job = props.jobs.find((job) => job.id === params.applicationId);

  const btnHandler = (event) => {
    event.preventDefault();
    history.push("/applications");
  };

  return (
    <Fragment>
      <section className={classes.job}>
        <h1>{job.company}</h1>
        <h2>{job.role}</h2>
        <h2>{job.techStack}</h2>
        <p>{job.appliedDate}</p>
        <Button onClick={btnHandler}>Back</Button>
      </section>
    </Fragment>
  );
};

export default JobDetailPage;
