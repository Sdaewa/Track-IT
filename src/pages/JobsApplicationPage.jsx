import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import JobForm from "../Components/Jobs/JobForm";
import JobsList from "../Components/Jobs/JobsList";

const addJobHandler = async (job) => {
  const response = await fetch(URL, {
    method: "POST",
    body: JSON.stringify(job),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
};

const JobsApplicationPage = (props) => {
  return (
    <Fragment>
      <Route path="/new-application">
        <JobForm onAddJob={addJobHandler} />
      </Route>
      <JobsList jobs={props.jobs} />
    </Fragment>
  );
};

export default JobsApplicationPage;
