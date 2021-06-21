import React, { Fragment, useCallback, useState, useEffect } from "react";
import { Route, useHistory } from "react-router-dom";

import NewJob from "../Components/Jobs/NewJob";
import Modal from "../Components/UI/Modal";
import Button from "../Components/UI/Button";
import JobsList from "../Components/Jobs/JobsList";
import JobDetailsPage from "./JobDetailsPage";

const URL =
  "https://track-it-temp-759d7-default-rtdb.europe-west1.firebasedatabase.app/jobs.json";

const JobsApplicationPage = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [jobsData, setJobsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const fetchJobsHandler = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await fetch(URL);

      if (!response.ok) {
        throw new Error("Could not fetch data");
      }

      const data = await response.json();

      const jobs = [];

      for (const key in data) {
        jobs.push({
          id: key,
          company: data[key].company,
          role: data[key].role,
          techStack: data[key].techStack,
          appliedDate: data[key].appliedDate,
        });
      }

      setJobsData(jobs);
      setIsLoading(false);
    } catch (error) {
      alert(error.message);
    }
  }, []);

  const addNewJobHandler = useCallback((newJob) => {
    setJobsData((prevJob) => {
      return [...prevJob, newJob];
    });
  }, []);

  useEffect(() => {
    fetchJobsHandler();
  }, [fetchJobsHandler]);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
    history.push("/applications");
  };

  if (isLoading) {
    return <p>Loading... Please wait</p>;
  }

  return (
    <Fragment>
      <section>
        <Button onClick={showModalHandler}>Add Job</Button>
        {showModal && (
          <Modal onClose={closeModalHandler}>
            <NewJob onAddJob={addNewJobHandler} onClose={closeModalHandler} />
          </Modal>
        )}
        <JobsList jobs={jobsData} fetchJobs={fetchJobsHandler} />
        <Route path="/applications/:applicationId">
          <Modal onClose={closeModalHandler}>
            <JobDetailsPage jobs={jobsData} />
          </Modal>
        </Route>
      </section>
    </Fragment>
  );
};

export default JobsApplicationPage;
