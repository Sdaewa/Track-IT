import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import JobForm from "../components/jobs/JobForm";
import useHttp from "../hooks/use-http";
import { addJob } from "../lib/api";

const NewJobPage = () => {
  const { sendRequest, status } = useHttp(addJob);
  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.push("/jobs");
    }
  }, [status, history]);

  const addJobHandler = (jobData) => {
    sendRequest(jobData);
  };

  return <JobForm isLoading={status === "pending"} onAddJob={addJobHandler} />;
};

export default NewJobPage;
