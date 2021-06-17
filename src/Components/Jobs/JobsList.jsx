import React, { useState, useCallback, useEffect } from "react";

import Job from "./Job";
import classes from "./JobsList.module.css";

const URL =
  "https://track-it-temp-759d7-default-rtdb.europe-west1.firebasedatabase.app/jobs.json";

const JobsList = () => {
  const [jobsData, setJobsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchJobsHandler = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await fetch(URL);

      if (!response.ok) {
        throw new Error("Could not fetch data");
      }

      const data = await response.json();

      setJobsData(data);
      setIsLoading(false);
    } catch (error) {
      alert(error.message);
    }
  }, []);

  useEffect(() => {
    fetchJobsHandler();
  }, [fetchJobsHandler]);

  if (isLoading) {
    return <p>Loading... Please wait</p>;
  }

  if (!jobsData) {
    return <p>Add a job application</p>;
  }

  return (
    <ul className={classes["jobs-list"]}>
      {Object.values(jobsData).map((job) => (
        <Job
          key={job.id}
          company={job.company}
          role={job.role}
          techStack={job.techStack}
          location={job.location}
          appliedDate={job.appliedDate}
        />
      ))}
    </ul>
  );
};

export default JobsList;
