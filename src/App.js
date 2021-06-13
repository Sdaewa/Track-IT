import React, { Fragment } from "react";

import JobsList from "./components/JobsList";
import Header from "./layout/Header";
import "./App.css";

function App() {
  const dummyJobs = [
    {
      id: 1,
      company: "Google",
      role: "Backend Engineer",
      location: "Berlin",
      techStack: "Java",
      appliedDate: "2021-05-18",
    },
    {
      id: 2,
      company: "Apple",
      role: "FS engineer",
      location: "London",
      techStack: "Node, React, Mongo",
      appliedDate: "2021-05-18",
    },
  ];

  return (
    <Fragment>
      <Header />
      <section>
        <JobsList jobs={dummyJobs} />
      </section>
    </Fragment>
  );
}

export default App;
