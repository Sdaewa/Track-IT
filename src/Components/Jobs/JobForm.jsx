import React from "react";
import { Fragment, useRef, useState } from "react";
import { Prompt } from "react-router-dom";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./JobForm.module.css";

const JobForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);

  const companyRef = useRef();
  const roleRef = useRef();
  const techStackRef = useRef();
  const appliedDateRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const inputCompany = companyRef.current.value;
    const inputRole = roleRef.current.value;
    const inputTechStack = techStackRef.current.value;
    const inputAppliedDate = appliedDateRef.current.value;

    // optional: Could validate here

    props.onAddJob({
      company: inputCompany,
      role: inputRole,
      techStack: inputTechStack,
      appliedDate: inputAppliedDate,
    });
  }

  const finishEnteringHandler = () => {
    setIsEntering(false);
  };

  const formFocusedHandler = () => {
    setIsEntering(true);
  };

  return (
    <Fragment>
      <Prompt
        when={isEntering}
        message={(location) =>
          "Are you sure you want to leave? All your entered data will be lost!"
        }
      />
      <Card>
        <form
          onFocus={formFocusedHandler}
          className={classes.form}
          onSubmit={submitFormHandler}>
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="company">Company</label>
            <input type="text" id="company" ref={companyRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="role">Role</label>
            <input type="text" id="role" ref={roleRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="techStack">Tech Stack</label>
            <input type="text" id="techStack" ref={techStackRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="appliedDate">Date</label>
            <input type="date" id="appliedDate" ref={appliedDateRef}></input>
          </div>
          <div className={classes.actions}>
            <button onClick={finishEnteringHandler} className="btn">
              Add Job
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default JobForm;
