import React from "react";

import JobForm from "./JobForm";
import useHttp from "../../hooks/use-http";
import { addJob } from "../../lib/api";

const NewJob = (props) => {
  const { sendRequest } = useHttp(addJob);

  const addJobHandler = (newJob) => {
    sendRequest(newJob);
  };

  return (
    <div>
      <JobForm onClose={props.onClose} onEnterJob={addJobHandler} />
    </div>
  );
};

export default NewJob;
