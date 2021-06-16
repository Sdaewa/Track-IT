import React, { useRef } from "react";

import Button from "../UI/Button";
import classes from "./JobForm.module.css";

function JobForm(props) {
  const companyRef = useRef("");
  const roleRef = useRef("");
  const techStackRef = useRef("");
  const locationRef = useRef("");
  const appliedDateRef = useRef("");

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const job = {
      company: companyRef.current.value,
      role: roleRef.current.value,
      techStack: techStackRef.current.value,
      locationText: locationRef.current.value,
      appliedDate: appliedDateRef.current.value,
    };

    props.onAddJob(job);
  }

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
        <label htmlFor="location">Location</label>
        <textarea rows="1" id="Role" ref={locationRef}></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor="applied">When did you apply?</label>
        <input type="date" id="date" ref={appliedDateRef} />
      </div>

      <Button type="button" onClick={submitHandler}>
        Add Job
      </Button>
      <Button type="button">Cancel</Button>
    </form>
  );
}

export default JobForm;
