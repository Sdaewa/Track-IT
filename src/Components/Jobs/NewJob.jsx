import React from "react";

import JobForm from "./JobForm";

const URL =
  "https://track-it-temp-759d7-default-rtdb.europe-west1.firebasedatabase.app/jobs.json";

const NewJob = (props) => {
  const addJobHandler = async (newJob) => {
    const response = await fetch(URL, {
      method: "POST",
      body: JSON.stringify({ jobData: newJob }),
      returnSecureToken: true,
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    const _id = data.name;
    const newJobApplication = { id: _id, job: newJob };

    props.onAddJob(newJobApplication);
  };

  return (
    <div>
      <JobForm onClose={props.onClose} onEnterJob={addJobHandler} />
    </div>
  );
};

export default NewJob;
