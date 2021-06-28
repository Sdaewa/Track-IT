import React from "react";
import { Fragment, useRef, useState } from "react";
import { Prompt } from "react-router-dom";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./JobForm.module.css";

const isEmpty = (value) => value.trim() === "";

const JobForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);
  const [formInputsValidity, setFormInputsValidity] = useState({
    company: true,
    role: true,
    techStack: true,
    appliedDate: true,
  });

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

    const companyIsValid = !isEmpty(inputCompany);
    const roleIsValid = !isEmpty(inputRole);
    const techStackIsValid = !isEmpty(inputTechStack);
    const appliedDateIsValid = !isEmpty(inputAppliedDate);

    setFormInputsValidity({
      company: companyIsValid,
      role: roleIsValid,
      techStack: techStackIsValid,
      appliedDate: appliedDateIsValid,
    });

    const formIsValid =
      companyIsValid && roleIsValid && techStackIsValid && appliedDateIsValid;

    if (formIsValid) {
      props.onAddJob({
        company: inputCompany,
        role: inputRole,
        techStack: inputTechStack,
        appliedDate: inputAppliedDate,
      });
    } else {
      return;
    }
  }
  const companyControlClasses = `${classes.control} ${
    formInputsValidity.company ? "" : classes.invalid
  }`;
  const roleControlClasses = `${classes.control} ${
    formInputsValidity.role ? "" : classes.invalid
  }`;
  const techStackCodeControlClasses = `${classes.control} ${
    formInputsValidity.techStack ? "" : classes.invalid
  }`;
  const appliedDateControlClasses = `${classes.control} ${
    formInputsValidity.appliedDate ? "" : classes.invalid
  }`;

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
        message={
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

          <div className={companyControlClasses}>
            <label htmlFor="company">Company</label>
            <input type="text" id="company" ref={companyRef} />
            {!formInputsValidity.company && <p>Please enter a company</p>}
          </div>
          <div className={roleControlClasses}>
            <label htmlFor="role">Role</label>
            <input type="text" id="role" ref={roleRef} />
            {!formInputsValidity.role && <p>Please enter a role</p>}
          </div>
          <div className={techStackCodeControlClasses}>
            <label htmlFor="techStack">Tech Stack</label>
            <input type="text" id="techStack" ref={techStackRef} />
            {!formInputsValidity.techStack && (
              <p>Please enter the tech stack</p>
            )}
          </div>
          <div className={appliedDateControlClasses}>
            <label htmlFor="appliedDate">Date</label>
            <input type="date" id="appliedDate" ref={appliedDateRef}></input>
            {!formInputsValidity.appliedDate && <p>Please enter a date</p>}
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
