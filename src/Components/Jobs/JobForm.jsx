import React, { useRef } from "react";

import Button from "../UI/Button";
import classes from "./JobForm.module.css";

const JobForm = (props) => {
  const companyRef = useRef("");
  const roleRef = useRef("");
  const techStackRef = useRef("");
  const appliedDateRef = useRef("");

  const addJobHandler = async (newJob) => {
    const response = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(newJob),
      returnSecureToken: true,
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    const job = {
      id: data.name,
      company: companyRef.current.value,
      role: roleRef.current.value,
      techStack: techStackRef.current.value,
      appliedDate: appliedDateRef.current.value,
    };
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // could add validation here...
    props.onClose();
    // props.onAddJob(job);
    addJobHandler();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="company">Company</label>
        <input type="text" id="company" ref={companyRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="role">Role</label>
        <textarea rows="1" id="Role" ref={roleRef}></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor="techStack">Tech Stack</label>
        <input type="text" id="techStack" ref={techStackRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="applied">When did you apply?</label>
        <input type="date" id="date" ref={appliedDateRef} />
      </div>
      <Button type="button" onClick={submitHandler}>
        Add
      </Button>
      <Button onClick={props.onClose} type="button">
        Cancel
      </Button>
    </form>
  );
};

export default JobForm;
