import React, { useEffect } from "react";

import JobList from "../Components/Jobs/JobList";
import LoadingSpinner from "../Components/UI/LoadingSpinner";
import NoJobsFound from "../Components/Jobs/NoJobsFound";
import useHttp from "../hooks/use-http";
import { getAllJobs } from "../lib/api";
import { deleteJob } from "../lib/api";

const AllJobs = () => {
  const { sendRequest, status, data: jobs, error } = useHttp(getAllJobs, true);
  const { sendRequest: delJob } = useHttp(deleteJob);

  const deleteHandler = async (jobId) => {
    delJob(jobId);
    sendRequest();
  };

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === "completed" && (!jobs || jobs.length === 0)) {
    return <NoJobsFound />;
  }

  return <JobList onDelete={deleteHandler} jobs={jobs} />;
};

export default AllJobs;
