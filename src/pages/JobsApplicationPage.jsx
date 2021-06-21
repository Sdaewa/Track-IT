import React, { Fragment, useState } from "react";

import NewJob from "../Components/Jobs/NewJob";
import Modal from "../Components/UI/Modal";
import Button from "../Components/UI/Button";
import JobsList from "../Components/Jobs/JobsList";

const JobsApplicationPage = (props) => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  return (
    <Fragment>
      <Button onClick={showModalHandler}>Add Job</Button>
      {showModal && (
        <Modal onClose={closeModalHandler}>
          <NewJob onAddJob={props.onAddJob} onClose={closeModalHandler} />
        </Modal>
      )}
      <section>
        <JobsList fetchJobs={props.onFetch} />
      </section>
    </Fragment>
  );
};

export default JobsApplicationPage;
