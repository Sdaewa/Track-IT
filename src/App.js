import React, { Fragment, useEffect, useState } from "react";

import JobsList from "./components/JobsList";
import Header from "./layout/Header";
import "./App.css";

const URL =
  "https://track-it-temp-759d7-default-rtdb.europe-west1.firebasedatabase.app/jobs.json";

function App() {
  const [jobsData, setJobsData] = useState([]);

  useEffect(() => {
    fetchJobsHandler();
  }, []);

  const fetchJobsHandler = async () => {
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error("Could not fetch data");
      }

      const data = await response.json();
      console.log(data);
      setJobsData(data);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Fragment>
      <Header />
      <section>
        <JobsList jobs={jobsData} />
      </section>
    </Fragment>
  );
}

export default App;
