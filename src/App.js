import React, { Fragment, useEffect, useState } from "react";

import JobsList from "./components/JobsList";
// import Header from "./layout/Header";
import "./App.css";

const URL =
  "https://track-it-temp-759d7-default-rtdb.europe-west1.firebasedatabase.app/jobs.json";

function App() {
  const [jobsData, setJobsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchJobsHandler();
  }, []);

  const fetchJobsHandler = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(URL);

      if (!response.ok) {
        throw new Error("Could not fetch data");
      }

      const data = await response.json();

      setJobsData(data);
      setIsLoading(false);
    } catch (error) {
      alert(error.message);
    }
  };

  if (isLoading) {
    return <p>Loading... Please wait</p>;
  }

  return (
    <Fragment>
      <section>
        {/* <Header /> */}
        <JobsList jobs={jobsData} />
      </section>
    </Fragment>
  );
}

export default App;
