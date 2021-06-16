import React, { Fragment, useState } from "react";

import JobForm from "../Components/Jobs/JobForm";
import Modal from "../Components/UI/Modal";
import Button from "../Components/UI/Button";
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
  console.log(data);
};

const JobsApplicationPage = (props) => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

  return (
    <Fragment>
      <Button onClick={showModalHandler}>Add Job</Button>
      {showModal && (
        <Modal>
          <JobForm onAddJob={addJobHandler} />
        </Modal>
      )}
      <section>
        <JobsList jobs={props.jobs} />
      </section>
    </Fragment>
  );
};

export default JobsApplicationPage;
