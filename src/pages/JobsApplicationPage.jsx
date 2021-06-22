import React, { Fragment, useState, useEffect } from "react";
import { Route, useHistory } from "react-router-dom";

import NewJob from "../Components/Jobs/NewJob";
import Modal from "../Components/UI/Modal";
import Button from "../Components/UI/Button";
import JobsList from "../Components/Jobs/JobsList";
import JobDetailsPage from "./JobDetailsPage";
import LoadingSpinner from "../Components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getJobs } from "../lib/api";

const JobsApplicationPage = () => {
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();
  const { sendRequest, data: jobs, error, status } = useHttp(getJobs, true);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
    history.push("/applications");
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

  return (
    <Fragment>
      <section>
        <Button onClick={showModalHandler}>Add Job</Button>
        {showModal && (
          <Modal onClose={closeModalHandler}>
            <NewJob onClose={closeModalHandler} />
          </Modal>
        )}
        <JobsList jobs={jobs} />
        <Route path="/applications/:applicationId">
          <Modal onClose={closeModalHandler}>
            <JobDetailsPage jobs={jobs} />
          </Modal>
        </Route>
      </section>
    </Fragment>
  );
};

export default JobsApplicationPage;
